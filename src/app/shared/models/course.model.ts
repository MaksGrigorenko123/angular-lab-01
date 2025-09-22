// Інтерфейс описує структуру одного курсу програмування
export interface Course {
  id: number;               // Унікальний ідентифікатор курсу
  title: string;            // Назва курсу
  level: 'beginner' | 'intermediate' | 'advanced'; 
  // Рівень складності: початковий, середній, просунутий

  language: 'UA' | 'RU' | 'EN'; 
  // Мова, якою проводиться курс (українська, російська, англійська)

  durationHours: number;    // Тривалість курсу в годинах
  tags: string[];           // Ключові слова/мітки (наприклад: Angular, TypeScript, ООП)

  shortDescription: string; // Короткий опис курсу

  link?: string;            // (необов’язково) Посилання на додаткові матеріали
  isFeatured?: boolean;     // (необов’язково) Чи є курс рекомендованим
}
 