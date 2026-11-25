
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../environments/environment';

import {
  NewsApiService,
  DynamicPageBlock,
  DynamicPageBlockInput
} from './news-api.service';

// ==========================================
// PUBLISH PAGE RESPONSE TYPE
// ==========================================

export interface PublishPageResult {
  slug: string;
  status: string;
  version: number;
  publishedAt: string;
  publishedBlocks: number;
}

@Injectable({
  providedIn: 'root'
})
export class DynamicPageBlockActionsService {

  private readonly base = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private api: NewsApiService
  ) {}

  // ==========================================
  // ADMIN SESSION AND CSRF PROTECTION
  // ==========================================

  private async mutationOptions() {
    const session = await this.api.restoreSession();

    return {
      withCredentials: true,
      headers: {
        'X-CSRF-Token': session.csrfToken
      }
    };
  }

  // ==========================================
  // EDIT EXISTING CONTENT BLOCK
  // ==========================================

  async updateBlock(
    slug: string,
    blockId: string,
    input: DynamicPageBlockInput
  ): Promise<DynamicPageBlock> {

    const response = await firstValueFrom(
      this.http.put<{
        success: boolean;
        message: string;
        block: DynamicPageBlock;
      }>(
        `${this.base}/admin/dynamic-pages/${encodeURIComponent(slug)}/blocks/${encodeURIComponent(blockId)}`,
        input,
        await this.mutationOptions()
      )
    );

    if (!response?.success || !response.block) {
      throw new Error(
        'Unable to update content block.'
      );
    }

    return response.block;
  }

  // ==========================================
  // SHOW OR HIDE CONTENT BLOCK
  // ==========================================

  async setVisibility(
    slug: string,
    blockId: string,
    enabled: boolean
  ): Promise<void> {

    const response = await firstValueFrom(
      this.http.patch<{
        success: boolean;
        enabled: boolean;
      }>(
        `${this.base}/admin/dynamic-pages/${encodeURIComponent(slug)}/blocks/${encodeURIComponent(blockId)}/visibility`,
        { enabled },
        await this.mutationOptions()
      )
    );

    if (
      !response?.success ||
      response.enabled !== enabled
    ) {
      throw new Error(
        'Unable to change content visibility.'
      );
    }
  }

  // ==========================================
  // REORDER CONTENT BLOCKS
  // ==========================================

  async reorderBlocks(
    slug: string,
    orderedBlockIds: string[]
  ): Promise<void> {

    const response = await firstValueFrom(
      this.http.put<{
        success: boolean;
        message: string;
        orderedBlockIds: string[];
      }>(
        `${this.base}/admin/dynamic-pages/${encodeURIComponent(slug)}/blocks/reorder`,
        { orderedBlockIds },
        await this.mutationOptions()
      )
    );

    if (!response?.success) {
      throw new Error(
        'Unable to reorder content blocks.'
      );
    }
  }

  // ==========================================
  // NEW - PUBLISH DYNAMIC WEBSITE PAGE
  // ==========================================

  async publishPage(
    slug: string
  ): Promise<PublishPageResult> {

    const pageSlug = slug.trim();

    if (!pageSlug) {
      throw new Error(
        'Page URL is required for publishing.'
      );
    }

    const response = await firstValueFrom(
      this.http.post<{
        success: boolean;
        message: string;
        item: PublishPageResult;
      }>(
        `${this.base}/admin/dynamic-pages/${encodeURIComponent(pageSlug)}/publish`,
        {},
        await this.mutationOptions()
      )
    );

    if (!response?.success || !response.item) {
      throw new Error(
        'Unable to publish this page.'
      );
    }

    return response.item;
  }

}
