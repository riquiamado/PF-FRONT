import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserByEmail, deleteService, login, clean } from '../../redux/actions/actions';
import "./serviceDash.css"

const ServicesDash = () => {

    const users = useSelector(state => state.users);
    const email = JSON.parse(window.localStorage.getItem("session"));
    const dispatch = useDispatch()
    const handleDelete = id => {
        dispatch(deleteService(id))
        alert("Servicio eliminado")
    }

    

    let cont = 0;
    users?.map((e) => {
        cont = cont + e.services.length;
    });

    useEffect(() => {
        dispatch(getUserByEmail(email));
        dispatch(login(email))
        return dispatch(clean())
    },[dispatch])

    if (cont === 0) {
        return (
        <div className="rateSettings container-fluid shadow p-3 mb-4 mt-4 bg-body rounded">
            <h1 className="pt-4 fs-3 mb-2 pb-4 text-md-start border-bottom border-dark"><i className="bi bi-bookmark-heart-fill fs-4"></i> Recent Orders</h1>
            <div className="container-fluid text-center shadow p-3 mb-4 mt-4 rounded">
            <br />
            <h2 className="pt-4 pb-4 mb-4"><i className="bi bi-bookmark-x"></i><br /> You don't have services yet!</h2>
            </div>
        </div>
        );
        } else {
    return(
        <div className="rateSettings container-fluid shadow p-3 mb-4 mt-4 bg-body rounded">
            <h1 className='scsdcds pt-4 fs-3 mb-2 pb-4 text-md-start border-bottom border-dark'><i className="bi bi-bookmark-heart-fill fs-4"></i> These are your services!</h1>
            {users[0]?.services ? users[0]?.services.map((item, index) => {
                return(

                    <div className='service-cards container-fluid shadow p-3 mb-4 mt-4 rounded' key={index}>
                        <p className='cjdcnsjdnc me-2'>{index + 1}</p>
                        <div>
                            <p className="fw-semibold text-capitalize mb-2 pb-1 text-md-start border-bottom border-muted"><i className="bi bi-journal-bookmark-fill"></i> {item.name}</p>
                            <p className='text-muted'>{item.description.charAt(0).toUpperCase() + item.description.slice(1)}</p>
                            <div>
                                <Link to={`servicesEdit/${item._id}`} style={{textDecoration: 'none'}}>
                                    <p className='text-center fs-6 pe-2 ps-2 rounded-pill border border-1 shadow-sm p-1 bg-body-tertiary rounded'>Edit</p>
                                </Link>
                                {/* <button className='btn btn-outline-danger' onClick={() => handleDelete(item._id)}>Delete</button> */}
                            </div>
                        </div>
                            <img
                                className="images rounded-circle mb-1 shadow bg-body-tertiary"
                                src={item.image.secure_url}
                                alt="imagen"
                                height="100px"
                                width="100px"
                            />

                    </div>
                )
            }) : <h1></h1>
            }
        </div>  
    );
        }
}

export default ServicesDash;