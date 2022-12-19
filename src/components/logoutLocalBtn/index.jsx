import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/actions";


const handleLogout = () => {
  window.localStorage.removeItem('userSession');
  dispatch(logout());
}

const LogoutLocalBtn = () => {

  const dispatch = useDispatch();

  return (
    <div>
        <button className="Btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutLocalBtn;