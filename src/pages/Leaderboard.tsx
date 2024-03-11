import { useState } from "react";

import "./styles/Leaderboard.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";

import leaderboardConfig from "../config/leaderboardConfig";

const leaderboardData = leaderboardConfig;

function Leaderboard() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNextPage = () => {
    const newStartIndex = startIndex + itemsPerPage;
    setStartIndex(newStartIndex);
  };

  const handlePreviousPage = () => {
    const newStartIndex = startIndex - itemsPerPage;
    setStartIndex(newStartIndex);
  };

  return (
    <div className="container">
      <Header />
      <div className="leaderboard">
        <h2>Tabla de Puntuación</h2>
        <table>
          <thead>
            <tr>
              <th>Puesto</th>
              <th>Nombre de usuario</th>
              <th>Respuestas correctas</th>
              <th>Respuestas incorrectas</th>
              <th>Preguntas Jugadas</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.slice(startIndex, startIndex + itemsPerPage).map((entry, index) => (
              <tr key={entry.userId}>
                <td>{startIndex + index + 1}</td>
                <td>{entry.username}</td>
                <td>{entry.totalCorrectAnswers}</td>
                <td>{entry.totalIncorrectAnswers}</td>
                <td>{entry.totalTestPlayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="leaderboardButtons">
          {startIndex === 0
          ? <div></div>
          : <button onClick={handlePreviousPage} disabled={startIndex === 0}>{"<<  Anterior"}</button>
          }
          
          {startIndex + itemsPerPage >= leaderboardData.length
            ? <div></div>
            : <button onClick={handleNextPage} disabled={startIndex + itemsPerPage >= leaderboardData.length}>{"Siguiente  >>"}</button>
          }

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Leaderboard;
