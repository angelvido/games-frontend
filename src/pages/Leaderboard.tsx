import { useEffect, useState } from "react";

import "./styles/Leaderboard.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LeaderboardTableRowProps } from "../models/interfaces/LeaderboardTableRowProps";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardTableRowProps[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:8080/api/stats/getStats")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener estadísticas");
      }
      return response.json();
    })
    .then((data: LeaderboardTableRowProps[]) => {
      setLeaderboardData(data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }, []);

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
      {leaderboardData.length > 0 ? (
        <div className="leaderboard">
        <h2>Tabla de Puntuación</h2>
        <table>
          <thead>
            <tr>
              <th>Puesto</th>
              <th>Nombre de usuario</th>
              <th>Respuestas correctas</th>
              <th>Preguntas Jugadas</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.slice(startIndex, startIndex + itemsPerPage).map((entry, index) => (
              <tr>
                <td>{startIndex + index + 1}</td>
                <td>{entry.username}</td>
                <td>{entry.games_played}</td>
                <td>{entry.correct_answers}</td>
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
      ) : (
        <p>Por el momento no hay usuarios inscritos para poder ver sus estadísticas.</p>
      )}
      
      <Footer />
    </div>
  );
}

export default Leaderboard;
