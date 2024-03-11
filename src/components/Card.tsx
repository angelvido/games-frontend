import CardProps from "../models/interfaces/CardProps";

import "./styles/Card.scss";

function Card({data}: CardProps) {
  return (
    <div className="card">
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </div>
  );
}

export default Card;
