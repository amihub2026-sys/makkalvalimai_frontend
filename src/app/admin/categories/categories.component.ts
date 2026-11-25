
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { NewsCategory } from '../../core/models';
import { NewsApiService } from '../../services/news-api.service';

function blankCategory(): NewsCategory {
  return {
    slug: '',
    name: {
      ta: '',
      en: ''
    },
    active: true,
    showInMenu: true,

    // NEW: Default header placement
    headerType: 'more',

    sortOrder: 0,
    requiresVerifiedSource: false
  };
}

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './categories.component.html',
  styleUrls: [
    './categories.component.css',
    './categories.component.responsive.css'
  ]
})
export class CategoriesAdminComponent implements OnInit {

  categories: NewsCategory[] = [];

  draft: NewsCategory = blankCategory();

  editingSlug: string | null = null;

  loading = false;
  saving = false;
  deletingSlug: string | null = null;

  error = '';
  message = '';

  constructor(
    private api: NewsApiService
  ) {}

  ngOnInit(): void {
    void this.loadCategories();
  }

  // ==========================================
  // LOAD CATEGORIES FROM MONGODB
  // ==========================================

  async loadCategories(): Promise<void> {
    this.loading = true;
    this.error = '';

    try {
      const result = await this.api.adminCategories();

      if (!Array.isArray(result)) {
        throw new Error(
          'Invalid category response from backend.'
        );
      }

      this.categories = result.sort(
        (a, b) =>
          a.sortOrder - b.sortOrder ||
          a.slug.localeCompare(b.slug)
      );

    } catch (error) {
      this.error = this.getError(error);
    } finally {
      this.loading = false;
    }
  }

  // ==========================================
  // CREATE NEW CATEGORY
  // ==========================================

  newCategory(): void {
    if (this.saving || this.deletingSlug) {
      return;
    }

    this.draft = blankCategory();
    this.editingSlug = null;

    this.error = '';
    this.message = '';
  }

  // ==========================================
  // EDIT EXISTING CATEGORY
  // ==========================================

  editCategory(category: NewsCategory): void {
    if (this.saving || this.deletingSlug) {
      return;
    }

    this.draft = {
      ...category,
      name: {
        ta: category.name.ta,
        en: category.name.en
      },

      // NEW: Load saved header placement
      headerType: category.headerType ?? 'more'
    };

    this.editingSlug = category.slug;

    this.error = '';
    this.message = '';
  }

  // ==========================================
  // SAVE CATEGORY TO MONGODB
  // ==========================================

  async saveCategory(): Promise<void> {
    if (this.saving || this.deletingSlug) {
      return;
    }

    this.error = '';
    this.message = '';

    const slug = this.draft.slug
      .trim()
      .toLowerCase();

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      this.error =
        'Category slug must contain lowercase letters, numbers or hyphens.';
      return;
    }

    if (slug.length > 80) {
      this.error =
        'Category slug cannot exceed 80 characters.';
      return;
    }

    const tamilName = this.draft.name.ta.trim();
    const englishName = this.draft.name.en.trim();

    if (!tamilName || !englishName) {
      this.error =
        'Tamil and English category names are required.';
      return;
    }

    if (
      tamilName.length > 120 ||
      englishName.length > 120
    ) {
      this.error =
        'Category names cannot exceed 120 characters.';
      return;
    }

    if (
      !Number.isInteger(this.draft.sortOrder) ||
      this.draft.sortOrder < 0
    ) {
      this.error =
        'Display order must be a positive whole number or zero.';
      return;
    }

    if (
      this.editingSlug &&
      slug !== this.editingSlug
    ) {
      this.error =
        'The slug of an existing category cannot be changed.';
      return;
    }

    const payload: NewsCategory = {
      slug,
      name: {
        ta: tamilName,
        en: englishName
      },

      active: this.draft.active,
      showInMenu: this.draft.showInMenu,

      // NEW: Save header placement to MongoDB
      headerType: this.draft.headerType ?? 'more',

      sortOrder: this.draft.sortOrder,
      requiresVerifiedSource:
        this.draft.requiresVerifiedSource
    };

    this.saving = true;

    try {
      const saved = await this.api.upsertCategory(payload);

      this.editingSlug = saved.slug;

      this.draft = {
        ...saved,
        name: {
          ...saved.name
        },
        headerType: saved.headerType ?? payload.headerType
      };

      this.message =
        'News category saved successfully.';

      await this.loadCategories();

    } catch (error) {
      this.error = this.getError(error);
    } finally {
      this.saving = false;
    }
  }

  // ==========================================
  // DELETE CATEGORY
  // ==========================================

  async deleteCategory(
    category: NewsCategory
  ): Promise<void> {

    if (this.saving || this.deletingSlug) {
      return;
    }

    const approved = confirm(
      `Delete "${category.name.en}" permanently?\n\n` +
      'Categories used by news articles cannot be deleted.'
    );

    if (!approved) {
      return;
    }

    this.deletingSlug = category.slug;
    this.error = '';
    this.message = '';

    try {
      await this.api.deleteCategory(category.slug);

      if (this.editingSlug === category.slug) {
        this.draft = blankCategory();
        this.editingSlug = null;
      }

      this.message =
        'News category deleted successfully.';

      await this.loadCategories();

    } catch (error) {
      this.error = this.getError(error);
    } finally {
      this.deletingSlug = null;
    }
  }

  // ==========================================
  // ERROR HANDLING
  // ==========================================

  private getError(error: unknown): string {

    if (error instanceof HttpErrorResponse) {

      if (error.status === 0) {
        return 'Cannot connect to the backend server.';
      }

      if (error.status === 401) {
        return 'Admin session expired. Please log in again.';
      }

      if (error.status === 403) {
        return 'Access denied or invalid CSRF token.';
      }

      if (error.status === 409) {
        return (
          error.error?.error ||
          error.error?.message ||
          'This category is already in use.'
        );
      }

      return (
        error.error?.error ||
        error.error?.message ||
        `Backend request failed (${error.status}).`
      );
    }

    return error instanceof Error
      ? error.message
      : 'An unexpected error occurred.';
  }
}
