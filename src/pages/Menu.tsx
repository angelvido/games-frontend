import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

import cardsData from "../config/cardsConfig";

import "./styles/Menu.scss";

function Menu() {
  return (
    <>
      <div className="container">
        <Header />
        <p>Este es el conjunto de juegos disponibles en esta plataforma de juegos. Cada uno de ellos funciona con llamadas a la API de OpenAI.</p>
        <div className="cardContainer">
          {cardsData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Menu;
