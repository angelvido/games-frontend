import Header from "../components/Header";
import Footer from "../components/Footer";

import "./styles/Menu.scss";
import Card from "../components/Card";
import CardData from "../models/interfaces/CardData";
import { useEffect, useState } from "react";

function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    setIsLoggedIn(!!token && !!username);
    setUsername(username);
  }, []);
  const loggedOutCards: CardData[] = [
    {
      title: "Inicio de sesión",
      text: "Esta ruta de navegación te lleva al inicio de sesión de usuario.",
      url: "/login"
    },
    {
      title: "Registro de usuario",
      text: "Esta ruta de navegación te lleva al registro de usuario.",
      url: "/register"
    },
    {
      title: "Tabla de Puntuaciones",
      text: "Esta ruta de navegación te lleva a la tabla de puntuaciones de los usuarios registrados.",
      url: "/stats"
    }
  ];
  const loggedInCards: CardData[] = [
    {
      title: "Menú de Juegos",
      text: "Esta ruta de navegación te lleva al menú de juegos.",
      url: "/game"
    },
    {
      title: "Datos de Usuario",
      text: "Esta ruta de navegación te lleva a los datos de usuario.",
      url: username ? `${username}` : "/user"
    },
    {
      title: "Tabla de Puntuaciones",
      text: "Esta ruta de navegación te lleva a la tabla de puntuaciones de los usuarios registrados.",
      url: "/stats"
    }
  ];
  return (
    <>
      <div className="container">
        <Header />
        <h2>Bienvenido al Menú de la aplicación</h2>
        <p>
          Esta aplicación está diseñada para poder jugar a juegos con contenido generado por inteligencia artificial.
          <br />
          Explora la aplicación en las siguientes rutas de navegación:
        </p>
        <div className="cardContainer">
          {(isLoggedIn ? loggedInCards : loggedOutCards).map((card, index) => (
            <a key={index} href={card.url}>
              <Card data={card} />
            </a>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Menu;
