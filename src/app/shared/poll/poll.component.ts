
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { OpinionPoll } from '../../core/models';

import { ContentService } from '../../services/content.service';
import { PreferencesService } from '../../services/preferences.service';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css', './poll.component.responsive.css']
})
export class PollComponent implements OnChanges {

  @Input() poll!: OpinionPoll;

  voting = false;
  error = '';
  success = '';

  private votedLocally = false;
  private latestCounts: number[] | null = null;

  constructor(
    public store: ContentService,
    public prefs: PreferencesService,
    private api: NewsApiService
  ) {}

  // ==========================================
  // RESET STATE WHEN POLL CHANGES
  // ==========================================

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes['poll']) {
      return;
    }

    const previousId =
      changes['poll'].previousValue?.id;

    const currentId =
      changes['poll'].currentValue?.id;

    if (previousId !== currentId) {
      this.votedLocally = false;
      this.latestCounts = null;
      this.error = '';
      this.success = '';
    }
  }

  // ==========================================
  // CHECK WHETHER VISITOR ALREADY VOTED
  // ==========================================

  hasVoted(): boolean {

    if (!this.poll?.id) {
      return false;
    }

    if (this.votedLocally) {
      return true;
    }

    try {

      return localStorage.getItem(
        this.voteStorageKey()
      ) === '1';

    } catch {

      return false;

    }
  }

  private voteStorageKey(): string {
    return `makkal-valimai-voted:${this.poll.id}`;
  }

  // ==========================================
  // GET LATEST VOTE COUNTS
  // ==========================================

  get counts(): number[] {

    if (
      this.latestCounts &&
      this.latestCounts.length === this.poll.options.length
    ) {
      return this.latestCounts;
    }

    return this.poll.counts || [];
  }

  // ==========================================
  // TOTAL VOTES
  // ==========================================

  get totalVotes(): number {

    return this.counts.reduce(
      (sum, count) => sum + (Number(count) || 0),
      0
    );
  }

  // ==========================================
  // CALCULATE VOTE PERCENTAGE
  // ==========================================

  percentage(index: number): number {

    const total = this.totalVotes;

    if (!total) {
      return 0;
    }

    const votes = Number(this.counts[index]) || 0;

    return Math.round((votes / total) * 100);
  }

  // ==========================================
  // SUBMIT VOTE TO NODE.JS + MONGODB
  // ==========================================

  async vote(index: number): Promise<void> {

    if (
      this.voting ||
      !this.poll?.active ||
      this.hasVoted()
    ) {
      return;
    }

    if (
      index < 0 ||
      index >= this.poll.options.length
    ) {
      return;
    }

    this.voting = true;
    this.error = '';
    this.success = '';

    try {

      // REAL BACKEND API
      // POST /api/public/polls/:id/votes
      const response = await this.api.vote(
        this.poll.id,
        index
      );

      // Use backend counts if returned directly.
      if (
        Array.isArray(response?.counts) &&
        response.counts.length === this.poll.options.length
      ) {
        this.latestCounts = [...response.counts];
      }

      // Refresh public data from MongoDB.
      try {

        await this.store.refreshFromBackend();

        const refreshed = this.store.polls().find(
          item => item.id === this.poll.id
        );

        if (
          refreshed &&
          Array.isArray(refreshed.counts) &&
          refreshed.counts.length === this.poll.options.length
        ) {
          this.latestCounts = [...refreshed.counts];
        }

      } catch {
        // The vote request has already succeeded.
      }

      // Remember successful participation
      // in this browser.
      this.votedLocally = true;

      try {

        localStorage.setItem(
          this.voteStorageKey(),
          '1'
        );

      } catch {
        // Voting still succeeds if storage is blocked.
      }

      this.success =
        'Your vote was recorded successfully.';

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.voting = false;

    }
  }

  // ==========================================
  // ERROR HANDLING
  // ==========================================

  private getError(error: unknown): string {

    if (error instanceof HttpErrorResponse) {

      if (error.status === 0) {
        return 'Unable to connect to the voting server.';
      }

      if (error.status === 404) {
        return 'This poll is no longer available.';
      }

      if (error.status === 409) {
        return 'Your vote could not be accepted. You may have already voted or the poll may have closed.';
      }

      if (error.status === 429) {
        return 'Too many voting requests. Please try later.';
      }

      const message =
        error.error?.error ||
        error.error?.message;

      if (typeof message === 'string') {
        return message;
      }

      return `Unable to record vote (${error.status}).`;
    }

    return error instanceof Error
      ? error.message
      : 'Unable to record vote.';
  }
}
