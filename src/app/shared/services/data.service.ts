// src/app/shared/services/data.service.ts
import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { COURSES } from '../../shared/mocks/courses.mock';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly itemsSubject = new BehaviorSubject<Course[]>(COURSES);
  readonly items$: Observable<Course[]> = this.itemsSubject.asObservable();

  getItems(): Observable<Course[]> {
    return this.items$;
  }

  setItems(items: Course[]): void {
    this.itemsSubject.next(items);
  }

  getSnapshot(): Course[] {
    return this.itemsSubject.getValue();
  }

  // ✅ нове: фільтрація на стороні сервісу
  filterByQuery(query: string): void {
    const q = (query ?? '').trim().toLowerCase();
    if (!q) {
      this.itemsSubject.next(COURSES);            // повертаємо повний список
      return;
    }
    const filtered = COURSES.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.lang.toLowerCase().includes(q) ||
      (c.tags ?? []).some(t => t.toLowerCase().includes(q))
    );
    this.itemsSubject.next(filtered);             // оновлюємо стан
  }
}
