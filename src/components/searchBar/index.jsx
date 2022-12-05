import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProviderByName } from "../../redux/actions/actions";


const SearchBar = () => {
  const [name, setName] = useState("");
   const dispatch = useDispatch();
  

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (el) => {
    el.preventDefault()
    if(!name){
      return alert("Ingresa un nombre")
    } else{
      dispatch(getProviderByName(name))
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
        
        <button type='submit' className='boton' onClick={((el) => handleSubmit(el))} >Buscar provider</button>
      </div>
    {/* <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="" id="" placeholder="nombre" value={name} onChange={(el)=>handleChange(el)}/>
      <input type="submit" />
    </form> */}
  </div>
  );
};

export default SearchBar;
