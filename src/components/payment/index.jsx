import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return(
        <div>
            <h1>Thanks for your purchase!</h1>
            <Link to={"/ratingForm"}><button>service qualification</button></Link>
        </div>
    )
}

export default Payment;