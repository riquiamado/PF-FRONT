import React from "react";
import { Link } from "react-router-dom";
import "./cards.css"

function Cards({ _id, name, description, image }) {
  return (
    <div className="card">
          <img src={image} alt={image}/>
              <Link to={`services/${_id}`} style={{"textDecoration":"none","color":"black"}}>
                <label htmlFor="">Services</label>
                <h3>{name}</h3>{" "}
              </Link>
          <label htmlFor="">Description</label>
          <h3>{description}</h3>
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
