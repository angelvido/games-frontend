import { Link } from "react-router-dom";
import homeLogo from "../assets/icons/home.svg";
import gameLogo from "../assets/icons/game.svg";
import statsLogo from "../assets/icons/stats.svg";

import "./styles/NavBar.scss";
import { useEffect, useState } from "react";

function NavBar() {
  const [user, setUser] = useState<string | null>(null);
  
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setUser(username);
    }
  }, []);

  return (
    <nav className="navBar">
      <Link to="/">
        <img src={homeLogo} alt="Home logo" /> Menu
      </Link>
      {!user ? (
        <>
        </>
      ) : (
        <Link to="/game">
        <img src={gameLogo} alt="Game logo" /> Juego
      </Link>
      )}
      <Link to="/stats">
        <img src={statsLogo} alt="Stats logo" /> Estadísticas
      </Link>
    </nav>
  );
}

export default NavBar;
