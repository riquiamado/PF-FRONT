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
  const onChange = () => {
    dispatch(getServices());
    history.push("/checkLogin");
  };
  const onLoging = () => {
    dispatch(getServices());
    history.push("/Login");
  };

  return (
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a id="csdcs" onClick={() => handleClick()} class="navbar-brand">
          <img src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1672693337/pruebas/logo_x83pht.png" alt="FreelanceLogo" width="80" height="80"/>
          Freelance Workers
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav text-muted">
                <a onClick={() => handleClick()} class="nav-item nav-link active text-muted"></a>
            </div>
        </div>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav">
                <div class="container-sm mt-3">
                  <SearchBar></SearchBar>
                </div>
                <a onClick={() => onChange()} class="nav-item nav-link">Create Service</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Hola, </a>
                    <div class="dropdown-menu">
                        <a onClick={() => onDashboard()} class="dropdown-item">Dashboard</a>
                        <a href="#" class="dropdown-item">Logout</a>
                        {/* <a href="#" class="dropdown-item">Drafts</a> */}
                    </div>
                </div>
            </div>
            <div class="navbar-nav">
                <a onClick={() => onLoging()} class="nav-item nav-link fs-5"><b>Login</b></a>
            </div>
        </div>
        
    </div>
  </nav>
    );
  }
  
  {/* <nav className="navbar shadow-sm">
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
</nav> */}

  export default NavBar;
  
  