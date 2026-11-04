
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.responsive.css']
})
export class AdminLoginComponent {

  email = '';
  password = '';

  error = '';
  submitting = false;

  constructor(
    private auth: NewsApiService,
    private router: Router
  ) {}

  async login(): Promise<void> {

    if (this.submitting) {
      return;
    }

    this.error = '';
    this.submitting = true;

    try {

      await this.auth.login(
        this.email.trim(),
        this.password
      );

      this.password = '';

      await this.router.navigateByUrl(
        '/admin/dashboard'
      );

    } catch (error) {

      console.error('Admin login failed:', error);
      this.error = 'Login failed. Check your credentials or server connection.';

    } finally {

      this.submitting = false;

    }
  }
}
