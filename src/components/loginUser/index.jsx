import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  addUsers,
  getUserByEmail,
  getUsers,
  login,
  loginGoogle,
} from "../../redux/actions/actions";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import styles from "../createUser/createUser.module.css";
import axios from "axios";
//require("dotenv").config();

//const { GOOGLE_API } = process.env;

const GOOGLE_API =
  "327874418838-9lum1l34s28h1d2v5i5j0mc9oe9evl1h.apps.googleusercontent.com";

function Validate(input) {
  let errors = {};

  if (!input.email.includes("@") && !input.email.includes(".")) {
    errors.email = "email must be an email";
  } else if (input.email.length < 6 && input.email.length > 30) {
    errors.email =
      "Email should be at least 6 characters and below 30 characters";
  }

  if (
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(
      input.password
    )
  ) {
    errors.password = "password invalid";
  } else if (input.password.length < 6) {
    errors.password = "password should at least have 6 characters";
  }
  return errors;
}

const LoginUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userMail = useSelector((state) => state.userSession);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(el) {
    setInput({
      ...input,
      [el.target.name]: el.target.value,
    });
    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
    console.log(errors);
  }

  async function handleSubmit(el) {
    try {
      el.preventDefault();
      setErrors(
        Validate({
          ...input,
          [el.target.name]: el.target.value,
        })
      );
      if (Object.values(errors).length === 0) {
        dispatch(getUserByEmail(input.email));
        const userTryLogin = {
          email: input.email,
          password: input.password,
        };

        const validEmail = await axios.get(
              `http://localhost:3001/userEmail?email=${input.email}`
            );

        if (validEmail.data.length !== 0) {
          dispatch(login(userTryLogin));

          alert("User logged in successfully");

          window.localStorage.setItem(
            "userSession",
            JSON.stringify(input.email)
          );

          setInput({
            email: "",
            password: "",
          });
          history.push("/");
        } else{
          alert("User not found")
          history.push("/");
        }
      } else {
        alert("complete login please");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.page}>
      <Link to={"/"}>
        <button>Volver</button>
      </Link>
      <div>
        <form onSubmit={(el) => handleSubmit(el)}>
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="text"
              value={input.email}
              name={"email"}
              onChange={(el) => handleChange(el)}
            />
            <br />
            {errors.email ? <label>{errors.email}</label> : null}
          </div>
          <div>
            <label htmlFor="">Password:</label>
            <input
              type="password"
              value={input.password}
              name={"password"}
              onChange={(el) => handleChange(el)}
            />
            <br />
            {errors.password ? <label>{errors.password}</label> : null}
          </div>
          <input className={styles.create} type="submit" value={"Login"} />
          <div>
            <Link to={"/users"}>
              <label>Or Create new account</label>
            </Link>
          </div>
          <div>
            <LoginSocialGoogle
              client_id={GOOGLE_API} // PROBAR SI ESTO ANDA ASI CON EL .ENV EN EL BACK Y LLAMANDOLO DESDE ACA DEL FRONT(respuesta: NO ANDA JAJ)
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                //console.log(provider);
                console.log(data);

                const createUserGoogle = {
                  name: data.name,
                  email: data.email,
                  password: data.sub,
                  //tokenGoogle: data.access_token,
                  //picture: data.picture
                };

                const loginUserGoogle = {
                  name: data.name,
                  email: data.email,
                  google: true,
                };

                dispatch(login(createUserGoogle));

                window.localStorage.setItem(
                  "userSession",
                  JSON.stringify(loginUserGoogle)
                );

                alert("User logged in successfully");

                history.push("/");
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
