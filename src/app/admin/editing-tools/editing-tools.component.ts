
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import {
  NewsApiService,
  EditingTool
} from '../../services/news-api.service';

type RendererOption = {
  value: EditingTool['rendererType'];
  label: string;
};

type EditingToolForm = Omit<EditingTool, 'rendererType'> & {
  rendererType: EditingTool['rendererType'] | '';
};

@Component({
  selector: 'app-editing-tools',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editing-tools.component.html',
  styleUrls: [
    './editing-tools.component.css',
    './editing-tools.component.responsive.css'
  ]
})
export class EditingToolsComponent implements OnInit {

  // Editing tools loaded from MongoDB
  tools: EditingTool[] = [];

  // Supported renderers loaded from backend
  rendererOptions: RendererOption[] = [];

  loading = false;
  loadingRenderers = false;
  saving = false;

  errorMessage = '';
  successMessage = '';

  isEditing = false;
  showForm = false;

  form: EditingToolForm = this.emptyForm();

  constructor(
    private api: NewsApiService
  ) {}

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  ngOnInit(): void {
    void this.loadTools();
    void this.loadRendererOptions();
  }

  // ==========================================
  // EMPTY FORM
  // ==========================================

  private emptyForm(): EditingToolForm {
    return {
      key: '',
      label: {
        ta: '',
        en: ''
      },
  rendererType: '',
icon: 'fa-solid fa-puzzle-piece',
iconUrl: '',
active: true,
sortOrder: 0
    };
  }
// ==========================================
// UPLOAD EDITING TOOL ICON
// ==========================================

async uploadToolIcon(event: Event): Promise<void> {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (!file || this.saving) return;

  // Allow image files only.
  const allowedTypes = [
    'image/png',
    'image/jpeg',
    'image/webp'
  ];

  if (!allowedTypes.includes(file.type)) {
    this.errorMessage =
      'Please select a PNG, JPG or WebP image.';
    input.value = '';
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    this.errorMessage =
      'Icon image must be smaller than 2 MB.';
    input.value = '';
    return;
  }

  this.saving = true;
  this.errorMessage = '';
  this.successMessage = '';

  try {
    const uploaded = await this.api.uploadMedia(file);

    this.form.iconUrl = uploaded.url;

    this.successMessage =
      'Icon uploaded. Click Save Tool to keep it.';

  } catch (error) {
    console.error('Upload editing tool icon:', error);

    this.errorMessage =
      'Unable to upload icon image.';
  } finally {
    this.saving = false;
    input.value = '';
  }
}
// ==========================================
// GET UPLOADED ICON IMAGE URL
// ==========================================

iconImageSrc(iconUrl?: string): string {
  const url = (iconUrl || '').trim();

  if (!url) {
    return '';
  }

  // Convert backend-relative media URLs to full URLs
  // so images display correctly in Angular.
  if (url.startsWith('/api/public/media/')) {
    const backendOrigin =
      environment.apiBaseUrl.replace(/\/api\/?$/, '');

    return backendOrigin + url;
  }

  return url;
}
  // ==========================================
  // LOAD EDITING TOOLS FROM MONGODB
  // ==========================================

  async loadTools(): Promise<void> {
    this.loading = true;

    try {
      this.tools = await this.api.adminEditingTools();
    } catch (error) {
      console.error('Load editing tools:', error);
      this.errorMessage =
        'Unable to load editing tools.';
    } finally {
      this.loading = false;
    }
  }

  // ==========================================
  // LOAD RENDERERS FROM NODE BACKEND
  // ==========================================

  async loadRendererOptions(): Promise<void> {
    this.loadingRenderers = true;

    try {
      this.rendererOptions =
        await this.api.getRendererOptions();
    } catch (error) {
      console.error('Load renderer options:', error);
      this.errorMessage =
        'Unable to load renderer options.';
    } finally {
      this.loadingRenderers = false;
    }
  }

  // ==========================================
  // CREATE FORM
  // ==========================================

  startCreate(): void {
    this.form = this.emptyForm();
    this.isEditing = false;
    this.showForm = true;

    this.errorMessage = '';
    this.successMessage = '';
  }

