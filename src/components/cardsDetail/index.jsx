
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
import { clean, getServicesDetails, deleteUser } from '../../redux/actions/actions'
import { addToCart } from '../../redux/actions/actions';
import { useAuth0 } from "@auth0/auth0-react";
import "./cardDetail.css";

const CardDetails = () => {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)

    const history = useHistory()



    const { _id } = useParams()




    const handleAddToCart = () => {
        const data = { id: _id, email: user.email }
        dispatch(addToCart(data))
        // console.log(data)
        history.push("/cart")

    }

    useEffect(() => {
        dispatch(getServicesDetails(_id))
        return dispatch(clean())
    }, [dispatch, _id])

    return details && details._id ? (
        <>
        <div class="container-sm mt-2 shadow p-3 mb-4 bg-body rounded">
            <div class="main row">
                <div class="row justify-content-around">
                    <div class="col-sm-12 col-md-6">
                            <h1 class="h1 pb-2 mb-4 text-dark border-bottom border-muted">{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h1>
                            <label class="text-muted mb-2" htmlFor="">Description</label>
                            <h3 class="lh-lg fs-3 border mx-80 ps-2">{details.description.charAt(0).toUpperCase() + details.description.slice(1)}</h3>
                    </div>
                    <div class="col text-center">
                        <img class="img-fluid shadow mb-5 rounded d-block mx-100 h-100 ms-4 align-middle" src={details.image.secure_url} alt={details.image.secure_url} />
                    </div>
                </div>
                <div class="container overflow-hidden text-center">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border bg-light">
                                <label htmlFor="">Reviews</label>
                                <h3>{details.reviews}</h3>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">
                                <label htmlFor="">Rating</label>
                                <h3>{details.rating}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="container-sm shadow p-3 mb-4 bg-body rounded">
                <h1>User Provider</h1>
                <div >
                    <label class="text-muted mb-2" htmlFor="">Name</label>
                    <h3>{details.user.name}</h3>
                    <label class="text-muted mb-2" htmlFor="">Mail</label>
                    <h3>{details.user.email}</h3>
                </div>
                <div className="delete-container">
                    {isAuthenticated && <button onClick={() => handleAddToCart()}>cart</button>}
                </div>
                
            </div>
            <div class="container-sm shadow p-3 mb-5 bg-body rounded">
                <div class="d-grid gap-8 mt-1 col-2 mx-auto">
                    <Link to={"/"}>
                        <button id='buttt' class="btn btn-lg btn-danger border border-0 text-nowrap">Back</button>
                    </Link>
                </div>
            </div>
        </>
        ) : (
            <div class="d-flex justify-content-center">
                <div class="spinner-border  text-primary m-5 w-4 h-4" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        );
};

export default CardDetails;

