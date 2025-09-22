import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../shared/models/course.model';

// Компонент для відображення одного курсу 
@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',   // підключаємо шаблон
  styleUrls: ['./item-card.scss']    // підключаємо стилі
})
export class ItemCard {
  
  @Input({ required: true }) item!: Course;
} 