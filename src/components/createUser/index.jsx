import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { addUsers, login } from "../../redux/actions/actions";
import styles from "./createUser.module.css";

function Validate(input) {
  let errors = {};
  if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
    errors.name = "name can not contain numbers or special characters";
  } else if (input.name.length < 3 || input.name.length > 40) {
    errors.name = "invalid name";
  }

  if (/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/.test(input.email)) {
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
  }  else if (input.password.length < 6){
    errors.password = "password should at least have 6 characters"
  }
  return errors;
}

const CreateUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
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

  function handleSubmit(el) {
    try {
      el.preventDefault();
      setErrors(
        Validate({
          ...input,
          [el.target.name]: el.target.value,
        })
      );
      if (Object.values(errors).length === 0) {

        dispatch(addUsers(input));

        const session = {
          name: input.name,
          email: input.email
        }

        window.localStorage.setItem(
          'name', JSON.stringify(session.name)
        )

        window.localStorage.setItem(
          'session', JSON.stringify(session.email)
        )
        dispatch(login(session.email));
        alert("User created");
        setInput({
          name: "",
          email: "",
          password: "",
        });
        history.push("/");
      } else {
        alert("complete login please ");
      }      
    } catch (error) {
      console.log(error)
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
            <label htmlFor="">Name:</label>
            <input
              type="text"
              value={input.name}
              name={"name"}
              onChange={(el) => handleChange(el)}
            />
            <br />
            {errors.name ? <label>{errors.name}</label> : null}
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="text"
              value={input.email}
              name="email"
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
              name="password"
              onChange={(el) => handleChange(el)}
            />
            <br />
            {errors.password ? <label>{errors.password}</label> : null}
          </div>
          <input
            className={styles.create}
            type="submit"
            value={"create user"}
          />
        <div>
          <Link to={'/login'}>
            <label>Already Registered? Click Here.</label>
          </Link>
        </div>
        </form>

      </div>
    </div>
  );
};

export default CreateUser;
