
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


import {
  Article,
  Issue,
  PublicAlert,
  OpinionPoll,
  Ad,
  Snapshot,
  NewsCategory
} from '../core/models';


import { environment } from '../../environments/environment';

interface AdminSession {
  user: {
    email: string;
    role: string;
  };
  csrfToken: string;
}

export interface MediaUploadResponse {
  id: string;
  url: string;
  kind: string;
}

export interface IssueModerationDetails {
  resolution?: string;
  afterPhoto?: string;
}

export interface NavigationItem {
  _id?: string;

  key: string;

  name: {
    ta: string;
    en: string;
  };

  type: 'page' | 'category' | 'dropdown';

  path: string;
  categorySlug: string;
  parentKey: string | null;

  active: boolean;
  sortOrder: number;

  createdAt?: string;
  updatedAt?: string;
}

// ==========================================
// EDITING TOOLS MANAGEMENT
// ==========================================

export interface EditingTool {
  _id?: string;

  key: string;

  label: {
    ta: string;
    en: string;
  };

  rendererType:
    | 'heading'
    | 'text'
    | 'image'
    | 'video'
    | 'audio'
      | 'gallery'
      | 'cards';

  icon: string;
  iconUrl?: string;

  active: boolean;
  sortOrder: number;

  archivedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface DynamicPageBlock {
  _id?: string;
  toolKey: string;
  rendererType: EditingTool['rendererType'];
  sortOrder: number;
  enabled: boolean;
  content: unknown;
}

export interface DynamicPageBlockInput {
  toolKey: string;
  sortOrder?: number;
  enabled?: boolean;
  content: unknown;
}

// ==========================================
// DYNAMIC COMMON PAGE BUILDER
// ==========================================


export interface DynamicPage {
  _id?: string;

  slug: string;

  title: {
    ta: string;
    en: string;
  };

  status: 'draft' | 'published';

  blocks?: DynamicPageBlock[];

  archivedAt?: string | null;

  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private base = environment.apiBaseUrl;
  private csrfToken = '';

  constructor(private http: HttpClient) {}

  // ==========================================
  // ADMIN REQUEST OPTIONS
  // ==========================================

  private adminOptions() {
    return {
      withCredentials: true,
      headers: {
        'X-CSRF-Token': this.csrfToken
      }
    };
  }

  // ==========================================
  // PUBLIC WEBSITE
  // ==========================================

  snapshot(): Promise<Snapshot> {
    return firstValueFrom(
      this.http.get<Snapshot>(
        `${this.base}/public/bootstrap`
      )
    );
  }

  articles(): Promise<Article[]> {
    return firstValueFrom(
      this.http.get<Article[]>(
        `${this.base}/public/articles`
      )
    );
  }

  article(slug: string): Promise<Article> {
    return firstValueFrom(
      this.http.get<Article>(
        `${this.base}/public/articles/${encodeURIComponent(slug)}`
      )
    );
  }

  /** Existing backend: GET /public/articles?kind=&date=&area=&page=&limit= */
  articlesByCategory(kind: string, options: {date?: string; area?: string; page?: number; limit?: number} = {}): Promise<Article[]> {
    const params: Record<string, string> = {
      kind: kind.trim().toLowerCase(),
      page: String(options.page || 1),
      limit: String(options.limit || 30)
    };
    if (options.date) params['date'] = options.date;
    if (options.area) params['area'] = options.area.trim();
    return firstValueFrom(this.http.get<Article[]>(`${this.base}/public/articles`, {params}));
  }

  /** No full-text search route is available. Used for progressive client filtering. */
  articlesPage(page = 1, limit = 100): Promise<Article[]> {
    return firstValueFrom(this.http.get<Article[]>(`${this.base}/public/articles`, {
      params: {page: String(page), limit: String(limit)}
    }));
  }

  // ==========================================
  // PUBLIC ISSUES
  // ==========================================

  submitIssue(data: FormData): Promise<Issue> {
    return firstValueFrom(
      this.http.post<Issue>(
        `${this.base}/public/issues`,
        data,
        { withCredentials: true }
      )
    );
  }

