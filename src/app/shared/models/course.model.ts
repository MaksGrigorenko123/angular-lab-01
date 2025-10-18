export interface Course {
  id: number | string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lang: string;
  duration: string;
  description?: string;
  tags?: string[];
  link?: string;
}
 