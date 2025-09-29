import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../shared/models/course.model';
import { COURSES } from '../../shared/mocks/courses.mock';
import { ItemCardComponent } from '../item-card/item-card';
 

@Component({
  selector: 'app-items-list',
  standalone: true,
imports: [CommonModule, ItemCardComponent], 
  templateUrl: './items-list.html',
  styleUrl: './items-list.scss',
})
export class ItemsListComponent {
  items: Course[] = COURSES;

  trackById = (_: number, c: Course) => c.id;
}
  