  publicIssues(
    status?: 'approved' | 'solved'
  ): Promise<Issue[]> {

    return firstValueFrom(
      this.http.get<Issue[]>(
        `${this.base}/public/issues`,
        status
          ? { params: { status } }
          : {}
      )
    );
  }

  // ==========================================
  // PUBLIC POLL VOTING
  // ==========================================

  vote(
    pollId: string,
    option: number
  ): Promise<OpinionPoll> {
    return firstValueFrom(
      this.http.post<OpinionPoll>(
        `${this.base}/public/polls/${encodeURIComponent(pollId)}/votes`,
        { option },
        { withCredentials: true }
      )
    );
  }

  // ==========================================
  // ADMIN AUTHENTICATION
  // ==========================================

  async login(
    email: string,
    password: string
  ): Promise<AdminSession> {

    const response = await firstValueFrom(
      this.http.post<AdminSession>(
        `${this.base}/admin/auth/login`,
        { email, password },
        { withCredentials: true }
      )
    );

    this.csrfToken = response.csrfToken;

    return response;
  }

  async restoreSession(): Promise<AdminSession> {

    const response = await firstValueFrom(
      this.http.get<AdminSession>(
        `${this.base}/admin/auth/me`,
        { withCredentials: true }
      )
    );

    this.csrfToken = response.csrfToken;

    return response;
  }

  async logout(): Promise<void> {
    await this.restoreSession();
    await firstValueFrom(this.http.post(
      `${this.base}/admin/auth/logout`, {}, this.adminOptions()
    ));
    this.csrfToken = '';
  }

 
  // ==========================================
  // ADMIN NEWS CATEGORY CRUD
  // ==========================================

  // GET ALL CATEGORIES
  adminCategories(): Promise<NewsCategory[]> {
    return firstValueFrom(
      this.http.get<NewsCategory[]>(
        `${this.base}/admin/categories`,
        { withCredentials: true }
      )
    );
  }

  // CREATE OR UPDATE CATEGORY
  async upsertCategory(
    category: NewsCategory
  ): Promise<NewsCategory> {

    await this.restoreSession();

   
const payload = {
  name: category.name,
  active: category.active,
  showInMenu: category.showInMenu,

  // Save the Header Type selected by Admin.
  // Preserve existing settings until the
  // dropdown is added to the form.
  ...(category.headerType
    ? { headerType: category.headerType }
    : {}),

  sortOrder: category.sortOrder,
  requiresVerifiedSource:
    category.requiresVerifiedSource
};


    const response = await firstValueFrom(
      this.http.put<{
        success: boolean;
        message: string;
        category: NewsCategory;
      }>(
        `${this.base}/admin/categories/${encodeURIComponent(category.slug)}`,
        payload,
        this.adminOptions()
      )
    );

    if (!response?.success || !response.category) {
      throw new Error('Unable to save news category.');
    }

    return response.category;
  }

  // DELETE CATEGORY
  async deleteCategory(slug: string): Promise<void> {

    await this.restoreSession();

    const response = await firstValueFrom(
      this.http.delete<{
        success: boolean;
        deleted: boolean;
        message: string;
        slug: string;
      }>(
        `${this.base}/admin/categories/${encodeURIComponent(slug)}`,
        this.adminOptions()
      )
    );

    if (!response?.success || !response.deleted) {
      throw new Error('Unable to delete news category.');
    }
  }

  // ==========================================
  // DYNAMIC HEADER NAVIGATION API
  // ==========================================

  // PUBLIC - GET ENABLED NAVIGATION ITEMS

  async publicNavigation(): Promise<NavigationItem[]> {

    const response = await firstValueFrom(
      this.http.get<{
        success: boolean;
        items: NavigationItem[];
      }>(
        `${this.base}/public/navigation`
      )
    );

    if (!response?.success || !Array.isArray(response.items)) {
      throw new Error('Unable to load public navigation.');
    }

    return response.items;
  }

  // ADMIN - GET ALL NAVIGATION ITEMS

