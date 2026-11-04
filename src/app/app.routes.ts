
import { Routes } from '@angular/router';
import { adminGuard } from './services/admin-auth.service';

export const routes: Routes = [

  // ==============================
  // PUBLIC WEBSITE
  // ==============================

  {
    path: '',
    loadComponent: () =>
      import('./shared/public-shell/public-shell.component')
        .then(m => m.PublicShellComponent),

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component')
            .then(m => m.HomeComponent),
        pathMatch: 'full'
      },
      {
        path: 'public-issues',
        loadComponent: () =>
          import('./pages/public-issues/public-issues.component')
            .then(m => m.PublicIssuesComponent)
      },
      {
        path: 'report-problem',
        loadComponent: () =>
          import('./pages/report-problem/report-problem.component')
            .then(m => m.ReportProblemComponent)
      },
      {
        path: 'problems-solved',
        loadComponent: () =>
          import('./pages/problems-solved/problems-solved.component')
            .then(m => m.ProblemsSolvedComponent)
      },
      {
        path: 'madurai-news',
        data: {
          kind: 'madurai',
          section: 'madurai'
        },
        loadComponent: () =>
          import('./pages/madurai-news/madurai-news.component')
            .then(m => m.MaduraiNewsComponent)
      },
      {
        path: 'crime-news',
        data: {
          kind: 'crime',
          section: 'crime'
        },
        loadComponent: () =>
          import('./pages/crime-news/crime-news.component')
            .then(m => m.CrimeNewsComponent)
      },
      {
        path: 'health-awareness',
        data: {
          kind: 'health',
          section: 'health'
        },
        loadComponent: () =>
          import('./pages/health-awareness/health-awareness.component')
            .then(m => m.HealthAwarenessComponent)
      },
      {
        path: 'dialogue-stories',
        data: {
          kind: 'story',
          section: 'stories'
        },
        loadComponent: () =>
          import('./pages/dialogue-stories/dialogue-stories.component')
            .then(m => m.DialogueStoriesComponent)
      },
      {
        path: 'kids-corner',
        data: {
          kind: 'kids',
          section: 'kids'
        },
        loadComponent: () =>
          import('./pages/kids-corner/kids-corner.component')
            .then(m => m.KidsCornerComponent)
      },
      {
        path: 'gallery',
        data: {
          kind: 'gallery',
          section: 'gallery'
        },
        loadComponent: () =>
          import('./pages/gallery/gallery.component')
            .then(m => m.GalleryComponent)
      },
      {
        path: 'public-alerts',
        loadComponent: () =>
          import('./pages/public-alerts/public-alerts.component')
            .then(m => m.AlertsComponent)
      },
      {
        path: 'achievements',
        loadComponent: () =>
          import('./pages/achievements/achievements.component')
            .then(m => m.AchievementsComponent)
      },
      {
        path: 'opinion-polls',
        loadComponent: () =>
          import('./pages/opinion-polls/opinion-polls.component')
            .then(m => m.PollsPageComponent)
      },
      {
        path: 'about-contact',
        loadComponent: () =>
          import('./pages/about-contact/about-contact.component')
            .then(m => m.AboutComponent)
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/search/search.component')
            .then(m => m.SearchComponent)
      },
      {
        path: 'news/:slug',
        loadComponent: () =>
          import('./pages/article-detail/article-detail.component')
            .then(m => m.ArticleDetailComponent)
      }
    ]
  },

  // ==============================
  // ADMIN LOGIN
  // ==============================

  {
    path: 'admin/login',
    loadComponent: () =>
      import('./admin/login/login.component')
        .then(m => m.AdminLoginComponent)
  },

  // ==============================
  // PROTECTED ADMIN PANEL
  // ==============================

  {
    path: 'admin',

    canActivate: [adminGuard],

    loadComponent: () =>
      import('./admin/admin-shell/admin-shell.component')
        .then(m => m.AdminShellComponent),

    children: [

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      // ADMIN DASHBOARD
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./admin/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },

      // NEWS ARTICLES
      {
        path: 'articles',
        loadComponent: () =>
          import('./admin/articles/articles.component')
            .then(m => m.ArticlesAdminComponent)
      },

      // Backend-supported category types (read-only)
      {
        path: 'categories',
        loadComponent: () =>
          import('./admin/categories/categories.component')
            .then(m => m.CategoriesAdminComponent)
      },

      // PUBLIC ISSUE REPORTS
      {
        path: 'reports',
        loadComponent: () =>
          import('./admin/reports/reports.component')
            .then(m => m.ReportsAdminComponent)
      },

      // AUDIO MANAGEMENT
      {
        path: 'audio',
        loadComponent: () =>
          import('./admin/audio/audio.component')
            .then(m => m.SectionAudioAdminComponent)
      },

      // PUBLIC ALERT MANAGEMENT
      {
        path: 'alerts',
        loadComponent: () =>
          import('./admin/alerts/alerts.component')
            .then(m => m.AdminAlertsComponent)
      },

      // POLL MANAGEMENT
      {
        path: 'polls',
        loadComponent: () =>
          import('./admin/polls/polls.component')
            .then(m => m.AdminPollsComponent)
      },

      // ADVERTISEMENT MANAGEMENT
      {
        path: 'ads',
        loadComponent: () =>
          import('./admin/ads/ads.component')
            .then(m => m.AdminAdsComponent)
      },

      // WEBSITE APPEARANCE
      {
        path: 'appearance',
        loadComponent: () =>
          import('./admin/appearance/appearance.component')
            .then(m => m.AppearanceComponent)
      }
    ]
  },

  // FALLBACK
  {
    path: '**',
    redirectTo: ''
  }
];
