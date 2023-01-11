import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/actions";

const FormRatingReview = () => {
    // const loggedUser = window.localStorage.getItem("session")
    // const dispatch = useDispatch();

    // useEffect( () => {
    //     dispatch(login(loggedUser))
    // }, [])

    return (
        <div>
            <form>
                <label for="rating">Rating:</label><br></br>
                <input type="range" min="1" max="5" id="rating" name="rating"/><br></br>
                <label for="review-title">Review Title:</label><br></br>
                <input type="text" id="review-title" name="review-title"/><br></br>
                <label for="review-text">Review:</label><br></br>
                <textarea id="review-text" name="review-text"></textarea><br></br>
                <input type="submit" value="Submit"/>
            </form> 
        </div> 
    );
};

export default FormRatingReview;