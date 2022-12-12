import React from "react";
import { Link } from "react-router-dom";

function Cards({ _id, name, description, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={image} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <div className="title is-4">
              <Link to={`services/${_id}`}>
                <label htmlFor="">Services</label>
                <h3>{name}</h3>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="content">
          <label htmlFor="">Description</label>
          <h3>{description}</h3>
        </div>
      </div>
    </div>

    // <div>
    //   <div classNameName="cards">
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
