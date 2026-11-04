
import { Injectable, inject, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



import { NewsApiService } from './news-api.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private active = signal(false);

  readonly loggedIn = this.active.asReadonly();

  constructor(
    private api: NewsApiService
  ) {}

  // Check the real backend session
  async checkSession(): Promise<boolean> {
    try {
      const response = await this.api.restoreSession();

      const valid = Boolean(response?.user);

      this.active.set(valid);

      return valid;

    } catch {
      this.active.set(false);
      return false;
    }
  }

  // Real admin login
  async login(
    email: string,
    password: string
  ): Promise<boolean> {
    try {
      const response = await this.api.login(
        email.trim(),
        password
      );

      const valid = Boolean(response?.user);

      this.active.set(valid);

      return valid;

    } catch {
      this.active.set(false);
      return false;
    }
  }

  // End the real backend session
  async logout(): Promise<void> {
    await this.api.logout();
    this.active.set(false);
  }
}

// Protect admin pages with the real backend session
export const adminGuard: CanActivateFn = async () => {

  const auth = inject(AdminAuthService);
  const router = inject(Router);

  const authenticated = await auth.checkSession();

  if (authenticated) {
    return true;
  }

  return router.parseUrl('/admin/login');
};
