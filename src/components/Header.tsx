import NavBar from "./NavBar";
import UserBar from "./UserBar";

import "./styles/Header.scss";

function Header() {
  return (
    <>
      <div className="headerContainer">
        <NavBar />
        <div className="titleContainer">
          <h1>Playground Games</h1>
          <h2>Proyecto Desarrollado por Ángel Vidal Domínguez</h2>
        </div>
        <UserBar />
      </div>
    </>
  );
}

export default Header;
