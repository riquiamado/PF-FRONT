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

 console.log(email) 
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
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
    <div className="userSettings">
      <h1>Settings</h1>
      <div>
        <h3>Update User Name</h3>
        <form onSubmit={(e) => handleUpdateName(e)}>
          <div>
            <label htmlFor="">New Name:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder={name}
              onChange={(e) => handleChange(e)}
            />
            <br />
            {errors.name ? <label>{errors.name}</label> : null}

          </div>
            <input className="actividad" type="submit" value={"Update"}></input>
          </form>
          <form onSubmit={(e => handleUpdateEmail(e))}>
          <h3>Update Email</h3>
          <div>
            <label htmlFor="">New Email:</label>
            <input
              type="text"
              value={input.email}
              name="email"
            placeholder={email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            {errors.email ? <label>{errors.email}</label> : null}

          </div>
          <input className="actividad" type="submit" value={"Update"}></input>

        </form>
      </div>
      <div>
        <form onSubmit={(e)=>handleUpdatePassword(e)} >
        <h3>Update Password</h3>

        <div>
            
            <label htmlFor="">New Password:</label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <br />
            {errors.password ? <label>{errors.password}</label> : null}

          </div>
        <input className="actividad" type="submit" value={"Update"}></input>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
