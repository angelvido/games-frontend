import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

import cardsData from "../config/cardsConfig";

import "./styles/QuizMenu.scss";

function QuizMenu() {
  return (
    <>
      <div className="container">
        <Header />
        <p>Seleccione a que tipo de preguntas quiere jugar:</p>
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

export default QuizMenu;
