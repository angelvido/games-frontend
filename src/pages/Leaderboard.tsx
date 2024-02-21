import "./styles/Leaderboard.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";

import leaderboardConfig from '../config/leaderboardConfig';

const leaderboardData = leaderboardConfig;

function Leaderboard() {
  return (
    <div className="container">
      <Header />
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Correct Answers</th>
              <th>Incorrect Answers</th>
              <th>Tests Played</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={entry.userId}>
                <td>{index + 1}</td>
                <td>{entry.username}</td>
                <td>{entry.totalCorrectAnswers}</td>
                <td>{entry.totalIncorrectAnswers}</td>
                <td>{entry.totalTestPlayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;