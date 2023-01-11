import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../redux/actions/actions";
import "./userSettings.css";

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


const UserSettings = () => {
  const users = useSelector((state) => state.users) 
  const history =useHistory()
  const email = JSON.parse(window.localStorage.getItem("session"));
  const name = JSON.parse(window.localStorage.getItem("name"));

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(Validate({
      ...input,
      [event.target .name]: event.target.value,
    }))
  };
    
  const handleUpdateName = (event) => {
    event.preventDefault();

    // setErrors(Validate({
    //   ...input,
    //   [event.target.name]: event.target.value,
    // }))
    if( input.name!==""){
    dispatch(updateUser(users[0]._id, {name:input.name}));
    window.localStorage.setItem(
      "name",
      JSON.stringify(input.name)
    );
    alert("Name Updated");
    history.push("/")
  } else{
    alert("complete data please")
   }
  };
  const handleUpdateEmail = (event) => {
    event.preventDefault();

    // setErrors(Validate({
    //   ...input,
    //   [event.target.name]: event.target.value,
    // }))
    if( input.email !== ""){
    dispatch(updateUser(users[0]._id, {email:input.email}));
    window.localStorage.setItem(
      "session",
      JSON.stringify(input.email)
    );
    alert("Email Updated");
    history.push("/")
  }else{
    alert("complete data please")
  }
  };
  const handleUpdatePassword = (event) => {
    event.preventDefault();

    // setErrors(Validate({
    //   ...input,
    //   [event.target.name]: event.target.value,
    // }))
    if( input.password!==""){
    dispatch(updateUser(users[0]._id, {password:input.password}));
    alert("Password Updated");
    setInput({
      password:""
    })
    history.push("/")
  }else{
    alert("complete data please")
  }
  };

  return (
    <div className="userSettings container-sm shadow p-3 mb-4 mt-4 bg-body rounded">
      <h1 className="pt-4 fs-3 mb-2 pb-2 text-md-start border-bottom border-muted"><i className="bi bi-sliders fs-4"></i>  Settings</h1>
      <div>
        <h3 className="fs-5 mt-4 fw-semibold text-start">Update User Name</h3>
        <form className="form-control mb-4" onSubmit={(e) => handleUpdateName(e)}>
          <div>
            <label className="mb-2" htmlFor="">New Name:</label>
            <input
            className="form-control mb-2"
              type="text"
              value={input.name}
              name="name"
              placeholder={name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name ? <label>{errors.name}</label> : null}
          </div>
            <input className="actividad text-center fs-6 pe-2 ps-2 rounded-pill border border-1 shadow-sm p-1 bg-body-tertiary rounded " type="submit" value={"Update"}></input>
          </form>
          <h3 className="fs-5 mt-4 fw-semibold text-start">Update Email</h3>
          <form className="form-control mb-4" onSubmit={(e => handleUpdateEmail(e))}>
          <div>
            <label htmlFor="">New Email:</label>
            <input
              className="form-control mb-2" 
              type="text"
              value={input.email}
              name="email"
              placeholder={email}
              onChange={(e) => handleChange(e)}
            />
            {errors.email ? <label>{errors.email}</label> : null}
          </div>
          <input className="actividad text-center fs-6 pe-2 ps-2 rounded-pill border border-1 shadow-sm p-1 bg-body-tertiary rounded " type="submit" value={"Update"}></input>
        </form>
      </div>
      <div>
        <h3 className="fs-5 mt-4 fw-semibold text-start">Update Password</h3>
        <form className="form-control mb-2" onSubmit={(e)=>handleUpdatePassword(e)} >
        <div>
            <label htmlFor="">New Password:</label>
            <input
              className="form-control mb-2"
              type="password"
              value={input.password}
              name="password"
              onChange={(e) => handleChange(e)}
            />
            {errors.password ? <label>{errors.password}</label> : null}

          </div>
        {/* <input className="actividad" type="submit" value={"Update"}></input> */}
        <div>
          <form className="" onSubmit={(e)=>handleUpdatePassword(e)} >
          <div>
              <label htmlFor="">Repeat Password:</label>
              <input
                className="form-control mb-2"
                type="password"
                value={input.password2}
                name="password2"
                onChange={(e) => handleChange(e)}
              />
              {errors.password ? <label>{errors.password}</label> : null}

            </div>
            {input.password === input.password2 ?<input className="actividad text-center fs-6 pe-2 ps-2 rounded-pill border border-1 shadow-sm   p-1 bg-body-tertiary rounded" type="submit" value={"Update"}></input>:"password invalid"}
          {/* <input className="actividad" type="submit" value={"Update"}></input> */}
          </form>
        </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
