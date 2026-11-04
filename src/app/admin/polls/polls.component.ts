
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { ContentService } from '../../services/content.service';
import { NewsApiService } from '../../services/news-api.service';
import { OpinionPoll, uid } from '../../core/models';
import { environment } from '../../../environments/environment';

function blank(): OpinionPoll {
  return {
    id: uid('poll'),
    question: {
      ta: '',
      en: ''
    },
    options: [
      { ta: '', en: '' },
      { ta: '', en: '' }
    ],
    counts: [0, 0],
    active: false,
    voters: []
  };
}

@Component({
  selector: 'app-admin-polls',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css', './polls.component.responsive.css']
})
export class AdminPollsComponent implements OnInit {

  draft: OpinionPoll = blank();

  polls: OpinionPoll[] = [];

  error = '';
  message = '';

  loading = false;
  saving = false;
  deleting = false;

  constructor(
    public store: ContentService,
    private api: NewsApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    void this.loadPolls();
  }

  // ==========================================
  // LOAD ADMIN POLLS FROM MONGODB
  // ==========================================

  async loadPolls(): Promise<void> {
    if (this.loading) return;

    this.loading = true;
    this.error = '';

    try {
      await this.api.restoreSession();

      const response = await firstValueFrom(
        this.http.get<OpinionPoll[]>(
          `${environment.apiBaseUrl}/admin/polls`,
          { withCredentials: true }
        )
      );

      this.polls = response;

    } catch (error) {
      this.error = this.getError(error);
    } finally {
      this.loading = false;
    }
  }

  // ==========================================
  // NEW POLL
  // ==========================================

  newPoll(): void {
    if (this.saving || this.deleting) return;

    this.draft = blank();
    this.error = '';
    this.message = '';
  }

  // ==========================================
  // EDIT EXISTING POLL
  // ==========================================

  clone(p: OpinionPoll): OpinionPoll {
    const copy = structuredClone(p);

    copy.counts ??= copy.options.map(() => 0);
    copy.voters ??= [];

    return copy;
  }

  selectPoll(p: OpinionPoll): void {
    if (this.saving || this.deleting) return;

    this.draft = this.clone(p);
    this.error = '';
    this.message = '';
  }

  // ==========================================
  // TOTAL VOTE COUNT
  // ==========================================

  total(p: OpinionPoll): number {
    return (p.counts || []).reduce(
      (sum, count) => sum + (Number(count) || 0),
      0
    );
  }

  get hasVotes(): boolean {
    return this.total(this.draft) > 0;
  }

  get isSaved(): boolean {
    return this.polls.some(
      p => p.id === this.draft.id
    );
  }

  // ==========================================
  // POLL OPTIONS
  // ==========================================

  addOption(): void {
    if (
      this.saving ||
      this.deleting ||
      this.hasVotes ||
      this.draft.options.length >= 6
    ) {
      return;
    }

    this.draft.options.push({
      ta: '',
      en: ''
    });

    this.draft.counts.push(0);
  }

  removeOption(index: number): void {
    if (
      this.saving ||
      this.deleting ||
      this.hasVotes ||
      this.draft.options.length <= 2
    ) {
      return;
    }

    this.draft.options.splice(index, 1);
    this.draft.counts.splice(index, 1);
  }

  // ==========================================
  // SAVE POLL TO NODE.JS + MONGODB
  // ==========================================

  async save(): Promise<void> {
    if (this.saving || this.deleting) return;

    this.error = '';
    this.message = '';

    const payload = this.clone(this.draft);

    payload.question.ta =
      payload.question.ta.trim();

    payload.question.en =
      payload.question.en.trim();

    payload.options = payload.options.map(o => ({
      ta: o.ta.trim(),
      en: o.en.trim()
    }));

    if (
      !payload.question.ta ||
      !payload.question.en
    ) {
      this.error =
        'Both Tamil and English questions are required.';
      return;
    }

    if (
      payload.options.length < 2 ||
      payload.options.length > 6
    ) {
      this.error =
        'A poll must have 2 to 6 options.';
      return;
    }

    if (
      payload.options.some(
        o => !o.ta || !o.en
      )
    ) {
      this.error =
        'Both languages are required for every option.';
      return;
    }

    if (
      payload.counts.length !==
      payload.options.length
    ) {
      this.error =
        'Poll options and vote counts do not match.';
      return;
    }

    this.saving = true;

    try {
      // Required for protected write requests.
      await this.api.restoreSession();

      // PUT /api/admin/polls/:id
      await this.api.upsertPoll(payload);

      // Reload persisted data from MongoDB.
      const response = await firstValueFrom(
        this.http.get<OpinionPoll[]>(
          `${environment.apiBaseUrl}/admin/polls`,
          { withCredentials: true }
        )
      );

      this.polls = response;

      const saved = this.polls.find(
        p => p.id === payload.id
      );

      this.draft = saved
        ? this.clone(saved)
        : payload;

      // Refresh the public-site snapshot.
      try {
        await this.store.refreshFromBackend();
      } catch {
        // The poll was already saved successfully.
      }

      this.message = payload.active
        ? 'Poll saved and activated successfully.'
        : 'Inactive poll saved successfully.';

    } catch (error) {
      this.error = this.getError(error);
    } finally {
      this.saving = false;
    }
  }

  // ==========================================
  // DELETE POLL FROM MONGODB
  // ==========================================

  async remove(): Promise<void> {
    if (
      this.saving ||
      this.deleting ||
      !this.isSaved
    ) {
      return;
    }

    const confirmed = window.confirm(
      'Delete this poll and its recorded votes permanently?'
    );

    if (!confirmed) return;

    this.deleting = true;
    this.error = '';
    this.message = '';

    try {
      const session =
        await this.api.restoreSession();

      await firstValueFrom(
        this.http.delete(
          `${environment.apiBaseUrl}/admin/polls/${encodeURIComponent(this.draft.id)}`,
          {
            withCredentials: true,
            headers: {
              'X-CSRF-Token': session.csrfToken
            }
          }
        )
      );

      this.polls = this.polls.filter(
        p => p.id !== this.draft.id
      );

      this.draft = blank();

      try {
        await this.store.refreshFromBackend();
      } catch {
        // Deletion was already successful.
      }

      this.message =
        'Poll deleted successfully.';

    } catch (error) {
      this.error = this.getError(error);
    } finally {
      this.deleting = false;
    }
  }

  // ==========================================
  // BACKEND ERROR HANDLING
  // ==========================================

  private getError(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      const detail =
        error.error?.error ??
        error.error?.message;

      if (typeof detail === 'string') {
        return detail;
      }

      if (Array.isArray(detail)) {
        return JSON.stringify(detail);
      }

      if (error.status === 0) {
        return 'Cannot connect to the Node.js backend.';
      }

      if (error.status === 401) {
        return 'Admin session expired. Please log in again.';
      }

      if (error.status === 403) {
        return 'Access denied or invalid CSRF token.';
      }

      return `Backend request failed (${error.status}).`;
    }

    return error instanceof Error
      ? error.message
      : 'An unexpected error occurred.';
  }
}
