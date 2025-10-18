import { Injectable } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { COURSES } from '../../shared/mocks/courses.mock';

@Injectable({ providedIn: 'root' })
export class DataService {
  getItems(): Course[] {
    return COURSES;
  }
}
