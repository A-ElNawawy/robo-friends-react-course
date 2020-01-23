import React from "react";
import './Card.css';

const Card = ({id, name, email}) => {
  return(
    <div id="card">
      <img src={`https://robohash.org/${id}`} alt="Robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;