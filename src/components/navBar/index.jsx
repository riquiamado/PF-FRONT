import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar";
import { useHistory } from "react-router-dom";
import { cleanCart, getOrders, getServices, login } from "../../redux/actions/actions";
import "./navBar.css";
import Cart from "../carrito";
//import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
  const cartLS = JSON.parse(window.localStorage.getItem("cart"));
  const session = useSelector((state) => state.session);

  // const users = useSelector((state) => state.users);
  const name = JSON.parse(window.localStorage.getItem("name"));
  const user = JSON.parse(window.localStorage.getItem("user"));
  const admin = JSON.parse(window.localStorage.getItem("admin"));
  const dispatch = useDispatch();
  const history = useHistory();
  const CartContent = useSelector((state) => state.cart);
  const resolution = window.screen

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(resolution); 

  const handleClick = () => {
    dispatch(getServices());
    history.push("/");
  };
  const handleCreateService = () => {
    dispatch(getServices());
    history.push("/create");
  };
  const onLoging = () => {
    dispatch(getServices());
    history.push("/Login");
  };

  const onLogout = () => {
    window.localStorage.removeItem("session");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("cart");
    window.localStorage.removeItem("admin");

    //Hacer un dispach para limpiar el estado global del carrito 

    
    dispatch(login(null));
    dispatch(cleanCart())
    history.push("/");
  };

  const onDashboard = () => {
    dispatch(getOrders(user._id));
    history.push("/dashboard");
  };

  const handleAdminDashboard = () => {
    dispatch(getOrders(user?._id));
    history.push("/dashboardAdmin");
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a id="csdcs" onClick={() => handleClick()} className="navbar-brand">
          <img
            src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1672693337/pruebas/logo_x83pht.png"
            alt="FreelanceLogo"
            width="80"
            height="80"
          />
          Freelance Workers
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon">
            <i className="bi bi-list"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav text-muted">
            <a
              onClick={() => handleClick()}
              className="nav-item nav-link active text-muted"
            ></a>
          </div>
        </div>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav"
          >
            <div className="container-sm mt-3 text-center">
              <SearchBar style={{fontWeight:"bold"}}></SearchBar>
            </div>
            {
              resolution.width < 1024 ? (
              <a
                onClick={() => handleCreateService()}
                className="nav-item nav-link"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                Create Service
              </a>
              ) : (
                <a
                onClick={() => handleCreateService()}
                className="nav-item nav-link"
              >
                Create Service
              </a>
              )
            }
            {session && (
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  
                  Hello, <br />
                  {name.split(" ", 1)}
                </a>
                <div className="dropdown-menu" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
                  {admin === true 
                    ?
                      <a 
                      onClick={() => handleAdminDashboard()} 
                      className="dropdown-item"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarCollapse"
                      >
                        Dashboard
                      </a> 
                    :
                      <a 
                    onClick={() => onDashboard()} 
                    className="dropdown-item"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    >
                      {console.log("false")}
                      Dashboard
                    </a>
                }
                  
                </div>
              </div>
            )}
          </div>
          <div className="navbar-nav">
            { 
              resolution.width < 1024 ? (
                <a 
                  className="nav-item nav-link fs-5"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  {session ? (
                    <b onClick={() => onLogout()}>Logout</b>
                  ) : (
                    <b onClick={() => onLoging()}>Login</b>
                  )}
                </a>
              
              ) : (
                <a 
                  className="nav-item nav-link fs-5"
                >
                  {session ? (
                    <b onClick={() => onLogout()}>Logout</b>
                  ) : (
                    <b onClick={() => onLoging()}>Login</b>
                  )}
                </a>
              )
            }
          </div>
          <div className="cart">
            <div className="cart">
              {/* <i className="bi bi-cart4 fs-5"></i> */}
              <button className="bi bi-cart4 fs-5" onClick={handleShow}></button>
              <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{cartLS ? cartLS.length : 0}</span>
              <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <div className="delete-container" />

                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>My Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Cart />
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