  async adminNavigation(): Promise<NavigationItem[]> {

    const response = await firstValueFrom(
      this.http.get<{
        success: boolean;
        items: NavigationItem[];
      }>(
        `${this.base}/admin/navigation`,
        { withCredentials: true }
      )
    );

    if (!response?.success || !Array.isArray(response.items)) {
      throw new Error('Unable to load admin navigation.');
    }

    return response.items;
  }

  // ADMIN - CREATE OR UPDATE NAVIGATION ITEM

  async upsertNavigation(
    item: NavigationItem
  ): Promise<NavigationItem> {

    await this.restoreSession();

    const payload = {
      name: item.name,
      type: item.type,
      path: item.path,
      categorySlug: item.categorySlug,
      parentKey: item.parentKey,
      active: item.active,
      sortOrder: item.sortOrder
    };

    const response = await firstValueFrom(
      this.http.put<{
        success: boolean;
        message: string;
        item: NavigationItem;
      }>(
        `${this.base}/admin/navigation/${encodeURIComponent(item.key)}`,
        payload,
        this.adminOptions()
      )
    );

    if (!response?.success || !response.item) {
      throw new Error('Unable to save navigation item.');
    }

    return response.item;
  }

  // ADMIN - DELETE NAVIGATION ITEM

  async deleteNavigation(key: string): Promise<void> {

    await this.restoreSession();

    const response = await firstValueFrom(
      this.http.delete<{
        success: boolean;
        deleted: boolean;
        key: string;
      }>(
        `${this.base}/admin/navigation/${encodeURIComponent(key)}`,
        this.adminOptions()
      )
    );

    if (!response?.success || !response.deleted) {
      throw new Error('Unable to delete navigation item.');
    }
  }

// ==========================================
// ADMIN EDITING TOOLS MANAGEMENT
// ==========================================
// ==========================================
// GET AVAILABLE RENDERER OPTIONS
// ==========================================

async getRendererOptions(): Promise<{
  value: EditingTool['rendererType'];
  label: string;
}[]> {

  const response = await firstValueFrom(
    this.http.get<{
      success: boolean;
      items: {
        value: EditingTool['rendererType'];
        label: string;
      }[];
    }>(
      `${this.base}/admin/editing-tools/renderer-options`,
      { withCredentials: true }
    )
  );

  if (!response?.success || !Array.isArray(response.items)) {
    throw new Error('Unable to load renderer options.');
  }

  return response.items;
}
// Get all editing tools from MongoDB
async adminEditingTools(): Promise<EditingTool[]> {

  const response = await firstValueFrom(
    this.http.get<{
      success: boolean;
      items: EditingTool[];
    }>(
      `${this.base}/admin/editing-tools`,
      { withCredentials: true }
    )
  );

  if (!response?.success || !Array.isArray(response.items)) {
    throw new Error('Unable to load editing tools.');
  }

  return response.items;
}
// ==========================================
// ACTIVE EDITING TOOLS FOR COMMON PAGE BUILDER
// ==========================================

async getActiveEditingTools(): Promise<EditingTool[]> {

  const response = await firstValueFrom(
    this.http.get<{
      success: boolean;
      items: EditingTool[];
    }>(
      `${this.base}/admin/editing-tools/active`,
      { withCredentials: true }
    )
  );

  if (!response?.success || !Array.isArray(response.items)) {
    throw new Error('Unable to load active editing tools.');
  }

  return response.items;
}
// ==========================================
// CREATE OR UPDATE EDITING TOOL
// ==========================================

async upsertEditingTool(
  tool: EditingTool
): Promise<EditingTool> {

  await this.restoreSession();

const payload = {
  label: tool.label,
  rendererType: tool.rendererType,
  icon: tool.icon,
  iconUrl: tool.iconUrl,
  active: tool.active,
  sortOrder: tool.sortOrder
};

  const response = await firstValueFrom(
    this.http.put<{
      success: boolean;
      message: string;
      item: EditingTool;
    }>(
      `${this.base}/admin/editing-tools/${encodeURIComponent(tool.key)}`,
      payload,
      this.adminOptions()
    )
  );

  if (!response?.success || !response.item) {
    throw new Error('Unable to save editing tool.');
  }

  return response.item;
}
// ==========================================
// ARCHIVE EDITING TOOL
// ==========================================

async archiveEditingTool(key: string): Promise<void> {

  await this.restoreSession();

  const response = await firstValueFrom(
    this.http.delete<{
      success: boolean;
      archived: boolean;
      key: string;
    }>(
      `${this.base}/admin/editing-tools/${encodeURIComponent(key)}`,
      this.adminOptions()
    )
  );

  if (!response?.success || !response.archived) {
    throw new Error('Unable to archive editing tool.');
  }
}
// ==========================================
// RESTORE ARCHIVED EDITING TOOL
// ==========================================

async restoreEditingTool(key: string): Promise<EditingTool> {

  await this.restoreSession();

  const response = await firstValueFrom(
    this.http.patch<{
      success: boolean;
      message: string;
      item: EditingTool;
    }>(
      `${this.base}/admin/editing-tools/${encodeURIComponent(key)}/restore`,
      {},
      this.adminOptions()
    )
  );

  if (!response?.success || !response.item) {
    throw new Error('Unable to restore editing tool.');
  }

  return response.item;
}
// ==========================================
// DYNAMIC COMMON PAGE BUILDER API
// ==========================================

// GET ALL DYNAMIC PAGES FROM MONGODB

async adminDynamicPages(): Promise<DynamicPage[]> {

  const response = await firstValueFrom(
    this.http.get<{
      success: boolean;
      items: DynamicPage[];
    }>(
      `${this.base}/admin/dynamic-pages`,
      { withCredentials: true }
    )
  );

  if (
    !response?.success ||
    !Array.isArray(response.items)
  ) {
    throw new Error(
      'Unable to load dynamic pages.'
    );
  }

  return response.items;
}
// ==========================================
// CREATE NEW DYNAMIC PAGE
// ==========================================

async createDynamicPage(
  page: Pick<DynamicPage, 'slug' | 'title'>
): Promise<DynamicPage> {

  // Restore Admin session and CSRF token.
  await this.restoreSession();

  const payload = {
    slug: page.slug.trim().toLowerCase(),
    title: {
      ta: page.title.ta.trim(),
      en: page.title.en.trim()
    }
  };

  const response = await firstValueFrom(
    this.http.post<{
      success: boolean;
      message: string;
      item: DynamicPage;
    }>(
      `${this.base}/admin/dynamic-pages`,
      payload,
      this.adminOptions()
    )
  );

  if (!response?.success || !response.item) {
    throw new Error(
      'Unable to create dynamic page.'
    );
  }

  return response.item;
}

// ==========================================
// GET ONE DYNAMIC PAGE WITH CONTENT BLOCKS
// ==========================================

async adminDynamicPage(slug: string): Promise<DynamicPage> {
  const response = await firstValueFrom(
    this.http.get<{
      success: boolean;
      item: DynamicPage;
    }>(
      `${this.base}/admin/dynamic-pages/${encodeURIComponent(slug)}`,
      { withCredentials: true }
    )
  );

  if (!response?.success || !response.item) {
    throw new Error('Unable to load dynamic page.');
  }

  return response.item;
}

// ==========================================
// ADD CONTENT BLOCK TO DYNAMIC PAGE
// ==========================================

async addDynamicPageBlock(
  slug: string,
  block: DynamicPageBlockInput
): Promise<DynamicPageBlock> {
  await this.restoreSession();

  const response = await firstValueFrom(
    this.http.post<{
      success: boolean;
      message: string;
      pageSlug: string;
      block: DynamicPageBlock;
    }>(
      `${this.base}/admin/dynamic-pages/${encodeURIComponent(slug)}/blocks`,
      block,
      this.adminOptions()
    )
  );

  if (!response?.success || !response.block) {
    throw new Error('Unable to add content block.');
  }

  return response.block;
}

// ==========================================
// DELETE CONTENT BLOCK FROM DYNAMIC PAGE
// ==========================================

async deleteDynamicPageBlock(
  slug: string,
  blockId: string
): Promise<void> {

  // Restore Admin session and CSRF token.
  await this.restoreSession();

  const response = await firstValueFrom(
    this.http.delete<{
      success: boolean;
      message: string;
      pageSlug: string;
      blockId: string;
      deleted: boolean;
    }>(
      `${this.base}/admin/dynamic-pages/${encodeURIComponent(slug)}/blocks/${encodeURIComponent(blockId)}`,
      this.adminOptions()
    )
  );

  if (!response?.success || !response.deleted) {
    throw new Error(
      'Unable to delete content block.'
    );
  }
}