  // ==========================================
  // EDIT FORM
  // ==========================================

  editTool(tool: EditingTool): void {
    if (tool.archivedAt) {
      this.errorMessage =
        'Restore this tool before editing.';
      return;
    }

    this.form = {
      ...tool,
      label: { ...tool.label }
    };

    this.isEditing = true;
    this.showForm = true;

    this.errorMessage = '';
    this.successMessage = '';
  }

  // ==========================================
  // CANCEL
  // ==========================================

  cancelEdit(): void {
    this.form = this.emptyForm();
    this.isEditing = false;
    this.showForm = false;
    this.errorMessage = '';
  }

  // ==========================================
  // CREATE OR UPDATE
  // ==========================================

  async saveTool(): Promise<void> {
    if (this.saving) return;

    this.errorMessage = '';
    this.successMessage = '';

    const key = this.form.key.trim().toLowerCase();
    const rendererType = this.form.rendererType;

    if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key) ||
      key.length > 80
    ) {
      this.errorMessage =
        'Enter a valid tool key.';
      return;
    }

    if (
      !this.form.label.ta.trim() ||
      !this.form.label.en.trim()
    ) {
      this.errorMessage =
        'Tamil and English names are required.';
      return;
    }

    if (
      !rendererType ||
      !this.rendererOptions.some(
        option => option.value === rendererType
      )
    ) {
      this.errorMessage =
        'Select a valid renderer from the backend options.';
      return;
    }

    const sortOrder = Number(this.form.sortOrder);

    if (
      !Number.isInteger(sortOrder) ||
      sortOrder < 0 ||
      sortOrder > 10000
    ) {
      this.errorMessage =
        'Sort order must be between 0 and 10000.';
      return;
    }

    if (
      !this.isEditing &&
      this.tools.some(tool => tool.key === key)
    ) {
      this.errorMessage =
        'Tool key already exists. Use Edit.';
      return;
    }

    this.saving = true;

    try {
      const tool: EditingTool = {
        ...this.form,
        key,
        rendererType,
        sortOrder,
        label: {
          ta: this.form.label.ta.trim(),
          en: this.form.label.en.trim()
        }
      };

      await this.api.upsertEditingTool(tool);

      this.form = this.emptyForm();
      this.showForm = false;
      this.isEditing = false;

      await this.loadTools();

      this.successMessage =
        'Editing tool saved successfully.';
    } catch (error) {
      console.error('Save editing tool:', error);
      this.errorMessage =
        'Unable to save editing tool.';
    } finally {
      this.saving = false;
    }
  }

  // ==========================================
  // ARCHIVE - NO PERMANENT DELETION
  // ==========================================

  async archiveTool(tool: EditingTool): Promise<void> {
    if (this.saving || tool.archivedAt) return;

    const confirmed = window.confirm(
      `Archive "${tool.label.en}"?`
    );

    if (!confirmed) return;

    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      await this.api.archiveEditingTool(tool.key);
      await this.loadTools();

      this.cancelEdit();

      this.successMessage =
        'Editing tool archived successfully.';
    } catch (error) {
      console.error('Archive editing tool:', error);
      this.errorMessage =
        'Unable to archive editing tool.';
    } finally {
      this.saving = false;
    }
  }

  // ==========================================
  // RESTORE
  // ==========================================

  async restoreTool(tool: EditingTool): Promise<void> {
    if (this.saving || !tool.archivedAt) return;

    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      await this.api.restoreEditingTool(tool.key);
      await this.loadTools();

      this.successMessage =
        'Tool restored. Enable it when ready.';
    } catch (error) {
      console.error('Restore editing tool:', error);
      this.errorMessage =
        'Unable to restore editing tool.';
    } finally {
      this.saving = false;
    }
  }

  // ==========================================
  // ARCHIVED STATUS
  // ==========================================

  isArchived(tool: EditingTool): boolean {
    return !!tool.archivedAt;
  }

  // ==========================================
  // ANGULAR TRACKING
  // ==========================================

  trackByKey(
    index: number,
    tool: EditingTool
  ): string {
    return tool.key;
  }
}
