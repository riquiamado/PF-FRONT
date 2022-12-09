import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="max-width">
      {/* <NavBar/>
            <div className={estilos.image}>
                <Link to="/home">
                <button className={estilos.button}>Enter</button>
                </Link>  
            </div> */}
      <section className="hero is-link is-fullheight">
        <div className="hero-body">
          <div className="">
            <p className="title">Fullheight hero</p>
            <p className="subtitle">
              <Link to={"/home"}>Ir al home</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
