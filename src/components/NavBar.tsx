import { Link } from "react-router-dom";
import homeLogo from "../assets/icons/home.svg";
import gameLogo from "../assets/icons/game.svg";
import statsLogo from "../assets/icons/stats.svg";

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
      <Link to="/stats">
        <img src={statsLogo} alt="Stats logo" /> Estadísticas
      </Link>
    </nav>
  );
}

export default NavBar;
