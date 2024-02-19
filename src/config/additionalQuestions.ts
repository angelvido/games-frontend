interface Question {
  question: string;
  correctAnswer: string;
  answers: Answer[];
}

interface Answer {
  id: string;
  text: string;
}

const additionalQuestions: Question[] = [
  {
    question: "¿Cuál es la capital de España?",
    correctAnswer: "C",
    answers: [
      { id: "A", text: "París" },
      { id: "B", text: "Berlín" },
      { id: "C", text: "Madrid" },
      { id: "D", text: "Roma" },
    ],
  },
  {
    question: "¿Cuántos continentes hay en el mundo?",
    correctAnswer: "D",
    answers: [
      { id: "A", text: "5" },
      { id: "B", text: "6" },
      { id: "C", text: "7" },
      { id: "D", text: "8" },
    ],
  },
  {
    question: "¿Cuál es la moneda de Japón?",
    correctAnswer: "A",
    answers: [
      { id: "A", text: "Yen" },
      { id: "B", text: "Euro" },
      { id: "C", text: "Dólar" },
      { id: "D", text: "Libra esterlina" },
    ],
  },
  {
    question: "¿Cuál es el metal más abundante en la corteza terrestre?",
    correctAnswer: "B",
    answers: [
      { id: "A", text: "Oro" },
      { id: "B", text: "Aluminio" },
      { id: "C", text: "Hierro" },
      { id: "D", text: "Cobre" },
    ],
  },
  {
    question: "¿Quién pintó la Mona Lisa?",
    correctAnswer: "C",
    answers: [
      { id: "A", text: "Vincent van Gogh" },
      { id: "B", text: "Pablo Picasso" },
      { id: "C", text: "Leonardo da Vinci" },
      { id: "D", text: "Michelangelo" },
    ],
  },
  {
    question: "¿Cuál es el país más grande del mundo?",
    correctAnswer: "A",
    answers: [
      { id: "A", text: "Rusia" },
      { id: "B", text: "Canadá" },
      { id: "C", text: "China" },
      { id: "D", text: "Estados Unidos" },
    ],
  },
  {
    question: "¿Cuál es la velocidad de la luz?",
    correctAnswer: "C",
    answers: [
      { id: "A", text: "100,000 km/s" },
      { id: "B", text: "200,000 km/s" },
      { id: "C", text: "299,792 km/s" },
      { id: "D", text: "400,000 km/s" },
    ],
  },
  {
    question: "¿Cuál es el principal componente del aire que respiramos?",
    correctAnswer: "D",
    answers: [
      { id: "A", text: "Oxígeno" },
      { id: "B", text: "Nitrógeno" },
      { id: "C", text: "Dióxido de carbono" },
      { id: "D", text: "Nitrógeno y oxígeno" },
    ],
  },
  {
    question: "¿Quién escribió 'Romeo y Julieta'?",
    correctAnswer: "B",
    answers: [
      { id: "A", text: "Charles Dickens" },
      { id: "B", text: "William Shakespeare" },
      { id: "C", text: "Jane Austen" },
      { id: "D", text: "Emily Brontë" },
    ],
  },
  {
    question: "¿Cuál es el componente principal de los huesos?",
    correctAnswer: "C",
    answers: [
      { id: "A", text: "Calcio" },
      { id: "B", text: "Hierro" },
      { id: "C", text: "Fósforo" },
      { id: "D", text: "Magnesio" },
    ],
  },
];

export default additionalQuestions;