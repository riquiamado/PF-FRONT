import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Validate(input) {
    let errors = {};
    if (input.title.length < 3 || input.title.length > 40) {
        errors.title = "Please at least 3 characters";
    }

    if (input.review.length < 30 || input.review.length > 500) {
        errors.review = "Please at least 30 characters";
    }

    return errors;
}

const FormRatingReview = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  
  const [input, setInput] = useState({
      rating: 1,
      title: "",
      review: "",
    });
    
    console.log(input)
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
    el.preventDefault();
    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
    if (Object.values(errors).length === 0) {
        //Aca iria logica de dispatchs etc.
        
        setInput({
          rating: 1,
          title: "",
          review: "",
        });
        history.push("/");
    } else{
        alert("Error")
    }
  }

  return (
    <div>
      <form onSubmit={(el) => handleSubmit(el)}>
        <label>Rating:</label>
        <br></br>
        <input type="range" value={input.rating} onChange={(el) => handleChange(el)} min="1" max="5" id="rating" name="rating" />
        <br></br>
        <label>Review Title:</label>
        <br></br>
        <input type="text" value={input.title} onChange={(el) => handleChange(el)} id="title" name="title" />
        {errors.title ? <label>{errors.title}</label> : null}
        <br></br>
        <label>Review:</label>
        <br></br>
        <textarea id="review" value={input.review} onChange={(el) => handleChange(el)} name="review"></textarea>
        {errors.review ? <label>{errors.review}</label> : null}
        <br></br>
        <input type="submit" value="Send Review" />
      </form>
    </div>
  );
};

export default FormRatingReview;