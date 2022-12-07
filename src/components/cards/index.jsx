import React from 'react'
 import { Link } from 'react-router-dom'

function Cards({id,name,description}) {
  return (
    <div>
       <div className='cards'>
        
        <Link to={`provider/${id}`}>
        <label htmlFor="">name</label>
            <h3>{name}</h3>
        </Link>
        <label htmlFor="">description</label>
        <h3>{description}</h3>
       
        
       </div>
    </div>
  )
}

export default Cards