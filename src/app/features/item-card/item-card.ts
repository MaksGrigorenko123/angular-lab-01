import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss',
})
export class ItemCardComponent {
  // Вхідні дані від батьківського компонента
  @Input() course!: Course;

  // ВИХІДНА подія: повідомляємо батьківський компонент про вибір
  @Output() select = new EventEmitter<Course>();

  // Викликається з кнопки "Детальніше"
  onDetails() {
    this.select.emit(this.course);
  }
}
 