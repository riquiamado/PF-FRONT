import React from "react";
import SearchBar from "../searchBar";
// import Footer from '../footer'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(allServices());
  };

  return (
    <div>
      <nav class="navbar navbar-expand-md bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-toggler">
            <a class="navbar-brand" href="#">
              <img src="images/logo.png" width="50" alt="Website logo" />
            </a>
            <ul class="navbar-nav d-flex justify-content-center align-items-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link to="/home" onClick={handleClick}>
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <SearchBar />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
