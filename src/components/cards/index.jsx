import React from "react";
import { Link } from "react-router-dom";

function Cards({ _id, name, description, image }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={image} alt={image} />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <p class="title is-4">
              <Link to={`services/${_id}`}>
                <label htmlFor="">Services</label>
                <h3>{name}</h3>{" "}
              </Link>
            </p>
          </div>
        </div>

        <div class="content">
          <label htmlFor="">Description</label>
          <h3>{description}</h3>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="cards">
    //     <img src={image} alt={image} />
    //     <Link to={`services/${_id}`}>
    //       <label htmlFor="">Services</label>
    //       <h3>{name}</h3>
    //     </Link>
    //     <label htmlFor="">description</label>
    //     <h3>{description}</h3>
    //   </div>
    // </div>
  );
}

export default Cards;
