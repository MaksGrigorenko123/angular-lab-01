import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { COURSES } from '../../shared/mocks/courses.mock';
import { Observable, of } from 'rxjs'; // ✅ добавлено

@Injectable({ providedIn: 'root' })
export class DataService {
  /** Повертає весь список курсів */
  getItems(): Course[] {
    return COURSES;
  }

  /** Повертає один курс за id (синхронно) */
  getItemById(id: number | string): Course | undefined {
    const nid = typeof id === 'string' ? Number(id) : id;
    return COURSES.find(c => String(c.id) === String(nid));
  }

  /** Повертає курс як Observable (для асинхронного використання з ActivatedRoute) */
  getItemById$(id: number | string): Observable<Course | undefined> {
    const nid = typeof id === 'string' ? Number(id) : id;
    return of(COURSES.find(c => String(c.id) === String(nid)));
  }
}
 