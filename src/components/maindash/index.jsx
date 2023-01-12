import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import UserAdmin from "../../dashboardCardAdmin/index.jsx";
import AdminService from "../../dashboardServiceAdmin/index.jsx";
import "./maindash.css";

const MainDash = () => {
  const users = useSelector((state) => state.users);
  const services = useSelector((state) => state.servicesDL);
  const dispatch = useDispatch();

  const handleEnable = async (id) => {
    await axios.put(
      `https://pf-back-production-b443.up.railway.app/services/${id}`,
      { deleteLogic: false }
    );
    toast.success("Service enabled!");
  };

  const handleDisable = async (id) => {
    axios.put(`https://pf-back-production-b443.up.railway.app/services/${id}`, {
      deleteLogic: true,
    });
    toast.success("Service disabled!");
  };

  return (
    <div className="container-fluid shadow p-3 mb-4 mt-4 bg-body rounded">
      <h1 className="shhhh pt-4 fs-3 mb-2 pb-2 text-md-start border-bottom border-dark">
        <i className="bi bi-stopwatch-fill fs-5"></i> This are all the services!
      </h1>
      {services?.map((serv, i) => {
        return (
          <div className="table-services" key={i}>
            <AdminService
              name={serv.name}
              description={serv.description}
              image={serv.image.secure_url}
              price={serv.price}
            />

            <div className="text-center">
              <button
                className="btn btn-primary me-2"
                onClick={() => handleEnable(serv._id)}
              >
                Enable
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleDisable(serv._id)}
              >
                Disable
              </button>
            </div>
          </div>
        );
      })}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default MainDash;
