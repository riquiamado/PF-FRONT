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
      <Link to="/home" onClick={handleClick}>
        Home
      </Link>

      <SearchBar />
    </div>
  );
}

export default NavBar;
