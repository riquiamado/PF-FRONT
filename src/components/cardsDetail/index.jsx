
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
import { clean, getServicesDetails, deleteUser } from '../../redux/actions/actions'
import { addToCart } from '../../redux/actions/actions';
import { useAuth0 } from "@auth0/auth0-react";

const CardDetails = () => {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)

    const history = useHistory()
   


    const { _id } = useParams()
    
   


    const handleAddToCart = () => {
        const data = {id: _id,email:user.email}
       dispatch(addToCart(data))
    // console.log(data)
      history.push("/cart")
   
    }
     
    useEffect(() => {
        dispatch(getServicesDetails(_id))
        return dispatch(clean())
    }, [dispatch, _id])

    return details && details._id ? (
        <div>
            <Link to={"/"}>
                <button>Volver</button>
            </Link>
            
            <div>
                <div>
                    <img src={details.image.secure_url} alt={details.image.secure_url} />
                    
                    <h1>{details.name}</h1>
                    <label htmlFor="">Description</label>
                    <h3>{details.description}</h3>
                    <label htmlFor="">Reviews</label>
                    <h3>{details.reviews}</h3>
                    <label htmlFor="">Rating</label>
                    <h3>{details.rating}</h3>
                </div>
                <div>

                    <h1>User Provider</h1>
                   
                    <div >
                        <label htmlFor="">Name</label>
                        <h3>{details.user.name}</h3>
                        <label htmlFor="">Mail</label>
                        <h3>{details.user.email}</h3>

                    </div>

                    <div className="delete-container">
                       

                    {isAuthenticated && <button  onClick={()=> handleAddToCart()}>cart</button> }
                    
                    {/* <div className="delete-container">
                        <button className='delete-btn' 

                                onClick={() => handleDelete()} >Delete User</button>
                    </div> */}
                </div>
            </div>

      </div>
    
  ) : (
    <h1>Loading...</h1>
  );
};

export default CardDetails;

 // const handleDelete = () => {
    //     dispatch(deleteUser(_id))
    //     alert("User Deleted");
    // }