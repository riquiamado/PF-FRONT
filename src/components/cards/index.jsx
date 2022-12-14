import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

function Cards({ _id, name, description, image }) {
  return (
    <Link
      to={`services/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="card">
        <img src={image} alt={image} />
        <div className="text">
          <p>Service: </p>
          <h3>{name}</h3>
          <p>Description: </p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
