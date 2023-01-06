import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/actions";

const LogoutLocalBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    window.localStorage.removeItem("userSession");
    dispatch(logout());
  };

  return (
    <div>
      <button className="Btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutLocalBtn;
