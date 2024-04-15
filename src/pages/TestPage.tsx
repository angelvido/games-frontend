import { useEffect, useState } from "react";

import "./styles/TestPage.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";

import quizConfig1 from "../config/quizConfig1";
import quizConfig2 from "../config/quizConfig2";

import { Question } from "../models/interfaces/Question";

const initialQuestions = quizConfig1;
const additionalQuestion = quizConfig2;

function TestPage() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showUpdateButton, setShowUpdateButton] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/question/getQuestion", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error al obtener la pregunta: ', error);
      }
    };

    fetchQuestion();
  }, [])

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setShowResult(false);
    setSelectedAnswer(null);
    if (currentQuestion === questions.length - 2) {
      setShowUpdateButton(true);
    }
    setCorrectAnswer(null);
  };

  const handleAnswerClick = (selection: string) => {
    const isCorrectAnswer = selection === questions[currentQuestion].correctAnswer;
    setShowResult(true);
    setSelectedAnswer(selection);
    setCorrectAnswer(isCorrectAnswer);
    if(isCorrectAnswer) {
      setScore(score + 1);
    }
  };

  const handleEndOfQuestions = () => {
    setQuestions(additionalQuestion);
    setCurrentQuestion(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowUpdateButton(false);
    setCorrectAnswer(null);
    setScore(0);
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="testAnswers">
          <h3>Puntuación: {score}/10</h3>
          <div className="questionContainer">
            <h4>{questions[currentQuestion].question}</h4>
            {questions[currentQuestion].answers.map((answer) => (
              <div key={answer.id}>
                <button
                  onClick={() => handleAnswerClick(answer.id)}
                  disabled={showResult}
                  className={
                    `${selectedAnswer
                      ? selectedAnswer === answer.id
                        ? correctAnswer
                          ? "correct-answer answered"
                          : "incorrect-answer answered"
                        : "unanswered"
                      : ""
                    } `
                    +
                    `${correctAnswer == false && answer.id === questions[currentQuestion].correctAnswer ? "correct-answer" : ""}`
                  }
                >
                  {answer.id}) {answer.text}
                </button>
              </div>
            ))}
          </div>
          {showResult && (
            <div>
              {selectedAnswer === questions[currentQuestion].correctAnswer
                ? `!!La respuesta ${selectedAnswer} es correcta!!`
                : `La respuesta ${selectedAnswer} es incorrecta.`}
            </div>
          )}
          {currentQuestion < questions.length - 1 && selectedAnswer && (
            <button onClick={handleNextQuestion} className="nextQuestion">Siguiente Pregunta</button>
          )}
          {showUpdateButton && selectedAnswer && (
            <button onClick={handleEndOfQuestions} className="nextQuestion">Actualizar Preguntas</button>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TestPage;
