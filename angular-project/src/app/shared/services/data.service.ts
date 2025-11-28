import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { COURSES } from '../../shared/mocks/courses.mock';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  getItems$(): Observable<Course[]> {
    return of(COURSES);
  }

  getItemById(id: number | string): Course | undefined {
    const nid = Number(id);
    return COURSES.find(c => c.id === nid);
  }

  getItemById$(id: number | string): Observable<Course | undefined> {
    const nid = Number(id);
    return of(COURSES.find(c => c.id === nid));
  }
}
