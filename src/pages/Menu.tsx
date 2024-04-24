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
        <p>Aquí se encuentran los juegos desarrollados en esta plataforma.</p>
        <div className="cardContainer">
          {cardsData.map((card, index) => (
            <a href={card.url}>
              <Card key={index} data={card} />
            </a>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Menu;
