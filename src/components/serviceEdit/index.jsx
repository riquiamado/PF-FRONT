import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import {clean, getServicesDetails, updateService, login, deleteService } from "../../redux/actions/actions";
import "./serviceEdit.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";

const ServiceEdit = () => {

  const loggedUser = window.localStorage.getItem("session");
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const { _id } = useParams();

  const [image, setImage] = useState(null)
  
  const [input, setInput] = useState("")

  const handleForm = e => {
    setInput({ 
      ...input,
      [e.target.name]: e.target.value }
    )
  }


  const handleDelete = id => {
    dispatch(deleteService(id));
    alert("Servicio eliminado");
};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateService(_id, input));
    setInput("");
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
                <label className="text-muted mb-2" htmlFor="">
                  <i className="bi bi-card-text"> Name</i>
                </label>
                <form>
                    <input 
                        type="text" 
                        value={input.name}
                        name="name"
                        placeholder={details.name}
                        onChange={e => handleForm(e)}
                    />
                    <button id="buttt" className="btn btn-lg btn-primary" onClick={() => handleSubmit()}>
                      Update
                    </button>
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
                        value={input.description}
                        name="description"
                        placeholder={details.description}
                        onChange={e => handleForm(e)}
                    />
                    <button id="buttt" className="btn btn-lg btn-primary" onClick={() => handleSubmit()}>
                      Update
                    </button>
                </form>
              </h3>
            </div>
            <div className="col text-center">
              <img
                className="img-fluid shadow mb-5 rounded d-block mx-100 h-100 ms-4 align-middle"
                src={details.image.secure_url}
                alt={details.image.secure_url}
              />
              {/* Image Form */}
              {/* <input 
                type="file"
                onChange={e => handleImage(e)}/> 
              <button id="buttt" className="btn btn-lg btn-primary" >
                Update
              </button> */}
            </div>
          </div>

            {/* Price Form */}
              <form>
                <input 
                    className="fs-1 fw-bolder mt-3 text-warning"
                    type="text"
                    value={input.price}
                    name="price"
                    placeholder={`Price: $${details.price}`}
                    onChange={e => handleForm(e)}
                />
                <button id="buttt" className="btn btn-lg btn-primary" onClick={() => handleSubmit()}>
                  Update
                </button>
              </form>
          <div className="container overflow-hidden text-center">
            <div className="row gx-5">
              <div className="col">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-sm shadow p-3 mb-5 bg-body rounded">
        <div className="d-grid gap-8 mt-1 col-2 mx-auto text-center">
          <Link to={"/"}>
            <button id="buttt" className="btn btn-lg btn-primary">
              Back
            </button>
          </Link>
        </div>
      </div> */}
      <div className="container-sm shadow p-3 mb-5 bg-body rounded">
        <div className="d-grid gap-8 mt-1 col-2 mx-auto text-center">
          <Link to={"/"}>
            <button
              id="buttt"
              className="btn btn-lg btn-danger border border-0 text-nowrap"
              onClick={() => handleDelete(_id)}
            >
              Delete
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