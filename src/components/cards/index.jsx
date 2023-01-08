import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineStar,AiFillStar} from "react-icons/ai"
import "./cards.css";


function Cards({ _id, name, description, image, price, country, average }) {
  
  return (
    <Link
      to={`services/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="vvnsdknvdk">
        <div className="card-group shadow mb-2 mt-2 bg-body rounded">
          <div className="card">
            <img src={image} className="card-img-top" alt="imagenSERVICIO" />
            <div className="card-body">
              <h5 className="card-title border-bottom border-muted pb-2">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </h5>
              <p className="card-text">
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </p>
              <p className="card-text fs-5 pt-0">
                <small className="text">Price: ${price} <i>{[...new Array(5)].map((start,index)=>{return index < average? <AiFillStar key={index}/>:<AiOutlineStar key={index}/> })}</i> </small>
              </p>
              {<button className="btn btn-lg btn-primary ms-2">View more</button>}
              <i className="bi bi-geo-alt fs-6 ps-4 text-muted"> {country}</i>
            </div>
            
          </div>
          
          {/* <Rating name="read-only" value={value} readOnly /> */}
        </div>
      </div>
    </Link>
  );
}

export default Cards;
