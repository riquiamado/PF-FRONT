import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getServicesByName } from "../../redux/actions/actions";
import "./search.css";

const SearchBar = (props) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    if (!name) {
      return alert("Ingresa un nombre");
    } else {
      dispatch(getServicesByName(name));
      setName("");
    }
  };

  return (
    <div className="search">
      <div className="field has-addons">
        {/* <p className="control has-icons-left is-expanded"> */}
        <input
          className="input"
          type="text"
          onChange={(el) => handleChange(el)}
          placeholder={props.theText}
        />
        {/* <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true"></i>
        </span> */}
        {/* </p> */}

        {/* <p className="control"> */}
          <button onClick={(el) => handleSubmit(el)} className="button">
            🔍
          </button>
        {/* </p> */}
      </div>
    </div>
  );
};

export default SearchBar;
