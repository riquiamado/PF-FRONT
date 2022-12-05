import React from 'react'
 import { Link } from 'react-router-dom'

function Cards({_id,name,email,service}) {
  return (
    <div>
       <div className='cards'>
        
        <Link to={`provider/${_id}`}>
        <label htmlFor="">name</label>
            <h3>{name}</h3>
        </Link>
        <label htmlFor="">email</label>
        <h3>{email}</h3>
        <label htmlFor="">service</label>
        <h3>{service}</h3>
        
       </div>
    </div>
  )
}

export default Cards