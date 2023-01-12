import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import useLocalStorage from "../../Hooks/useLocalStorage";
import styles from "../createUser/createUser.module.css";
import axios from "axios";
import { getUserByEmail, login } from "../../redux/actions/actions";
import toast, { Toaster } from "react-hot-toast";

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

const errorNotification = (message) => {
  toast.error(message);
};

const LoginUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
  }

  const handleSubmit = async (el) => {
    el.preventDefault();
    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
    if (Object.values(errors).length === 0) {
      try {
        const response = await axios.post(`https://pf-back-production-b443.up.railway.app/login`, input);
        window.localStorage.setItem(
          "session",
          JSON.stringify(response.data.email)
        );
        window.localStorage.setItem(
          "user",
          JSON.stringify(response.data));
        window.localStorage.setItem(
          "name",
          JSON.stringify(response.data.name)
        );
        window.localStorage.setItem("admin", JSON.stringify(response.data.admin));
        dispatch(login(response.data.email));
        dispatch(getUserByEmail(response.data.email))
        setInput({
          email: "",
          password: "",
        });
        history.push("/");
      } catch (error) {
        errorNotification(error.response.data.error);
      }
    }
  };

  return (
    <div className={styles.page}>
      <Link to={"/"}>
        <button>Back</button>
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
              client_id={GOOGLE_API}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={async ({ provider, data }) => {
                const user = {
                  name: data.name,
                  email: data.email,
                  password: data.sub,
                };

                const response = await axios.post(`https://pf-back-production-b443.up.railway.app/login_google`, {
                  name: user.name,
                  email: user.email,
                });

                window.localStorage.setItem(
                  "session",
                  JSON.stringify(user.email)
                );
                window.localStorage.setItem("name", JSON.stringify(user.name));
                window.localStorage.setItem("user", JSON.stringify(response.data));
                window.localStorage.setItem("admin", JSON.stringify(response.data.admin));
                dispatch(login(user.email));
                dispatch(getUserByEmail(user.email))
                history.push("/");
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
