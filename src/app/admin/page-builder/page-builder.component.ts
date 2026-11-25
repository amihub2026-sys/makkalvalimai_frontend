
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import {
  NewsApiService,
  EditingTool,
  DynamicPage,
  DynamicPageBlock,
  DynamicPageBlockInput
} from '../../services/news-api.service';

import {
  DynamicPageBlockActionsService
} from '../../services/dynamic-page-block-actions.service';

// ==========================================
// TYPES
// ==========================================

type PageMode = 'view' | 'edit';
type RendererType = EditingTool['rendererType'];
type Language = 'ta' | 'en';
type UploadTarget = 'main' | 'gallery' | 'card';

interface BilingualValue {
  ta: string;
  en: string;
}

interface GalleryItemForm {
  url: string;
  alt: BilingualValue;
  caption: BilingualValue;
}

interface CardItemForm {
  title: BilingualValue;
  description: BilingualValue;
  imageUrl: string;
  linkUrl: string;
}

interface BlockEditorForm {
  text: BilingualValue;
  level: number;

  url: string;
  alt: BilingualValue;
  caption: BilingualValue;

  galleryItems: GalleryItemForm[];
  cardItems: CardItemForm[];

  enabled: boolean;
  sortOrder: number;
}

@Component({
  selector: 'app-page-builder',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './page-builder.component.html',
  styleUrls: [
    './page-builder.component.css',
    './page-builder.component.responsive.css',
    './page-builder.actions.css'
  ]
})
export class PageBuilderComponent implements OnInit {

  // ==========================================
  // EDITING TOOLS
  // ==========================================

  availableTools: EditingTool[] = [];

  loadingTools = false;
  errorMessage = '';

  selectedTool: EditingTool | null = null;

  // ==========================================
  // DYNAMIC WEBSITE PAGES
  // ==========================================

  pages: DynamicPage[] = [];

  loadingPages = false;
  pagesErrorMessage = '';

  selectedPage: DynamicPage | null = null;

  loadingSelectedPage = false;

  // ==========================================
  // VIEW / EDIT MODE
  // ==========================================

  pageMode: PageMode = 'view';

  get isEditMode(): boolean {
    return !!this.selectedPage &&
      this.pageMode === 'edit';
  }

  get isViewMode(): boolean {
    return !!this.selectedPage &&
      this.pageMode === 'view';
  }

  // ==========================================
  // CREATE PAGE
  // ==========================================

  showCreatePageForm = false;
  creatingPage = false;

  pageErrorMessage = '';
  pageSuccessMessage = '';

  pageForm = this.emptyPageForm();

  // ==========================================
  // ADD / EDIT CONTENT BLOCK
  // ==========================================

  blockForm: BlockEditorForm = this.emptyBlockForm();

  editingBlockId: string | null = null;

  savingBlock = false;
  uploadingMedia = false;

  blockErrorMessage = '';
  blockSuccessMessage = '';

  get isEditingExistingBlock(): boolean {
    return this.editingBlockId !== null;
  }

  // ==========================================
  // DELETE / VISIBILITY / REORDER
  // ==========================================

  deletingBlockId: string | null = null;
  changingVisibilityBlockId: string | null = null;
  reorderingBlocks = false;

  // ==========================================
  // NEW - PUBLISH PAGE STATE
  // ==========================================

  publishingPage = false;

  get blockActionInProgress(): boolean {
    return this.savingBlock ||
      this.uploadingMedia ||
      this.deletingBlockId !== null ||
      this.changingVisibilityBlockId !== null ||
      this.reorderingBlocks ||
      this.publishingPage;
  }

  // ==========================================
  // CONSTRUCTOR
  // ==========================================

  constructor(
    private api: NewsApiService,
    private blockActions: DynamicPageBlockActionsService
  ) {}

  ngOnInit(): void {
    void this.loadAvailableTools();
    void this.loadPages();
  }

  // ==========================================
  // EMPTY FORM HELPERS
  // ==========================================

  private emptyBilingual(): BilingualValue {
    return {
      ta: '',
      en: ''
    };
  }

  private emptyPageForm() {
    return {
      slug: '',
      title: this.emptyBilingual()
    };
  }

  private emptyGalleryItem(): GalleryItemForm {
    return {
      url: '',
      alt: this.emptyBilingual(),
      caption: this.emptyBilingual()
    };
  }

  private emptyCardItem(): CardItemForm {
    return {
      title: this.emptyBilingual(),
      description: this.emptyBilingual(),
      imageUrl: '',
      linkUrl: ''
    };
  }