  // ==========================================
  // ADMIN NEWS ARTICLES
  // ==========================================

  adminArticles(): Promise<Article[]> {
    return firstValueFrom(
      this.http.get<Article[]>(
        `${this.base}/admin/articles`,
        { withCredentials: true }
      )
    );
  }

  async upsertArticle(a: Article): Promise<Article> {
    await this.restoreSession();
    return firstValueFrom(
      this.http.put<Article>(
        `${this.base}/admin/articles/${encodeURIComponent(a.id)}`,
        a,
        this.adminOptions()
      )
    );
  }

  async deleteArticle(id: string): Promise<void> {
    await this.restoreSession();
    return firstValueFrom(
      this.http.delete<void>(
        `${this.base}/admin/articles/${encodeURIComponent(id)}`,
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // ADMIN PUBLIC ISSUES
  // ==========================================

  // Load pending, approved, rejected and solved
  // issues from MongoDB.

  async adminIssues(): Promise<Issue[]> {

    await this.restoreSession();

    return firstValueFrom(
      this.http.get<Issue[]>(
        `${this.base}/admin/issues`,
        { withCredentials: true }
      )
    );
  }

  // Approve, reject or mark an issue as solved.
  // Solving requires resolution and afterPhoto.

  async moderateIssue(
    id: string,
    status: string,
    details: IssueModerationDetails = {}
  ): Promise<Issue> {

    await this.restoreSession();

    return firstValueFrom(
      this.http.patch<Issue>(
        `${this.base}/admin/issues/${encodeURIComponent(id)}`,
        {
          status,
          ...details
        },
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // ADMIN ALERTS
  // ==========================================

  async upsertAlert(
    a: PublicAlert
  ): Promise<PublicAlert> {

    await this.restoreSession();
    return firstValueFrom(
      this.http.put<PublicAlert>(
        `${this.base}/admin/alerts/${encodeURIComponent(a.id)}`,
        a,
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // ADMIN POLLS
  // ==========================================

  async upsertPoll(
    p: OpinionPoll
  ): Promise<OpinionPoll> {

    await this.restoreSession();
    return firstValueFrom(
      this.http.put<OpinionPoll>(
        `${this.base}/admin/polls/${encodeURIComponent(p.id)}`,
        p,
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // ADMIN ADVERTISEMENTS
  // ==========================================

  async upsertAd(ad: Ad): Promise<Ad> {

    await this.restoreSession();
    return firstValueFrom(
      this.http.put<Ad>(
        `${this.base}/admin/ads/${encodeURIComponent(ad.id)}`,
        ad,
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // DIRECT MEDIA FILE UPLOAD
  // ==========================================

  async uploadMedia(
    file: File
  ): Promise<MediaUploadResponse> {

    await this.restoreSession();

    const data = new FormData();
    data.append('file', file, file.name);

    const response = await firstValueFrom(
      this.http.post<MediaUploadResponse>(
        `${this.base}/admin/media`,
        data,
        this.adminOptions()
      )
    );

    if (!response || typeof response.url !== 'string') {
      throw new Error('The media API returned an invalid response.');
    }
   
if (
  !response.url.startsWith('/api/public/media/') &&
  !/^https?:\/\//.test(response.url)
) {
  throw new Error(
    'The media API returned an unsupported file location.'
  );
}

    return { id: response.id, kind: response.kind, url: response.url };
  }

}
