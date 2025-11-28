import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../../shared/services/data.service';
import { HoverStyleDirective } from '../../shared/directives/hover-style';
import { TruncatePipe } from '../../shared/pipes/truncate-pipe';
import { Observable, map } from 'rxjs';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HoverStyleDirective,
    TruncatePipe
  ],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss'],
})
export class ItemsListComponent {

  searchTerm = '';

  items$: Observable<Course[]>;

  constructor(private dataService: DataService) {
    this.items$ = this.dataService.getItems$();
  }

  filter(list: Course[], term: string): Course[] {
    const q = term.toLowerCase().trim();
    if (!q) return list;

    return list.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.lang.toLowerCase().includes(q) ||
      (c.tags ?? []).some((t: string) => t.toLowerCase().includes(q))
    );
  }
}
