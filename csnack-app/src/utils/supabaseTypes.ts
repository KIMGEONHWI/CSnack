export interface CategoryTable {
  id: string;
  name: string;
  created_at?: string;
}

export interface QuizTable {
  id: string;
  category_id: string;
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  created_at?: string;
}

// 프론트엔드에서 사용할 타입
export interface Category {
  id: string;
  name: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizCategory {
  id: string;
  name: string;
  quizzes: Quiz[];
}
