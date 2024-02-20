export interface Question {
  question: string;
  correctAnswer: string;
  answers: Answer[];
}

interface Answer {
  id: string;
  text: string;
}