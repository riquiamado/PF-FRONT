import React, { useEffect } from 'react'

const UserAdmin = ({name,email}) => {
   
  return (
    <div>
        <div>
            <label htmlFor="">name</label>
            <h4>{name}</h4>
            <label htmlFor="">email</label>
            <h4>{email}</h4>
        </div>
    </div>
  )
}

export default UserAdmin