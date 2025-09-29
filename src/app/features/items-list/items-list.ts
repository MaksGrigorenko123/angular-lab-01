import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';           // ← додали
import { Course } from '../../shared/models/course.model';
import { COURSES } from '../../shared/mocks/courses.mock';
import { ItemCardComponent } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent], // ← додали FormsModule
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss'],
})
export class ItemsListComponent {
  items: Course[] = COURSES;

  // двостороння прив’язка
  query = '';

  // відмальовування списку
  trackById = (_: number, c: Course) => c.id;

  // відфільтрований список
  get filtered(): Course[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.items;

    return this.items.filter(c => {
      const inTitle = c.title.toLowerCase().includes(q);
      const inLang  = c.lang.toLowerCase().includes(q);
      const inTags  = (c.tags || []).some(t => t.toLowerCase().includes(q));
      return inTitle || inLang || inTags;
    });
  }

  // (із кроку 4) обробка події "Детальніше"
  onSelect(course: Course) {
    console.log('Обраний курс:', course);
  }
}
 