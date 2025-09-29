import { Course } from '../models/course.model';

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Основи JavaScript',
    level: 'Beginner',
    lang: 'JavaScript',
    duration: '4 тижні',
    description: 'Вивчення базових конструкцій та синтаксису JS.',
    tags: ['frontend', 'web']
  },
  {
    id: 2,
    title: 'Angular для початківців',
    level: 'Intermediate',
    lang: 'TypeScript',
    duration: '6 тижнів',
    description: 'Основи створення SPA-додатків за допомогою Angular.',
    tags: ['angular', 'frontend']
  },
  {
    id: 3,
    title: 'Node.js та Express',
    level: 'Intermediate',
    lang: 'JavaScript',
    duration: '5 тижнів',
    description: 'Серверна розробка з використанням Node.js та Express.',
    tags: ['backend', 'api']
  },
  {
    id: 4,
    title: 'Розширений курс з TypeScript',
    level: 'Advanced',
    lang: 'TypeScript',
    duration: '3 тижні',
    description: 'Поглиблене вивчення можливостей TypeScript.',
    tags: ['typescript', 'strict typing']
  }
];
 