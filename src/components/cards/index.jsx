import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

function Cards({ _id, name, description, image, price, country, average }) {
  return (
    <Link
      to={`services/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="vvnsdknvdk">
        <div class="card-group shadow mb-2 mt-2 bg-body rounded">
          <div class="card">
            <img src={image} class="card-img-top" alt="imagenSERVICIO" />
            <div class="card-body">
              <h5 class="card-title border-bottom border-muted pb-2">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </h5>
              <p class="card-text">
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </p>
              <p class="card-text fs-5 pt-0">
                <small class="text">Price: ${price} Average: {average}</small>
              </p>
              {<button class="btn btn-lg btn-primary ms-2">View more</button>}
              <i class="bi bi-geo-alt fs-6 ps-4 text-muted"> {country}</i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
