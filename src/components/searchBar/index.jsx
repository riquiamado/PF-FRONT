import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [name, setName] = useState();
  dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
      return alert("Ingresa un nombre")
    } else{
      dispatch()
    }
  };
  return (
  <div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="" id="" placeholder="nombre"/>
      <input type="submit" />
    </form>
  </div>
  );
};

export default SearchBar;
