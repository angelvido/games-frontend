import { useState } from "react";
import "./styles/TestPage.scss";
import quizConfig from "../config/quizConfig";
import additionalQuestions from "../config/additionalQuestions";

const initialQuestions = quizConfig;
const additionalQuestion = additionalQuestions;

interface Question {
  question: string;
  correctAnswer: string;
  answers: Answer[];
}

interface Answer {
  id: string;
  text: string;
}

function TestPage() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showUpdateButton, setShowUpdateButton] = useState<boolean>(false);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setShowResult(false);
    setSelectedAnswer(null);
    if(currentQuestion === questions.length - 2) {
      setShowUpdateButton(true);
    }
  };

  const handleAnswerClick = (selection: string) => {
    setShowResult(true);
    setSelectedAnswer(selection);
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
      <div className="testAnswers">
        <div className="questionContainer">
          <h4>{questions[currentQuestion].question}</h4>
          {questions[currentQuestion].answers.map((answer) => (
            <div key={answer.id}>
              <button
                onClick={() => handleAnswerClick(answer.id)}
                disabled={showResult}
              >
                {answer.id}) {answer.text}
              </button>
            </div>
          ))}
        </div>
        {showResult && (
          <div>
            {selectedAnswer === questions[currentQuestion].correctAnswer ? `!!La respuesta ${selectedAnswer} es correcta!!` : `La respuesta ${selectedAnswer} es incorrecta.`}
          </div>
        )}
        {currentQuestion < questions.length - 1 && (
          <button onClick={handleNextQuestion}>Siguiente Pregunta</button>
        )}
        {showUpdateButton && (
          <button onClick={handleEndOfQuestions}>Actualizar Preguntas</button>
        )}
      </div>
    </>
  );
}

export default TestPage;