  private emptyBlockForm(sortOrder = 0): BlockEditorForm {
    return {
      text: this.emptyBilingual(),
      level: 2,

      url: '',
      alt: this.emptyBilingual(),
      caption: this.emptyBilingual(),

      galleryItems: [],
      cardItems: [],

      enabled: true,
      sortOrder
    };
  }

  // ==========================================
  // SAFE CONTENT READ HELPERS
  // ==========================================

  private contentObject(
    value: unknown
  ): Record<string, unknown> {

    if (
      value !== null &&
      typeof value === 'object' &&
      !Array.isArray(value)
    ) {
      return value as Record<string, unknown>;
    }

    return {};
  }

  private stringValue(value: unknown): string {
    return typeof value === 'string' ? value : '';
  }

  private bilingualValue(value: unknown): BilingualValue {
    const item = this.contentObject(value);

    return {
      ta: this.stringValue(item['ta']),
      en: this.stringValue(item['en'])
    };
  }

  // ==========================================
  // LOAD EDITING TOOLS FROM MONGODB
  // ==========================================

  async loadAvailableTools(): Promise<void> {
    if (this.blockActionInProgress) return;

    this.loadingTools = true;
    this.errorMessage = '';

    try {
      this.availableTools =
        await this.api.getActiveEditingTools();

      if (this.selectedTool) {
        const currentKey = this.selectedTool.key;

        this.selectedTool =
          this.availableTools.find(
            tool => tool.key === currentKey
          ) || null;
      }

      if (
        this.isEditMode &&
        !this.selectedTool &&
        this.availableTools.length > 0
      ) {
        this.selectTool(this.availableTools[0]);
      }

    } catch (error) {
      console.error('Load editing tools:', error);

      this.errorMessage =
        'Unable to load editing tools.';

    } finally {
      this.loadingTools = false;
    }
  }

  // ==========================================
  // LOAD WEBSITE PAGES
  // ==========================================

  async loadPages(): Promise<void> {
    this.loadingPages = true;
    this.pagesErrorMessage = '';

    try {
      const items = await this.api.adminDynamicPages();

      this.pages = items;

      if (this.selectedPage) {
        const current = this.selectedPage;

        const updated = items.find(
          page => page.slug === current.slug
        );

        if (updated) {
          this.selectedPage = {
            ...current,
            ...updated,
            blocks: current.blocks
          };
        }
      }

    } catch (error) {
      console.error('Load dynamic pages:', error);

      this.pagesErrorMessage =
        'Unable to load website pages.';

    } finally {
      this.loadingPages = false;
    }
  }

  // ==========================================
  // CREATE PAGE FORM
  // ==========================================

  openCreatePageForm(): void {
    if (this.creatingPage) return;

    this.pageForm = this.emptyPageForm();

    this.pageErrorMessage = '';
    this.pageSuccessMessage = '';

    this.showCreatePageForm = true;
  }

  closeCreatePageForm(): void {
    if (this.creatingPage) return;

    this.showCreatePageForm = false;
    this.pageErrorMessage = '';
  }

  // ==========================================
  // CREATE DYNAMIC PAGE
  // ==========================================

