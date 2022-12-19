import React from "react";
import { Link } from "react-router-dom";

const LoginLocalBtn = () => {

  return (
    <div>
        <Link to={"/users"}>
            <button className="Btn">Login</button>
        </Link>
    </div>
  );
};

export default LoginLocalBtn;