import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

function Cards({ _id, name, description, image }) {
  return (
    <Link
      to={`services/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
    <div className="vvnsdknvdk">
      <div class="card-group shadow mb-2 mt-2 bg-body rounded">
        <div class="card">
          <img src={image} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title border-bottom border-muted pb-2">{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
            <p class="card-text">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Cards;
