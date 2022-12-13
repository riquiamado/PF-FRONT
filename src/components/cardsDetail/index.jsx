
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { clean, getServicesDetails, deleteUser } from '../../redux/actions/actions'
import styles from './cardsDetail.module.css'

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
                <button className={styles.boton}>Volver</button>
            </Link>
            <div>
                <div>
                    <img className={styles.img} src={details.image.secure_url} alt={details.image.secure_url} />
                    
                    <h1 className={styles.servicio}>{details.name}</h1>
                    <label className={styles.nombre} htmlFor="">Description</label>
                    <h3 className={styles.texto}>{details.description}</h3>
                    <label className={styles.nombre} htmlFor="">Reviews</label>
                    <h3 className={styles.texto}>{details.reviews}</h3>
                    <label className={styles.nombre} htmlFor="">Rating</label>
                    <h3 className={styles.texto}>{details.rating}</h3>
                </div>
                <div>

                    <h1 className={styles.nombre}>User Provider</h1>
                   
                    <div >
                        <label className={styles.nombre} htmlFor="">Name</label>
                        <h3 className={styles.texto}>{details.user.name}</h3>
                        <label className={styles.nombre} htmlFor="">Mail</label>
                        <h3 className={styles.texto}>{details.user.email}</h3>

                    </div>
                    <div className="delete-container">
                        <button className={styles.botonUno} 
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
