import { Component, Input } from '@angular/core';
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
  @Input() course!: Course;

  // Класи для [ngClass] – залежать від рівня
  get levelClasses() {
    const lvl = (this.course.level || '').toLowerCase();
    return {
      'lvl-beginner': lvl === 'beginner',
      'lvl-intermediate': lvl === 'intermediate',
      'lvl-advanced': lvl === 'advanced',
    };
  }

  // Стиль для [ngStyle] – динамічний колір лівої рамки
  get cardStyle() {
    return { 'border-left': `4px solid ${this.levelColor(this.course.level)}` };
  }

  private levelColor(level: string | undefined) {
    switch ((level || '').toLowerCase()) {
      case 'beginner': return '#4caf50';      // зелений
      case 'intermediate': return '#ff9800';  // помаранчевий
      case 'advanced': return '#f44336';      // червоний
      default: return 'transparent';
    }
  }
}
 