
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import {
  Article,
  Issue,
  PublicAlert
} from '../../core/models';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './dashboard.component.responsive.css']
})
export class DashboardComponent implements OnInit {

  totalArticles: number | null = null;
  pendingCount: number | null = null;
  solvedCount: number | null = null;
  alertsCount: number | null = null;

  loading = true;
  error = '';

  private readonly base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    void this.loadDashboard();
  }

  async loadDashboard(): Promise<void> {
    this.loading = true;
    this.error = '';

    try {
      const [articles, issues, alerts] = await Promise.all([
        firstValueFrom(
          this.http.get<Article[]>(
            `${this.base}/admin/articles`,
            { withCredentials: true }
          )
        ),
        firstValueFrom(
          this.http.get<Issue[]>(
            `${this.base}/admin/issues`,
            { withCredentials: true }
          )
        ),
        firstValueFrom(
          this.http.get<PublicAlert[]>(
            `${this.base}/admin/alerts`,
            { withCredentials: true }
          )
        )
      ]);

      if (
        !Array.isArray(articles) ||
        !Array.isArray(issues) ||
        !Array.isArray(alerts)
      ) {
        throw new Error('Unexpected dashboard API response');
      }

      this.totalArticles = articles.length;

      this.pendingCount = issues.filter(
        issue => issue.status === 'pending'
      ).length;

      this.solvedCount = issues.filter(
        issue => issue.status === 'solved'
      ).length;

      this.alertsCount = alerts.filter(
        alert => alert.published
      ).length;

    } catch (error) {
      console.error('Dashboard API error:', error);
      this.error = 'Unable to load dashboard data.';
    } finally {
      this.loading = false;
    }
  }
}
