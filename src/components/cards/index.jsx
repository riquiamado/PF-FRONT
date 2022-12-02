import React from 'react'
// import { Link } from 'react-router-dom'

function Cards({name,email,service}) {
  return (
    <div>
       <div className='cards'>
        
        <label htmlFor="">name</label>
            <h3>{name}</h3>
        {/* <Link to={`providers/${id}`}>
        </Link> */}
        <label htmlFor="">email</label>
        <h3>{email}</h3>
        <label htmlFor="">service</label>
        <h3>{service}</h3>
       </div>
    </div>
  )
}

export default Cards