import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import {
  clean,
  getServicesDetails,
  deleteUser,
} from "../../redux/actions/actions";
import { addToCart, login } from "../../redux/actions/actions";
import "./cardDetail.css";

import Cart from "../carrito";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import toast, { Toaster } from "react-hot-toast";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const CardDetails = () => {
  //const { user, isAuthenticated } = useAuth0();
  const loggedUser = window.localStorage.getItem("session");
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const userSessionLocal = useSelector((state) => state.session);

  const history = useHistory();
  const { _id } = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToCart = () => {
    const data = { id: _id, email: userSessionLocal };
    dispatch(addToCart(details));
    toast.success("Service has been added to the cart");
    // const data = { id: _id, email: user.email }  //nota: sera mejor bajar los datos en el cart ??
    // dispatch(addToCart(details))   //enviamos el servicio seleccinado a cart

    //history.push("/cart")
    // console.log(data)
    // history.push("/cart")
  };

  useEffect(() => {
    dispatch(getServicesDetails(_id));
    dispatch(login(loggedUser));
    return dispatch(clean());
  }, [dispatch, _id]);

  return details && details._id ? (
    <>
      <div className="container-sm mt-2 shadow p-3 mb-4 bg-body rounded">
        <div className="main row">
          <div className="row justify-content-around">
            <div className="col-sm-12 col-md-6">
              <h1 className="h1 pb-2 mb-4 fw-semibold text-dark border-bottom border-muted">
                {details.name.charAt(0).toUpperCase() + details.name.slice(1)}
              </h1>
              <label className="text-muted mb-2" htmlFor="">
                <i className="bi bi-card-text"> Description</i>
              </label>
              <h3 className="lh-lg fs-3 border mx-80 ps-2">
                {details.description.charAt(0).toUpperCase() +
                  details.description.slice(1)}
              </h3>
            </div>
            <div className="col text-center">
              <img
                className="img-fluid shadow mb-5 rounded d-block mx-100 h-100 ms-4 align-middle"
                src={details.image.secure_url}
                alt={details.image.secure_url}
              />
            </div>
          </div>

              <p className="fs-1 fw-bolder mt-3 text-warning">{`Price: $${details.price}`}</p>
          <div className="container overflow-hidden text-center">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3 border bg-light">

                  <label htmlFor="">Reviews</label>
                  <h3>{details.reviews}</h3>
                </div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">
                  <label htmlFor="">Rating</label>
                  <h3>{details.rating}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-sm shadow  p-3 mb-4 bg-body rounded">
        <h1 className="fs-2 fw-semibold pb-2 border-bottom border-muted">User Provider</h1>
        <div>
          <label className="text-muted mb-2" htmlFor="">
          <i className="bi bi-person-circle"> Name</i>

          </label>
          <h3 className="text-capitalize fw-normal">{details.user.name}</h3>
          <label className="text-muted mb-2" htmlFor="">
            <i className="bi bi-envelope-at"> Mail</i>
          </label>
          <h3>{details.user.email}</h3>
        </div>

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
      <div class="container-sm shadow p-3 mb-3 bg-body rounded text-center">
        <p class="text-center text-uppercase fs-2 fw-semibold font-monospace pb-2 mb-4 border-bottom border-muted">
          Do you need this service?
        </p>
        <button
          class="btn btn-lg btn-primary me-2"
          onClick={() => handleAddToCart()}
        >
          Add to Cart
        </button>


        </div>
          <div className="container-sm shadow p-3 mb-3 bg-body rounded text-center">
            <p className="text-center text-uppercase fs-2 fw-semibold font-monospace pb-2 mb-4 border-bottom border-muted">Do you need this service?</p>
            <button
              className="btn btn-lg btn-primary me-2"
              onClick={() => handleAddToCart()}
            >
              Add to Cart
            </button>
            
            <button className="btn btn-lg btn-primary" onClick={handleShow}>
              View Cart
            </button>
            
          </div>
      <div className="container-sm shadow p-3 mb-5 bg-body rounded">
        <div className="d-grid gap-8 mt-1 col-2 mx-auto text-center">

          <Link to={"/"}>
            <button
              id="buttt"
              className="btn btn-lg btn-danger border border-0 text-nowrap"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  ) : (
    <div className="d-flex justify-content-center">
      <div className="spinner-border  text-primary m-5 w-5 h-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default CardDetails;