  async createPage(): Promise<void> {
    if (this.creatingPage) return;

    this.pageErrorMessage = '';
    this.pageSuccessMessage = '';

    const slug = this.pageForm.slug
      .trim()
      .toLowerCase();

    const ta = this.pageForm.title.ta.trim();
    const en = this.pageForm.title.en.trim();

    if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) ||
      slug.length > 100
    ) {
      this.pageErrorMessage =
        'Enter a valid page URL, such as about-us.';
      return;
    }

    if (!ta || !en) {
      this.pageErrorMessage =
        'Tamil and English titles are required.';
      return;
    }

    if (ta.length > 200 || en.length > 200) {
      this.pageErrorMessage =
        'Page titles cannot exceed 200 characters.';
      return;
    }

    this.creatingPage = true;

    try {
      const page = await this.api.createDynamicPage({
        slug,
        title: { ta, en }
      });

      this.pageForm = this.emptyPageForm();
      this.showCreatePageForm = false;

      this.selectedPage = page;

      await this.loadPages();
      await this.reloadSelectedPage();

      this.editSelectedPage();

      this.pageSuccessMessage =
        'Page created successfully as a draft.';

    } catch (error: unknown) {
      console.error('Create dynamic page:', error);

      if (
        error instanceof HttpErrorResponse &&
        error.status === 409
      ) {
        this.pageErrorMessage =
          'This page URL already exists.';

      } else if (
        error instanceof HttpErrorResponse &&
        (error.status === 401 || error.status === 403)
      ) {
        this.pageErrorMessage =
          'Admin session expired or access denied.';

      } else {
        this.pageErrorMessage =
          'Unable to create page. Please try again.';
      }

    } finally {
      this.creatingPage = false;
    }
  }

  // ==========================================
  // OPEN EXISTING PAGE
  // ==========================================

  async selectPage(page: DynamicPage): Promise<void> {
    if (this.blockActionInProgress) return;

    this.selectedPage = page;
    this.pageMode = 'view';

    this.selectedTool = null;
    this.editingBlockId = null;

    this.showCreatePageForm = false;

    this.pageErrorMessage = '';
    this.pageSuccessMessage = '';

    this.blockErrorMessage = '';
    this.blockSuccessMessage = '';

    await this.reloadSelectedPage();
  }

  // ==========================================
  // RELOAD PAGE CONTENT
  // ==========================================

  async reloadSelectedPage(): Promise<void> {
    if (!this.selectedPage) return;

    const slug = this.selectedPage.slug;

    this.loadingSelectedPage = true;
    this.pageErrorMessage = '';

    try {
      const page = await this.api.adminDynamicPage(slug);

      if (this.selectedPage?.slug === slug) {
        this.selectedPage = page;
      }

    } catch (error) {
      console.error('Load selected page:', error);

      if (this.selectedPage?.slug === slug) {
        this.pageErrorMessage =
          'Unable to load this page content.';
      }

    } finally {
      if (this.selectedPage?.slug === slug) {
        this.loadingSelectedPage = false;
      }
    }
  }

  // ==========================================
  // ENTER EDIT MODE
  // ==========================================

  editSelectedPage(): void {
    if (
      !this.selectedPage ||
      !!this.selectedPage.archivedAt ||
      this.blockActionInProgress ||
      this.loadingSelectedPage
    ) {
      return;
    }

    this.pageMode = 'edit';

    this.blockErrorMessage = '';
    this.blockSuccessMessage = '';

    if (this.availableTools.length > 0) {
      this.selectTool(this.availableTools[0]);
    } else {
      this.selectedTool = null;
      this.editingBlockId = null;
      this.blockForm = this.emptyBlockForm();
    }
  }

  // ==========================================
  // RETURN TO VIEW MODE
  // ==========================================

  viewSelectedPage(): void {
    if (this.blockActionInProgress) return;

    this.pageMode = 'view';

    this.selectedTool = null;
    this.editingBlockId = null;

    this.blockForm = this.emptyBlockForm();

    this.blockErrorMessage = '';
    this.blockSuccessMessage = '';
  }

  // ==========================================
  // BACK TO PAGE LIST
  // ==========================================

  closeSelectedPage(): void {
    if (this.blockActionInProgress) return;

    this.selectedPage = null;
    this.selectedTool = null;

    this.pageMode = 'view';
    this.editingBlockId = null;

    this.blockForm = this.emptyBlockForm();

    this.pageErrorMessage = '';
    this.pageSuccessMessage = '';

    this.blockErrorMessage = '';
    this.blockSuccessMessage = '';
  }

  // ==========================================
  // GET NEXT DISPLAY ORDER
  // ==========================================

  private nextBlockOrder(): number {
    const blocks = this.selectedPage?.blocks || [];

    if (blocks.length === 0) return 0;

    const maxOrder = Math.max(
      ...blocks.map(block => block.sortOrder)
    );

    return Math.min(
      10000,
      Math.max(0, maxOrder + 1)
    );
  }

  // ==========================================
  // SELECT TOOL TO ADD CONTENT
  // ==========================================

  selectTool(tool: EditingTool): void {
    if (
      !this.isEditMode ||
      this.blockActionInProgress
    ) {
      return;
    }

    this.selectedTool = tool;
    this.editingBlockId = null;

    this.blockForm = this.emptyBlockForm(
      this.nextBlockOrder()
    );

    if (tool.rendererType === 'gallery') {
      this.blockForm.galleryItems.push(
        this.emptyGalleryItem()
      );
    }

    if (tool.rendererType === 'cards') {
      this.blockForm.cardItems.push(
        this.emptyCardItem()
      );
    }

    this.blockErrorMessage = '';
    this.blockSuccessMessage = '';
  }

  get selectedRenderer(): RendererType | null {
    return this.selectedTool?.rendererType || null;
  }

  isToolSelected(tool: EditingTool): boolean {
    return this.selectedTool?.key === tool.key;
  }

  // ==========================================
  // EDIT AN EXISTING SAVED BLOCK
  // ==========================================

  editPageBlock(block: DynamicPageBlock): void {
    if (
      !this.isEditMode ||
      this.blockActionInProgress ||
      this.loadingSelectedPage
    ) {
      return;
    }

    if (!block._id) {
      this.blockErrorMessage =
        'Content block ID is missing.';
      return;
    }

    const tool = this.availableTools.find(
      item => item.key === block.toolKey
    );

    if (!tool) {
      this.blockErrorMessage =
        'This editing tool is inactive or archived. Restore it in Editing Tools Management before editing this block.';
      return;
    }

    if (tool.rendererType !== block.rendererType) {
      this.blockErrorMessage =
        'The saved renderer does not match the current editing tool.';
      return;
    }

    this.selectedTool = tool;
    this.editingBlockId = block._id;

    const content = this.contentObject(block.content);

    this.blockForm = this.emptyBlockForm(
      block.sortOrder
    );

    this.blockForm.enabled = block.enabled;

    switch (block.rendererType) {

      case 'heading':
      case 'text': {
        this.blockForm.text = this.bilingualValue(
          content['text']
        );

        if (block.rendererType === 'heading') {
          const level = Number(content['level']);

          this.blockForm.level =
            Number.isInteger(level) &&
            level >= 1 &&
            level <= 6
              ? level
              : 2;
        }

        break;
      }

      case 'image': {
        this.blockForm.url = this.stringValue(
          content['url']
        );

        this.blockForm.alt = this.bilingualValue(
          content['alt']
        );

        this.blockForm.caption = this.bilingualValue(
          content['caption']
        );

        break;
      }

      case 'video':
      case 'audio': {
        this.blockForm.url = this.stringValue(
          content['url']
        );

        this.blockForm.caption = this.bilingualValue(
          content['caption']
        );

        break;
      }

      case 'gallery': {
        const rawItems = Array.isArray(content['items'])
          ? content['items']
          : [];

        this.blockForm.galleryItems = rawItems.map(
          raw => {
            const item = this.contentObject(raw);

            return {
              url: this.stringValue(item['url']),
              alt: this.bilingualValue(item['alt']),
              caption: this.bilingualValue(
                item['caption']
              )
            };
          }
        );

        break;
      }

      case 'cards': {
        const rawItems = Array.isArray(content['items'])
          ? content['items']
          : [];

        this.blockForm.cardItems = rawItems.map(
          raw => {
            const item = this.contentObject(raw);

            return {
              title: this.bilingualValue(
                item['title']
              ),
              description: this.bilingualValue(
                item['description']
              ),
              imageUrl: this.stringValue(
                item['imageUrl']
              ),
              linkUrl: this.stringValue(
                item['linkUrl']
              )
            };
          }
        );

        break;
      }
    }

    this.blockErrorMessage = '';
    this.blockSuccessMessage =
      'Editing saved block. Update the form and click Save Changes.';
  }

  // ==========================================
  // CANCEL EXISTING BLOCK EDIT
  // ==========================================

  cancelBlockEdit(): void {
    if (this.blockActionInProgress) return;

    this.editingBlockId = null;

    if (this.selectedTool) {
      this.selectTool(this.selectedTool);
    } else {
      this.blockForm = this.emptyBlockForm();
    }
  }

  // ==========================================
  // GALLERY AND CARD ITEMS
  // ==========================================

  addGalleryItem(): void {
    if (
      this.selectedRenderer !== 'gallery' ||
      this.blockForm.galleryItems.length >= 30 ||
      this.blockActionInProgress
    ) {
      return;
    }

    this.blockForm.galleryItems.push(
      this.emptyGalleryItem()
    );
  }

  removeGalleryItem(index: number): void {
    if (this.blockActionInProgress) return;

    this.blockForm.galleryItems.splice(index, 1);
  }

  addCardItem(): void {
    if (
      this.selectedRenderer !== 'cards' ||
      this.blockForm.cardItems.length >= 30 ||
      this.blockActionInProgress
    ) {
      return;
    }

    this.blockForm.cardItems.push(
      this.emptyCardItem()
    );
  }

  removeCardItem(index: number): void {
    if (this.blockActionInProgress) return;

    this.blockForm.cardItems.splice(index, 1);
  }

  // ==========================================
  // UPLOAD BLOCK MEDIA
  // ==========================================

  async uploadBlockMedia(
    event: Event,
    target: UploadTarget = 'main',
    index = 0
  ): Promise<void> {

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (
      !file ||
      !this.selectedPage ||
      !this.selectedTool ||
      !this.isEditMode ||
      this.blockActionInProgress
    ) {
      return;
    }

    this.blockErrorMessage = '';
    this.blockSuccessMessage = '';

    const renderer = this.selectedTool.rendererType;

    const validTarget =
      target === 'main'
        ? (
          renderer === 'image' ||
          renderer === 'video' ||
          renderer === 'audio'
        )
        : target === 'gallery'
          ? renderer === 'gallery'
          : renderer === 'cards';

    if (!validTarget) {
      this.blockErrorMessage =
        'This upload is not available for the selected tool.';
      return;
    }

    const requiredMimePrefix =
      target !== 'main' || renderer === 'image'
        ? 'image/'
        : renderer === 'video'
          ? 'video/'
          : 'audio/';

    if (!file.type.startsWith(requiredMimePrefix)) {
      this.blockErrorMessage =
        'Please select the correct media file type.';
      return;
    }

    if (
      target === 'gallery' &&
      !this.blockForm.galleryItems[index]
    ) {
      this.blockErrorMessage =
        'Gallery item was not found.';
      return;
    }

    if (
      target === 'card' &&
      !this.blockForm.cardItems[index]
    ) {
      this.blockErrorMessage =
        'Card item was not found.';
      return;
    }

    this.uploadingMedia = true;

    try {
      const uploaded =
        await this.api.uploadMedia(file);

      if (target === 'main') {
        this.blockForm.url = uploaded.url;
      }

      if (target === 'gallery') {
        this.blockForm.galleryItems[index].url =
          uploaded.url;
      }

      if (target === 'card') {
        this.blockForm.cardItems[index].imageUrl =
          uploaded.url;
      }

      this.blockSuccessMessage =
        'Media uploaded. Save the content block to keep it on this page.';

    } catch (error) {
      console.error('Upload block media:', error);

      this.blockErrorMessage =
        'Unable to upload this media file.';

    } finally {
      this.uploadingMedia = false;
      input.value = '';
    }
  }

  // ==========================================
  // CONTENT VALIDATION HELPERS
  // ==========================================

  private cleanBilingual(
    value: BilingualValue
  ): BilingualValue {
    return {
      ta: value.ta.trim(),
      en: value.en.trim()
    };
  }

  private requiredBilingual(
    value: BilingualValue,
    label: string,
    maxLength: number
  ): BilingualValue {

    const cleaned = this.cleanBilingual(value);

    if (!cleaned.ta || !cleaned.en) {
      throw new Error(
        `${label}: Tamil and English are required.`
      );
    }

    if (
      cleaned.ta.length > maxLength ||
      cleaned.en.length > maxLength
    ) {
      throw new Error(
        `${label} cannot exceed ${maxLength} characters.`
      );
    }

    return cleaned;
  }

  private optionalBilingual(
    value: BilingualValue,
    label: string,
    maxLength: number
  ): BilingualValue | undefined {

    const cleaned = this.cleanBilingual(value);

    if (
      cleaned.ta.length > maxLength ||
      cleaned.en.length > maxLength
    ) {
      throw new Error(
        `${label} cannot exceed ${maxLength} characters.`
      );
    }

    return cleaned.ta || cleaned.en
      ? cleaned
      : undefined;
  }

  private requiredMediaUrl(url: string): string {
    const cleaned = url.trim();

    if (!cleaned) {
      throw new Error(
        'Please upload the required media file.'
      );
    }

    return cleaned;
  }

  // ==========================================
  // BUILD CONTENT FOR SELECTED RENDERER
  // ==========================================

  private buildBlockContent(
    renderer: RendererType
  ): unknown {

    const form = this.blockForm;

    switch (renderer) {

      case 'heading': {
        const text = this.requiredBilingual(
          form.text,
          'Heading',
          500
        );

        const level = Number(form.level);

        if (
          !Number.isInteger(level) ||
          level < 1 ||
          level > 6
        ) {
          throw new Error(
            'Heading level must be between 1 and 6.'
          );
        }

        return { text, level };
      }

      case 'text':
        return {
          text: this.requiredBilingual(
            form.text,
            'Text content',
            20000
          )
        };

      case 'image': {
        const caption = this.optionalBilingual(
          form.caption,
          'Image caption',
          1000
        );

        return {
          url: this.requiredMediaUrl(form.url),

          alt: this.requiredBilingual(
            form.alt,
            'Image alternative text',
            300
          ),

          ...(caption ? { caption } : {})
        };
      }

      case 'video':
      case 'audio': {
        const caption = this.optionalBilingual(
          form.caption,
          'Media caption',
          1000
        );

        return {
          url: this.requiredMediaUrl(form.url),
          ...(caption ? { caption } : {})
        };
      }

      case 'gallery': {
        const items = form.galleryItems.map(
          item => {
            const caption = this.optionalBilingual(
              item.caption,
              'Gallery caption',
              1000
            );

            return {
              url: this.requiredMediaUrl(item.url),

              alt: this.requiredBilingual(
                item.alt,
                'Gallery image alternative text',
                300
              ),

              ...(caption ? { caption } : {})
            };
          }
        );

        if (items.length < 1 || items.length > 30) {
          throw new Error(
            'Gallery must contain between 1 and 30 images.'
          );
        }

        return { items };
      }

      case 'cards': {
        const items = form.cardItems.map(
          item => {
            const description = this.optionalBilingual(
              item.description,
              'Card description',
              2000
            );

            const imageUrl = item.imageUrl.trim();
            const linkUrl = item.linkUrl.trim();

            return {
              title: this.requiredBilingual(
                item.title,
                'Card title',
                200
              ),

              ...(description ? { description } : {}),
              ...(imageUrl ? { imageUrl } : {}),
              ...(linkUrl ? { linkUrl } : {})
            };
          }
        );

        if (items.length < 1 || items.length > 30) {
          throw new Error(
            'Cards must contain between 1 and 30 items.'
          );
        }

        return { items };
      }

      default:
        throw new Error(
          'Unsupported editing tool renderer.'
        );
    }
  }

  // ==========================================
  // ADD OR UPDATE SAVED CONTENT BLOCK
  // ==========================================

  async addPageBlock(): Promise<void> {
    if (
      !this.selectedPage ||
      !this.selectedTool ||
      !this.isEditMode ||
      this.blockActionInProgress ||
      this.loadingSelectedPage
    ) {
      return;
    }

    this.blockErrorMessage = '';
    this.blockSuccessMessage = '';
    this.pageSuccessMessage = '';

    const slug = this.selectedPage.slug;
    const tool = this.selectedTool;

    try {
      const content = this.buildBlockContent(
        tool.rendererType
      );

      const sortOrder = Number(
        this.blockForm.sortOrder
      );

      if (
        !Number.isInteger(sortOrder) ||
        sortOrder < 0 ||
        sortOrder > 10000
      ) {
        throw new Error(
          'Display order must be between 0 and 10000.'
        );
      }

      const payload: DynamicPageBlockInput = {
        toolKey: tool.key,
        sortOrder,
        enabled: this.blockForm.enabled,
        content
      };

      this.savingBlock = true;

      if (this.editingBlockId) {
        await this.blockActions.updateBlock(
          slug,
          this.editingBlockId,
          payload
        );
      } else {
        await this.api.addDynamicPageBlock(
          slug,
          payload
        );
      }

      const wasEditing = !!this.editingBlockId;

      await this.reloadSelectedPage();

      this.resetBlockFormAfterSave(tool);

      this.blockSuccessMessage = wasEditing
        ? 'Content block updated successfully.'
        : 'Content block added successfully.';

    } catch (error: unknown) {
      console.error('Save content block:', error);

      if (
        error instanceof Error &&
        !(error instanceof HttpErrorResponse)
      ) {
        this.blockErrorMessage = error.message;

      } else if (
        error instanceof HttpErrorResponse &&
        error.status === 409
      ) {
        this.blockErrorMessage =
          'The page changed during editing. Refresh and try again.';

      } else if (
        error instanceof HttpErrorResponse &&
        (error.status === 401 || error.status === 403)
      ) {
        this.blockErrorMessage =
          'Admin session expired or access denied.';

      } else {
        this.blockErrorMessage =
          'Unable to save content block. Please check the form.';
      }

    } finally {
      this.savingBlock = false;
    }
  }

  // ==========================================
  // RESET FORM AFTER SAVING
  // ==========================================

  private resetBlockFormAfterSave(
    tool: EditingTool
  ): void {

    this.editingBlockId = null;
    this.selectedTool = tool;

    this.blockForm = this.emptyBlockForm(
      this.nextBlockOrder()
    );

    if (tool.rendererType === 'gallery') {
      this.blockForm.galleryItems.push(
        this.emptyGalleryItem()
      );
    }

    if (tool.rendererType === 'cards') {
      this.blockForm.cardItems.push(
        this.emptyCardItem()
      );
    }
  }

  // ==========================================
  // DELETE SAVED BLOCK
  // ==========================================

  async deletePageBlock(
    block: DynamicPageBlock
  ): Promise<void> {

    if (
      !this.selectedPage ||
      !this.isEditMode ||
      this.blockActionInProgress ||
      this.loadingSelectedPage
    ) {
      return;
    }

    if (!block._id) {
      this.pageErrorMessage =
        'Content block ID is missing.';
      return;
    }

    const confirmed = window.confirm(
      'Are you sure you want to delete this content block?'
    );

    if (!confirmed) return;

    const slug = this.selectedPage.slug;
    const blockId = block._id;

    this.pageErrorMessage = '';
    this.pageSuccessMessage = '';

    this.deletingBlockId = blockId;

    try {
      await this.api.deleteDynamicPageBlock(
        slug,
        blockId
      );

      if (this.selectedPage?.slug === slug) {
        this.selectedPage = {
          ...this.selectedPage,
          blocks: (this.selectedPage.blocks || [])
            .filter(item => item._id !== blockId)
        };
      }

      if (this.editingBlockId === blockId) {
        this.cancelEditingAfterDelete();
      }

      this.pageSuccessMessage =
        'Content block deleted successfully.';

    } catch (error: unknown) {
      console.error('Delete content block:', error);

      this.pageErrorMessage =
        this.actionErrorMessage(
          error,
          'Unable to delete content block.'
        );

    } finally {
      this.deletingBlockId = null;
    }
  }

  private cancelEditingAfterDelete(): void {
    this.editingBlockId = null;

    const tool = this.selectedTool;

    if (tool) {
      this.resetBlockFormAfterSave(tool);
    } else {
      this.blockForm = this.emptyBlockForm();
    }
  }

  // ==========================================
  // SHOW OR HIDE SAVED BLOCK
  // ==========================================

  async togglePageBlockVisibility(
    block: DynamicPageBlock
  ): Promise<void> {

    if (
      !this.selectedPage ||
      !this.isEditMode ||
      !block._id ||
      this.blockActionInProgress ||
      this.loadingSelectedPage
    ) {
      return;
    }

    const slug = this.selectedPage.slug;
    const blockId = block._id;

    const enabled = !block.enabled;

    this.pageErrorMessage = '';
    this.pageSuccessMessage = '';

    this.changingVisibilityBlockId = blockId;

    try {
      await this.blockActions.setVisibility(
        slug,
        blockId,
        enabled
      );

      if (this.selectedPage?.slug === slug) {
        this.selectedPage = {
          ...this.selectedPage,
          blocks: (this.selectedPage.blocks || [])
            .map(item =>
              item._id === blockId
                ? { ...item, enabled }
                : item
            )
        };
      }

      this.pageSuccessMessage = enabled
        ? 'Content block is now visible.'
        : 'Content block is now hidden.';

    } catch (error: unknown) {
      console.error(
        'Change block visibility:',
        error
      );

      this.pageErrorMessage =
        this.actionErrorMessage(
          error,
          'Unable to change block visibility.'
        );

    } finally {
      this.changingVisibilityBlockId = null;
    }
  }

  // ==========================================
  // MOVE BLOCK UP OR DOWN
  // ==========================================

  async movePageBlock(
    block: DynamicPageBlock,
    direction: -1 | 1
  ): Promise<void> {

    if (
      !this.selectedPage ||
      !this.isEditMode ||
      !block._id ||
      this.blockActionInProgress ||
      this.loadingSelectedPage
    ) {
      return;
    }

    const blocks = [...this.savedBlocks];

    const index = blocks.findIndex(
      item => item._id === block._id
    );

    const targetIndex = index + direction;

    if (
      index < 0 ||
      targetIndex < 0 ||
      targetIndex >= blocks.length
    ) {
      return;
    }

    const currentBlock = blocks[index];

    blocks[index] = blocks[targetIndex];
    blocks[targetIndex] = currentBlock;

    if (blocks.some(item => !item._id)) {
      this.pageErrorMessage =
        'Cannot reorder blocks with missing IDs.';
      return;
    }

    const orderedBlockIds = blocks.map(
      item => item._id as string
    );

    const slug = this.selectedPage.slug;

    this.pageErrorMessage = '';
    this.pageSuccessMessage = '';

    this.reorderingBlocks = true;

    try {
      await this.blockActions.reorderBlocks(
        slug,
        orderedBlockIds
      );

      const orders = new Map<string, number>();

      orderedBlockIds.forEach((id, newIndex) => {
        orders.set(id, newIndex);
      });

      if (this.selectedPage?.slug === slug) {
        this.selectedPage = {
          ...this.selectedPage,
          blocks: (this.selectedPage.blocks || [])
            .map(item => ({
              ...item,
              sortOrder: item._id
                ? (orders.get(item._id) ?? item.sortOrder)
                : item.sortOrder
            }))
        };
      }

      this.pageSuccessMessage =
        'Content order updated successfully.';

    } catch (error: unknown) {
      console.error('Reorder content blocks:', error);

      this.pageErrorMessage =
        this.actionErrorMessage(
          error,
          'Unable to reorder content blocks.'
        );

    } finally {
      this.reorderingBlocks = false;
    }
  }

  // ==========================================
  // CHECK MOVE AVAILABILITY
  // ==========================================

  canMoveBlockUp(block: DynamicPageBlock): boolean {
    return this.savedBlocks.findIndex(
      item => item._id === block._id
    ) > 0;
  }

  canMoveBlockDown(block: DynamicPageBlock): boolean {
    const blocks = this.savedBlocks;

    const index = blocks.findIndex(
      item => item._id === block._id
    );

    return index >= 0 &&
      index < blocks.length - 1;
  }

  // ==========================================
  // NEW - PUBLISH SELECTED DYNAMIC PAGE
  // ==========================================

  async publishSelectedPage(): Promise<void> {

    if (
      !this.selectedPage ||
      !!this.selectedPage.archivedAt ||
      this.blockActionInProgress ||
      this.loadingSelectedPage
    ) {
      return;
    }

    const slug = this.selectedPage.slug;

    const hasVisibleBlocks = (
      this.selectedPage.blocks || []
    ).some(block => block.enabled === true);

    if (!hasVisibleBlocks) {
      this.pageErrorMessage =
        'Add at least one visible content block before publishing.';
      return;
    }

    const confirmed = window.confirm(
      'Publish this page to the public website?\n\n' +
      'The current draft will become the published version. ' +
      'Existing public content will be replaced by this version.'
    );

    if (!confirmed) return;

    this.publishingPage = true;

    this.pageErrorMessage = '';
    this.pageSuccessMessage = '';

    try {
      const result = await this.blockActions.publishPage(
        slug
      );

      await this.reloadSelectedPage();
      await this.loadPages();

      this.pageSuccessMessage =
        `Page published successfully! Version ${result.version}.`;

    } catch (error: unknown) {
      console.error('Publish dynamic page:', error);

      this.pageErrorMessage =
        this.actionErrorMessage(
          error,
          'Unable to publish this page.'
        );

    } finally {
      this.publishingPage = false;
    }
  }

  // ==========================================
  // ADMIN ACTION ERROR HANDLING
  // ==========================================

  private actionErrorMessage(
    error: unknown,
    fallback: string
  ): string {

    if (error instanceof HttpErrorResponse) {
      if (error.status === 409) {
        return 'The page changed during editing. Refresh and try again.';
      }

      if (
        error.status === 401 ||
        error.status === 403
      ) {
        return 'Admin session expired or access denied.';
      }

      if (error.status === 404) {
        return 'The requested page or content block was not found. Refresh and try again.';
      }

      if (error.status === 400) {
        return 'The request was rejected. Check the page content and try again.';
      }
    }

    return fallback;
  }

  // ==========================================
  // SORT SAVED BLOCKS
  // ==========================================

  get savedBlocks(): DynamicPageBlock[] {
    return [
      ...(this.selectedPage?.blocks || [])
    ].sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
  }

  // ==========================================
  // DISPLAY TOOL LABEL
  // ==========================================

  blockToolLabel(
    block: DynamicPageBlock
  ): string {

    const tool = this.availableTools.find(
      item => item.key === block.toolKey
    );

    return tool?.label.en ||
      block.toolKey ||
      block.rendererType;
  }

  // ==========================================
  // DISPLAY SAVED BILINGUAL TEXT
  // ==========================================

  blockText(
    block: DynamicPageBlock,
    language: Language = 'en'
  ): string {

    const content = this.contentObject(block.content);

    const text = this.contentObject(
      content['text']
    );

    return this.stringValue(
      text[language]
    );
  }

  // ==========================================
  // RESOLVE SAVED MEDIA URL
  // ==========================================

  blockMediaSrc(
    block: DynamicPageBlock
  ): string {

    const content = this.contentObject(block.content);

    return this.iconImageSrc(
      this.stringValue(content['url'])
    );
  }

  // ==========================================
  // PAGE STATUS
  // ==========================================

  pageStatus(page: DynamicPage): string {
    if (page.archivedAt) {
      return 'Archived';
    }

    return page.status === 'published'
      ? 'Published'
      : 'Draft';
  }

  // ==========================================
  // RESOLVE UPLOADED MEDIA / ICON URL
  // ==========================================

  iconImageSrc(iconUrl?: string): string {
    const url = (iconUrl || '').trim();

    if (!url) return '';

    if (url.startsWith('/api/public/media/')) {
      const backendOrigin =
        environment.apiBaseUrl.replace(
          /\/api\/?$/,
          ''
        );

      return backendOrigin + url;
    }

    return url;
  }

  // ==========================================
  // TRACK EDITING TOOLS
  // ==========================================

  trackByKey(
    index: number,
    tool: EditingTool
  ): string {
    return tool.key;
  }

  // ==========================================
  // TRACK DYNAMIC PAGES
  // ==========================================

  trackBySlug(
    index: number,
    page: DynamicPage
  ): string {
    return page.slug;
  }

  // ==========================================
  // TRACK CONTENT BLOCKS
  // ==========================================

  trackByBlock(
    index: number,
    block: DynamicPageBlock
  ): string {
    return block._id ||
      `${block.toolKey}-${index}`;
  }

}
