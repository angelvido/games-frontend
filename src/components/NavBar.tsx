import { Link } from "react-router-dom";
import homeLogo from "../assets/icons/home.svg";
import gameLogo from "../assets/icons/game.svg";
import leaderboardLogo from "../assets/icons/leaderboard.svg";

import "./styles/NavBar.scss";

function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/">
        <img src={homeLogo} alt="Home logo" /> Menu
      </Link>
      <Link to="/game">
        <img src={gameLogo} alt="Game logo" /> Juego
      </Link>
      <Link to="/leaderboard">
        <img src={leaderboardLogo} alt="Leaderboard logo" /> Tabla de puntuación
      </Link>
    </nav>
  );
}

export default NavBar;
