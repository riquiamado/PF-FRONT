import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/actions";
import "./userSettings.css";

const UserSettings = () => {
  const userSessionLocal = useSelector((state) => state.session);
  const { user } = userSessionLocal;

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    email: "",
    passwordHash: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser(user._id, input));
    alert("Updated");
    setInput({
      name: "",
      email: "",
      passwordHash: "",
    });
  };

  return (
    <div className="userSettings">
      <h1>Settings</h1>
      <div>
        <h3>Update User Name</h3>
        <form onSubmit={(e) => handleUpdate(e)}>
          <div>
            <label htmlFor="">New Name:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            <input className="actividad" type="submit" value={"Update"}></input>
          </div>
          <h3>Update Email</h3>
          <div>
            <label htmlFor="">New Email:</label>
            <input
              type="text"
              value={input.email}
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <input className="actividad" type="submit" value={"Update"}></input>
          </div>
          <h3>Update Password</h3>
          <div>
            <label htmlFor="">New Password:</label>
            <input
              type="text"
              value={input.passwordHash}
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <input className="actividad" type="submit" value={"Update"}></input>
          </div>
        </form>
        <input className="actividad" type="submit" value={"Update"}></input>
      </div>
    </div>
  );
};

export default UserSettings;
