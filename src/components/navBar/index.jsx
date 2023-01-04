import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar";
import { Link, useHistory } from "react-router-dom";
import { getServices, login } from "../../redux/actions/actions";
import LoginLocal from "../login";
import "./navBar.css";

function NavBar() {
  const userSessionLocal = useSelector((state) => state.userSession);
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    let loggedUserJSON = window.localStorage.getItem("userSession");
    if (loggedUserJSON) {
      let parsed = JSON.parse(loggedUserJSON);
       let user = {
        email: parsed,
      };
      if (parsed.google) {
        user = {
          email: parsed.email,
        };
      }
      setUser(user);
      dispatch(login(user));
    } 
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getServices());
    history.push("/");
  };

  return (
    <nav className="navbar shadow-sm">
      <div
        class="container-fluid"
        className="logo"
        onClick={() => handleClick()}
      >
        <img
          className="img"
          src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1672693337/pruebas/logo_x83pht.png"
        />
        <h4 id="csdcs">Freelance Workers</h4>
      </div>
      <SearchBar theText={"Search"} />
      <div className="btns">
        <Link to={"/checkLogin"}>
          <button className="Btn">Create Services</button>
        </Link>
        <Link to={"/dashboard"}>
          {!(Object.values(userSessionLocal).length === 0) ? (
            <button className="Btn">Dash board</button>
          ) : (
            <span></span>
          )}
        </Link>
      </div>
      {Object.values(userSessionLocal).length === 0 ? (
        <LoginLocal />
      ) : (
        <Link to="/profile">
          <button>
            {userSessionLocal.user
              ? userSessionLocal.user.name
              : userSessionLocal.name}
          </button>
        </Link>
      )}
    </nav>
  );
}

export default NavBar;
