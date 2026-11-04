import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVER_ARTICLE_KINDS } from '../../core/article-categories';

/** Honest read-only display: the current server does not expose category CRUD. */
@Component({
  selector: 'app-admin-categories', standalone: true, imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css', './categories.component.responsive.css']
})
export class CategoriesAdminComponent {
  readonly categories = SERVER_ARTICLE_KINDS;
}
