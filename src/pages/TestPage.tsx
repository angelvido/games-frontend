import { useEffect, useState } from "react";

import "./styles/TestPage.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Question } from "../models/interfaces/Question";

function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [questions, setQuestions] = useState<number>(1);
  const [answered, setAnswered] = useState<boolean>(false);
  const [badResponse, setBadResponse] = useState<boolean>(false);
  const [userExists, setUserExists] = useState<boolean>(false);

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (token != null && username != null) {
      setUserExists(true);
    }    
  }, [token, username]);

  const fetchQuestion = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/question/getQuestion",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      setBadResponse(true);
      console.error("Error al obtener la pregunta: ", error);
    }
  };

  const sendStat = async (isCorrectAnswer: boolean) => {
    try {
      const response = await fetch("http://localhost:8080/api/stats/addStat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ result: isCorrectAnswer }),
      });
      if (!response.ok) {
        throw new Error("Error al enviar la estadística");
      }
    } catch (error) {
      console.error("Error al enviar la estadística: ", error);
    }
  };

  useEffect(() => {
    const loadQuestion = async () => {
      try {
        const data = await fetchQuestion();
        setCurrentQuestion(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadQuestion();
  }, []);

  const handleAnswerClick = (selection: string) => {
    const isCorrectAnswer = selection === currentQuestion?.correctAnswer;
    setShowResult(true);
    setSelectedAnswer(selection);
    setCorrectAnswer(isCorrectAnswer);
    if (isCorrectAnswer) {
      setScore(score + 1);
    }
    setAnswered(true);
    sendStat(isCorrectAnswer);
  };

  const handleNextQuestion = async () => {
    setBadResponse(false);
    setShowResult(false);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setAnswered(false);
    if (!badResponse) {
      setQuestions(questions + 1);
    }
    setCurrentQuestion(null);
    const data = await fetchQuestion();
    setCurrentQuestion(data);
  };

  return (
    <>
      <div className="container">
        <Header />
        {userExists ? (
          <>
            <div className="testAnswers">
              <h3>
                Puntuación: {score}/{questions}
              </h3>
              {currentQuestion ? (
                <>
                  <div className="questionContainer">
                    <h4>{currentQuestion.question}</h4>
                    {currentQuestion.answers
                      .sort((a, b) => a.letter.localeCompare(b.letter))
                      .map((answer) => (
                        <div key={answer.letter}>
                          <button
                            onClick={() => handleAnswerClick(answer.letter)}
                            disabled={showResult}
                            className={
                              `${
                                selectedAnswer
                                  ? selectedAnswer === answer.letter
                                    ? correctAnswer
                                      ? "correct-answer answered"
                                      : "incorrect-answer answered"
                                    : "unanswered"
                                  : ""
                              } ` +
                              `${
                                correctAnswer == false &&
                                answer.letter === currentQuestion.correctAnswer
                                  ? "correct-answer"
                                  : ""
                              }`
                            }
                          >
                            {answer.letter}) {answer.text}
                          </button>
                        </div>
                      ))}
                  </div>
                </>
              ) : badResponse ? (
                <div className="error-container">
                  <p>Error al obtener la pregunta. Intenta de nuevo.</p>
                  <button onClick={handleNextQuestion}>
                    Intentar de nuevo
                  </button>
                </div>
              ) : (
                //Aqui quiero que aparezca en funcion de badresponse un mensaje de error en la peticion de la pregunta y un boton para realizar otra peticion o Cargando
                <p>Cargando preguntas</p>
              )}
              {showResult && (
                <div>
                  {selectedAnswer === currentQuestion?.correctAnswer
                    ? `!!La respuesta ${selectedAnswer} es correcta!!`
                    : `La respuesta ${selectedAnswer} es incorrecta.`}
                </div>
              )}
              {answered && (
                <button onClick={handleNextQuestion} className="nextQuestion">
                  Siguiente Pregunta
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <p>Necesita tener iniciada sesión con un usuario válido para poder jugar al juego de preguntas.</p>
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default TestPage;
