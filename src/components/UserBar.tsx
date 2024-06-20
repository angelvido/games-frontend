import { Link } from "react-router-dom";
import loginLogo from "../assets/icons/login.svg";
import registerLogo from "../assets/icons/register.svg";
import userLogo from "../assets/icons/user.svg";

import "./styles/UserBar.scss";
import { useEffect, useState } from "react";

function UserBar() {
  const [user, setUser] = useState<string | null>(null);
  
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setUser(username);
    }
  }, []);

  return (
    <nav className="userBar">
      {!user ? (
        <>
          <Link to="/login">
            <img src={loginLogo} alt="Login logo" /> Iniciar Sesión
          </Link>
          <Link to="/register">
            <img src={registerLogo} alt="Register logo" /> Registrarse
          </Link>
        </>
      ) : (
        <Link to={`/${user}`}>
          <img src={userLogo} alt="User logo" /> {`${user}`}
        </Link>
      )}
    </nav>
  );
}

export default UserBar;
