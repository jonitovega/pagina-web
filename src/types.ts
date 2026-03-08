export type View = 'dashboard' | 'courses' | 'assessments' | 'course-detail' | 'exam';

export interface Subject {
  id: string;
  title: string;
  teacher: string;
  room: string;
  progress: number;
  image: string;
  color: string;
}

export interface Evaluation {
  id: string;
  title: string;
  date: string;
  month: string;
  time: string;
  type: string;
  status: 'critical' | 'upcoming' | 'prepared';
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  status: 'completed' | 'active' | 'locked';
}

export interface Exam {
  id: string;
  title: string;
  duration: string;
  questions: number;
  status: 'not-started' | 'in-progress' | 'completed';
  score?: number;
  timeLeft?: string;
}
