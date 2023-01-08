import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import {
  clean,
  getServicesDetails,
  deleteUser,
} from "../../redux/actions/actions";
import { addToCart, login } from "../../redux/actions/actions";
import "./serviceEdit.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";

const ServiceEdit = () => {
    const loggedUser = window.localStorage.getItem("session");
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const userSessionLocal = useSelector((state) => state.session);

  const history = useHistory();
  const { _id } = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {

  }

  const handleForm = () => {

  }

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
                {/* Name Form */}
                <form onSubmit={() => handleSubmit()}>
                    <input 
                        type="text" 
                        placeholder={details.name}
                    />
                </form>
              </h1>
              <label className="text-muted mb-2" htmlFor="">
                <i className="bi bi-card-text"> Description</i>
              </label>
              {/* Description Form */}
              <h3 className="lh-lg fs-3 border mx-80 ps-2">
                <form>
                    <input 
                        type="text"
                        placeholder={details.description}
                    />
                </form>
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

            {/* Price Form */}
              
              <form>
                {/* <p className="fs-1 fw-bolder mt-3 text-warning">{`Price: $${details.price}`}</p> */}
                <input 
                    className="fs-1 fw-bolder mt-3 text-warning"
                    type="text"
                    placeholder={`Price: $${details.price}`}
                />
              </form>
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
      
      <div className="container-sm shadow p-3 mb-5 bg-body rounded">
        <div className="d-grid gap-8 mt-1 col-2 mx-auto text-center">
          <Link to={"/dashboard"}>
            <button id="buttt" className="btn btn-lg btn-primary">
              Back
            </button>
          </Link>
        </div>
      </div>

    </>
  ) : (
    <div className="d-flex justify-content-center">
      <div className="spinner-border  text-primary m-5 w-5 h-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default ServiceEdit;