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
      <input
        className="input"
        type="text"
        onChange={(el) => handleChange(el)}
        placeholder={props.theText}
      />
      <button onClick={(el) => handleSubmit(el)} className="btn">
        <span class="material-symbols-outlined">
          search
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
