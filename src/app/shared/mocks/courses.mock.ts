// Імпортуємо інтерфейс Course, щоб дані відповідали його структурі
import { Course } from '../models/course.model';

// Масив тестових (фейкових) курсів для перевірки відображення
export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Вступ до TypeScript',
    level: 'beginner',
    language: 'UA',
    durationHours: 6,
    tags: ['TypeScript', 'Основи'],
    shortDescription: 'Базові типи, інтерфейси та робота з модулями.',
    isFeatured: true
  },
  {
    id: 2,
    title: 'Angular: компоненти та маршрутизація',
    level: 'intermediate',
    language: 'UA',
    durationHours: 10,
    tags: ['Angular', 'SPA', 'Компоненти'],
    shortDescription: 'Створення компонентів, передача даних, маршрутизація у застосунках.'
  },
  {
    id: 3,
    title: 'Об’єктно-орієнтоване програмування',
    level: 'intermediate',
    language: 'RU',
    durationHours: 8,
    tags: ['ООП', 'Класи', 'Інтерфейси'],
    shortDescription: 'Класи, наслідування, інтерфейси, принципи SOLID.'
  },
  {
    id: 4,
    title: 'RxJS та асинхронність в Angular',
    level: 'advanced',
    language: 'EN',
    durationHours: 12,
    tags: ['RxJS', 'Observables', 'Async'],
    shortDescription: 'Робота з потоками подій та операторами для асинхронного коду.'
  },
{
  id: 5,
  title: 'Практикум з програмування',
  level: 'beginner',
  language: 'UA',
  durationHours: 5,
  tags: ['Практика', 'Програмування'],
  shortDescription: 'Навчальний курс, створений студентом Григоренком Максимом (ІТ-32/2).'
}
];  