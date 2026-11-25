
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import {
  NewsApiService,
  NavigationItem
} from '../../services/news-api.service';

import { NewsCategory } from '../../core/models';

// ==========================================
// BLANK NAVIGATION ITEM
// ==========================================

function blankNavigation(): NavigationItem {
  return {
    key: '',
    name: {
      ta: '',
      en: ''
    },
    type: 'page',
    path: '',
    categorySlug: '',
    parentKey: null,
    active: true,
    sortOrder: 0
  };
}

@Component({
  selector: 'app-navigation-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './navigation.component.html',
  styleUrls: [
    './navigation.component.css',
    './navigation.component.responsive.css'
  ]
})
export class NavigationAdminComponent implements OnInit {

  items: NavigationItem[] = [];
  categories: NewsCategory[] = [];

  draft: NavigationItem = blankNavigation();

  editingKey: string | null = null;

  loading = false;
  saving = false;
  deletingKey: string | null = null;

  error = '';
  message = '';

  constructor(
    private api: NewsApiService
  ) {}

  // ==========================================
  // INITIALIZATION
  // ==========================================

  ngOnInit(): void {
    void this.loadData();
  }

  // ==========================================
  // LOAD NAVIGATION AND NEWS CATEGORIES
  // ==========================================

  async loadData(): Promise<void> {
    this.loading = true;
    this.error = '';

    try {
      const [navigation, categories] = await Promise.all([
        this.api.adminNavigation(),
        this.api.adminCategories()
      ]);

      if (
        !Array.isArray(navigation) ||
        !Array.isArray(categories)
      ) {
        throw new Error(
          'Invalid navigation or category response.'
        );
      }

      this.items = [...navigation].sort(
        (a, b) =>
          a.sortOrder - b.sortOrder ||
          a.key.localeCompare(b.key)
      );

      this.categories = [...categories].sort(
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
  // AVAILABLE NEWS CATEGORIES
  // ==========================================

  get activeCategories(): NewsCategory[] {
    return this.categories.filter(
      category => category.active
    );
  }

  // ==========================================
  // AVAILABLE PARENT DROPDOWNS
  // ==========================================

  get parentDropdowns(): NavigationItem[] {
    return this.items.filter(
      item =>
        item.type === 'dropdown' &&
        item.key !== this.draft.key
    );
  }

  // ==========================================
  // NEW NAVIGATION ITEM
  // ==========================================

  newItem(): void {
    if (this.saving || this.deletingKey) {
      return;
    }

    this.draft = blankNavigation();
    this.editingKey = null;

    this.error = '';
    this.message = '';
  }

  // ==========================================
  // EDIT EXISTING NAVIGATION ITEM
  // ==========================================

  editItem(item: NavigationItem): void {
    if (this.saving || this.deletingKey) {
      return;
    }

    this.draft = {
      ...item,
      name: {
        ta: item.name.ta,
        en: item.name.en
      },
      path: item.path || '',
      categorySlug: item.categorySlug || '',
      parentKey: item.parentKey || null
    };

    this.editingKey = item.key;

    this.error = '';
    this.message = '';
  }

  // ==========================================
  // NAVIGATION TYPE CHANGE
  // ==========================================

  onTypeChange(): void {

    if (this.draft.type === 'page') {
      this.draft.categorySlug = '';
    }

    if (this.draft.type === 'category') {
      this.draft.path = '';
    }

    if (this.draft.type === 'dropdown') {
      this.draft.path = '';
      this.draft.categorySlug = '';
      this.draft.parentKey = null;
    }
  }

  // ==========================================
  // SAVE NAVIGATION ITEM
  // ==========================================

  async saveItem(): Promise<void> {

    if (this.saving || this.deletingKey) {
      return;
    }

    this.error = '';
    this.message = '';

    const key = this.draft.key
      .trim()
      .toLowerCase();

    const tamilName = this.draft.name.ta.trim();
    const englishName = this.draft.name.en.trim();

    // Validate unique key.

    if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key) ||
      key.length > 80
    ) {
      this.error =
        'Enter a valid menu key, such as home, more or contact-us.';
      return;
    }

    // Validate Tamil and English names.

    if (
      !tamilName ||
      !englishName ||
      tamilName.length > 120 ||
      englishName.length > 120
    ) {
      this.error =
        'Enter Tamil and English menu names (maximum 120 characters each).';
      return;
    }

    // Validate display order.

    const sortOrder = Number(
      this.draft.sortOrder
    );

    if (
      !Number.isInteger(sortOrder) ||
      sortOrder < 0
    ) {
      this.error =
        'Display order must be zero or a positive whole number.';
      return;
    }

    // Do not overwrite another saved menu.

    if (
      !this.editingKey &&
      this.items.some(item => item.key === key)
    ) {
      this.error =
        'This menu key already exists. Choose another key.';
      return;
    }

    // ======================================
    // PAGE VALIDATION
    // ======================================

    if (this.draft.type === 'page') {

      if (
        !/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(
          this.draft.path.trim()
        )
      ) {
        this.error =
          'Enter a valid website path, such as /public-issues or /.';
        return;
      }
    }

    // ======================================
    // NEWS CATEGORY VALIDATION
    // ======================================

    if (this.draft.type === 'category') {

      if (!this.draft.categorySlug) {
        this.error =
          'Select a news category.';
        return;
      }

      if (
        !this.categories.some(
          category =>
            category.slug === this.draft.categorySlug &&
            category.active
        )
      ) {
        this.error =
          'Select an active news category.';
        return;
      }
    }

    // ======================================
    // DROPDOWN VALIDATION
    // ======================================

    if (
      this.draft.type === 'dropdown' &&
      this.draft.parentKey
    ) {
      this.error =
        'Dropdown menus must be placed in the main header.';
      return;
    }

    // ======================================
    // PREPARE BACKEND PAYLOAD
    // ======================================

    const payload: NavigationItem = {
      key,
      name: {
        ta: tamilName,
        en: englishName
      },
      type: this.draft.type,
      path:
        this.draft.type === 'page'
          ? this.draft.path.trim()
          : '',
      categorySlug:
        this.draft.type === 'category'
          ? this.draft.categorySlug
          : '',
      parentKey:
        this.draft.type === 'dropdown'
          ? null
          : this.draft.parentKey || null,
      active: this.draft.active,
      sortOrder
    };

    this.saving = true;

    try {
      const saved = await this.api.upsertNavigation(
        payload
      );

      this.editingKey = saved.key;

      this.draft = {
        ...saved,
        name: {
          ...saved.name
        }
      };

      await this.loadData();

      this.message =
        'Navigation menu saved successfully.';

    } catch (error) {
      this.error = this.getError(error);

    } finally {
      this.saving = false;
    }
  }

  // ==========================================
  // DELETE NAVIGATION ITEM
  // ==========================================

  async deleteItem(
    item: NavigationItem
  ): Promise<void> {

    if (this.saving || this.deletingKey) {
      return;
    }

    const confirmed = confirm(
      `Delete menu "${item.name.en}" permanently?`
    );

    if (!confirmed) {
      return;
    }

    this.deletingKey = item.key;

    this.error = '';
    this.message = '';

    try {
      await this.api.deleteNavigation(
        item.key
      );

      if (this.editingKey === item.key) {
        this.draft = blankNavigation();
        this.editingKey = null;
      }

      await this.loadData();

      this.message =
        'Navigation menu deleted successfully.';

    } catch (error) {
      this.error = this.getError(error);

    } finally {
      this.deletingKey = null;
    }
  }

  // ==========================================
  // GET MENU POSITION LABEL
  // ==========================================

  positionLabel(item: NavigationItem): string {

    if (!item.parentKey) {
      return 'Main Header';
    }

    const parent = this.items.find(
      menu => menu.key === item.parentKey
    );

    return parent
      ? parent.name.en
      : item.parentKey;
  }

  // ==========================================
  // BACKEND ERROR HANDLING
  // ==========================================

  private getError(error: unknown): string {

    if (error instanceof HttpErrorResponse) {

      if (error.status === 0) {
        return 'Cannot connect to the Node.js backend.';
      }

      if (error.status === 401) {
        return 'Admin session expired. Please log in again.';
      }

      if (error.status === 403) {
        return 'Access denied or invalid CSRF token.';
      }

      const serverMessage =
        error.error?.error ||
        error.error?.message;

      if (typeof serverMessage === 'string') {
        return serverMessage;
      }

      return `Backend request failed (${error.status}).`;
    }

    return error instanceof Error
      ? error.message
      : 'An unexpected error occurred.';
  }
}
