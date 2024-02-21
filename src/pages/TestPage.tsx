import { useState } from "react";

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

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setShowResult(false);
    setSelectedAnswer(null);
    if (currentQuestion === questions.length - 2) {
      setShowUpdateButton(true);
    }
  };

  const handleAnswerClick = (selection: string) => {
    const isCorrectAnswer = selection === questions[currentQuestion].correctAnswer;
    setShowResult(true);
    setSelectedAnswer(selection);
    setCorrectAnswer(isCorrectAnswer);
  };

  const handleEndOfQuestions = () => {
    setQuestions(additionalQuestion);
    setCurrentQuestion(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowUpdateButton(false);
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="testAnswers">
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
