import { Question } from "../models/interfaces/Question";

const quizConfig1: Question[] = [
  {
    question: "¿Cuál es la capital de Francia?",
    correctAnswer: "B",
    answers: [
      { id: "A", text: "Londres" },
      { id: "B", text: "París" },
      { id: "C", text: "Madrid" },
      { id: "D", text: "Roma" },
    ],
  },
  {
    question: "¿Cuántos planetas hay en nuestro sistema solar?",
    correctAnswer: "B",
    answers: [
      { id: "A", text: "7" },
      { id: "B", text: "8" },
      { id: "C", text: "9" },
      { id: "D", text: "10" },
    ],
  },
  {
    question: "¿Cuál es el animal terrestre más grande?",
    correctAnswer: "B",
    answers: [
      { id: "A", text: "Elefante africano" },
      { id: "B", text: "Ballena azul" },
      { id: "C", text: "Jirafa" },
      { id: "D", text: "Oso polar" },
    ],
  },
  {
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    correctAnswer: "B",
    answers: [
      { id: "A", text: "1935" },
      { id: "B", text: "1939" },
      { id: "C", text: "1941" },
      { id: "D", text: "1945" },
    ],
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    correctAnswer: "A",
    answers: [
      { id: "A", text: "Amazonas" },
      { id: "B", text: "Nilo" },
      { id: "C", text: "Yangtsé" },
      { id: "D", text: "Misisipi" },
    ],
  },
  {
    question: "¿Quién escribió 'Cien años de soledad'?",
    correctAnswer: "A",
    answers: [
      { id: "A", text: "Gabriel García Márquez" },
      { id: "B", text: "Pablo Neruda" },
      { id: "C", text: "Julio Cortázar" },
      { id: "D", text: "Mario Vargas Llosa" },
    ],
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    correctAnswer: "C",
    answers: [
      { id: "A", text: "Atlántico" },
      { id: "B", text: "Índico" },
      { id: "C", text: "Pacífico" },
      { id: "D", text: "Ártico" },
    ],
  },
  {
    question: "¿Cuál es la capital de Japón?",
    correctAnswer: "C",
    answers: [
      { id: "A", text: "Pekín" },
      { id: "B", text: "Seúl" },
      { id: "C", text: "Tokio" },
      { id: "D", text: "Bangkok" },
    ],
  },
  {
    question: "¿En qué año se fundó la ONU?",
    correctAnswer: "A",
    answers: [
      { id: "A", text: "1945" },
      { id: "B", text: "1955" },
      { id: "C", text: "1965" },
      { id: "D", text: "1975" },
    ],
  },
  {
    question: "¿Cuál es la montaña más alta del mundo?",
    correctAnswer: "A",
    answers: [
      { id: "A", text: "Everest" },
      { id: "B", text: "K2" },
      { id: "C", text: "Mont Blanc" },
      { id: "D", text: "Kilimanjaro" },
    ],
  },
];

export default quizConfig1;