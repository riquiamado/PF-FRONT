import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getServicesByName } from "../../redux/actions/actions";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (el) => {

    el.preventDefault()
    if (!name) {
      return alert("Ingresa un nombre")
    } else {
      dispatch(getServicesByName(name))
      setName("")
    }

  };
  return (
    <div>
      <div >
        <input
          type="text"
          placeholder='Ingrese un name'
          value={name}
          onChange={(el => handleChange(el))}
          className='inputSearch'
        />

        <button type='submit' className='boton' onClick={((el) => handleSubmit(el))} >Buscar Servicio</button>
      </div>


    </div>
  );
};

export default SearchBar;
