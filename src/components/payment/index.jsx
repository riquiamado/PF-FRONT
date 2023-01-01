import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return(
        <div>
            <h1>Thanks for your purchase!</h1>
            <Link to={"/"}>
                <button>Go back</button>
            </Link>
        </div>
    )
}

export default Payment;