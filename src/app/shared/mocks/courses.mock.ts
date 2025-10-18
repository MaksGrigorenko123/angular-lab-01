import { Course } from '../models/course.model';

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Angular Basics',
    level: 'Beginner',
    lang: 'TypeScript',
    duration: '12h',
    description: 'Основи компонентів, шаблонів та роутінгу.',
    tags: ['angular', 'spa', 'ts'],
    link: 'https://angular.io',
  },
  {
    id: 2,
    title: 'TypeScript Deep Dive',
    level: 'Intermediate',
    lang: 'TypeScript',
    duration: '8h',
    description: 'Типи, generics, utility types.',
    tags: ['typescript'],
  },
  {
    id: 3,
    title: 'RxJS for Angular',
    level: 'Advanced',
    lang: 'TypeScript',
    duration: '10h',
    description: 'Потоки, оператори, управління станом.',
    tags: ['rxjs', 'streams'],
  },
];
