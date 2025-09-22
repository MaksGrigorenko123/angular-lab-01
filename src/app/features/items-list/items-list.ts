import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { Course } from '../../shared/models/course.model';
import { COURSES } from '../../shared/mocks/courses.mock';

// Компонент для відображення списку курсів
@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss']
})
export class ItemsList {
  // Масив курсів, який відповідає інтерфейсу Course
  items: Course[] = COURSES;
}
