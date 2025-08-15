export interface Question {
  id: string;
  question: string;
  options: string[];
}

export interface UserAnswers {
  [questionId: string]: string;
}

export interface DesignOption {
  id: string;
  name: string;
  image: string;
  description: string;
}