export interface Question {
  question: string;
  correctAnswer: string;
  answers: Answer[];
}

interface Answer {
  letter: string;
  text: string;
}