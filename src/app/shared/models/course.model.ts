export interface Course {
  id: number;
  title: string;
  level: string;
  lang: string;
  duration: string;
  description?: string;
  tags?: string[];
}
