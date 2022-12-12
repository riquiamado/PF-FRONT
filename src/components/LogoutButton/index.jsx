import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./logOutButton.css"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="Btn" onClick={() => logout({ returnTo: window.location.origin })}>
      Sign Out
    </button>
  );
};

export default LogoutButton;