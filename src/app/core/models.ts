
export type Lang = 'ta' | 'en';

export type Bilingual = {
  ta: string;
  en: string;
};

// Website sections
export type Section =
  | 'home'
  | 'issues'
  | 'report'
  | 'solved'
  | 'madurai'
  | 'crime'
  | 'alerts'
  | 'achievements'
  | 'health'
  | 'stories'
  | 'kids'
  | 'gallery'
  | 'about'
  | 'polls';

// DYNAMIC NEWS CATEGORY
// Category slugs are loaded from MongoDB.
// No fixed category enum in Angular.
export type ArticleKind = string;

// MongoDB-managed news category
export interface NewsCategory {
  _id?: string;
  slug: string;
  name: Bilingual;
  active: boolean;
  showInMenu: boolean;
  sortOrder: number;
  requiresVerifiedSource: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Public issue statuses
export type IssueStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'solved';

// Advertisement positions
export type AdPosition =
  | 'banner'
  | 'sidebar'
  | 'popup';

// NEWS ARTICLES
export interface Article {
  id: string;
  slug: string;

  // Dynamic category slug from MongoDB
  kind: ArticleKind;

  title: Bilingual;
  body: Bilingual;

  image: string;
  video?: string;

  publishedAt: string;
  area: string;

  published: boolean;
  featured: boolean;

  audio: {
    ta: string;
    en: string;
  };

  // Verified source for applicable categories
  source?: string;

  createdAt: string;
  updatedAt: string;
}

// PUBLIC ISSUES
export interface Issue {
  id: string;
  title: string;
  description: string;
  category: string;
  area: string;
  street?: string;
  photo: string;
  createdAt: string;
  approvedAt?: string;
  status: IssueStatus;
  resolution?: string;
  afterPhoto?: string;

  audio: {
    ta: string;
    en: string;
  };
}

// PUBLIC ALERTS
export interface PublicAlert {
  id: string;
  title: Bilingual;
  body: Bilingual;
  area: string;

  type:
    | 'water'
    | 'electricity'
    | 'traffic'
    | 'rain'
    | 'other';

  effectiveDate: string;
  expiresAt: string;
  published: boolean;
  source: string;

  audio: {
    ta: string;
    en: string;
  };
}

// OPINION POLLS
export interface OpinionPoll {
  id: string;
  question: Bilingual;
  options: Bilingual[];
  counts: number[];
  active: boolean;
  voters: string[];
  expiresAt?: string;
}

// ADVERTISEMENTS
export interface Ad {
  id: string;
  brand: string;
  position: AdPosition;
  image: string;
  link: string;
  enabled: boolean;
  caption: string;
}

// WEBSITE SETTINGS
export interface Settings {
  headerImage: string;
  footerImage: string;
  headlines: Bilingual[];

  sectionAudio: Partial<
    Record<
      Section,
      {
        ta: string;
        en: string;
      }
    >
  >;

  showPopup: boolean;
}

// BACKEND BOOTSTRAP RESPONSE
export interface Snapshot {
  articles: Article[];
  issues: Issue[];
  alerts: PublicAlert[];
  polls: OpinionPoll[];
  ads: Ad[];
  settings: Settings;
}

// MAIN NAVIGATION
export const NAV: {
  path: string;
  section: Section;
  name: Bilingual;
}[] = [
  {
    path: '/',
    section: 'home',
    name: {
      ta: 'முகப்பு',
      en: 'Home'
    }
  },
  {
    path: '/public-issues',
    section: 'issues',
    name: {
      ta: 'மக்கள் பிரச்சினைகள்',
      en: 'Public Issues'
    }
  },
  {
    path: '/report-problem',
    section: 'report',
    name: {
      ta: 'புகார் தெரிவிக்க',
      en: 'Report a Problem'
    }
  },
  {
    path: '/problems-solved',
    section: 'solved',
    name: {
      ta: 'தீர்வு கண்டவை',
      en: 'Problems Solved'
    }
  },
  {
    path: '/madurai-news',
    section: 'madurai',
    name: {
      ta: 'மதுரை செய்திகள்',
      en: 'Madurai News'
    }
  },
  {
    path: '/crime-news',
    section: 'crime',
    name: {
      ta: 'குற்றச் செய்திகள்',
      en: 'Crime News'
    }
  }
];

// MORE MENU
export const MORE: {
  path: string;
  section: Section;
  name: Bilingual;
}[] = [
  {
    path: '/about-contact',
    section: 'about',
    name: {
      ta: 'எங்களைப் பற்றி / தொடர்பு',
      en: 'About & Contact'
    }
  },
  {
    path: '/health-awareness',
    section: 'health',
    name: {
      ta: 'ஆரோக்கியம் மற்றும் விழிப்புணர்வு',
      en: 'Health & Awareness'
    }
  },
  {
    path: '/dialogue-stories',
    section: 'stories',
    name: {
      ta: 'உரையாடல் கதைகள்',
      en: 'Dialogue Stories'
    }
  },
  {
    path: '/kids-corner',
    section: 'kids',
    name: {
      ta: 'சிறுவர் பகுதி',
      en: "Kids' Corner"
    }
  },
  {
    path: '/gallery',
    section: 'gallery',
    name: {
      ta: 'புகைப்படங்கள் / வீடியோக்கள்',
      en: 'Photo & Video Gallery'
    }
  }
];

// ALL EXISTING SECTIONS
export const SECTIONS = [
  ...NAV,
  ...MORE,
  {
    path: '/opinion-polls',
    section: 'polls' as Section,
    name: {
      ta: 'மக்கள் கருத்துக்கணிப்பு',
      en: 'Opinion Polls'
    }
  },
  {
    path: '/public-alerts',
    section: 'alerts' as Section,
    name: {
      ta: 'மதுரை பொது அறிவிப்புகள்',
      en: 'Madurai Public Alerts'
    }
  },
  {
    path: '/achievements',
    section: 'achievements' as Section,
    name: {
      ta: 'மதுரை சாதனையாளர்கள்',
      en: "Madurai People's Achievements"
    }
  }
];

// Existing public issue categories
export const ISSUE_CATEGORIES = [
  'Roads',
  'Water',
  'Drainage',
  'Garbage',
  'Streetlights',
  'Traffic',
  'Other'
];

// INDIA STANDARD TIME DATE
export function istDay(
  date: Date | string = new Date()
): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(date));
}

// UNIQUE ID GENERATOR
export function uid(prefix = 'item'): string {
  return `${prefix}-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

// NEWS URL SLUG GENERATOR
export function slugify(value: string): string {
  return (
    value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\u0B80-\u0BFF]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 88) || uid('story')
  );
}
