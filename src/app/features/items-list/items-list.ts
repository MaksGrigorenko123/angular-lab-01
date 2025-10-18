// src/app/features/items-list/items-list.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';
import { Course } from '../../shared/models/course.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss'],
})
export class ItemsListComponent implements OnInit, OnDestroy {
  items: Course[] = [];
  searchTerm = '';

  private destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => (this.items = items));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ✅ тепер просто повертаємо те, що прийшло із сервісу
  get filtered(): Course[] {
    return this.items;
  }

  // ✅ викликається при зміні значення у полі пошуку
  onSearchChange(q: string): void {
    this.dataService.filterByQuery(q);
  }

  showDetails(item: Course): void {
    alert(`Курс: ${item.title}\nРівень: ${item.level}\nМова: ${item.lang}`);
  }
}
 