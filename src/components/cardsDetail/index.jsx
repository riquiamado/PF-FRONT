
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { clean, getServicesDetails, deleteUser } from '../../redux/actions/actions'


const CardDetails = () => {
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)
    console.log(details)
    const { _id } = useParams()

    const handleDelete = () => {
        dispatch(deleteUser(details.user.email))
        alert("User Deleted");
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
                    <label htmlFor="">reviews</label>
                    <h3>{details.reviews}</h3>
                    <label htmlFor="">rating</label>
                    <h3>{details.rating}</h3>
                </div>
                <div>

                    <h1>User Provider</h1>
                   
                    <div >
                        <label htmlFor="">name</label>
                        <h3>{details.user.name}</h3>
                        <label htmlFor="">email</label>
                        <h3>{details.user.email}</h3>

                    </div>
                    <div className="delete-container">
                        <button className='delete-btn' 
                                onClick={() => handleDelete()} >Delete User</button>
                    </div>
                </div>
            </div>

        {/* <div>
          <h1>User Provider</h1>
          <div>
            <label htmlFor="">name</label>
            <h3>{details.user.name}</h3>
            <label htmlFor="">email</label>
            <h3>{details.user.email}</h3>
          </div>
        </div> */}
      </div>
    
  ) : (
    <h1>Loading...</h1>
  );
};

export default CardDetails;
