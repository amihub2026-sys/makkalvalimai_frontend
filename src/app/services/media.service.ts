import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/** Backend-issued media URLs only: no IndexedDB or browser-local publish path. */
@Injectable({ providedIn: 'root' })
export class MediaService {
  private readonly apiOrigin = new URL(
    environment.apiBaseUrl,
    typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200'
  ).origin;

  url(reference: string | null | undefined): string {
    const path = reference?.trim() || '';
    if (!path) return '';
    // Do not display javascript:, data:, blob:, unknown protocols or fake demo media.
    if (/^https:\/\//i.test(path)) return path;
    if (/^http:\/\/localhost(?::\d+)?\//i.test(path)) return path; // local development only
    if (path.startsWith('/api/public/media/')) return new URL(path, this.apiOrigin).href;
    if (path.startsWith('/api/admin/media/private/')) return new URL(path, this.apiOrigin).href;
    if (path.startsWith('assets/')) return path; // permanent identity assets, e.g., logo
    return '';
  }
}
