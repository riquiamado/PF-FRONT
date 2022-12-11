import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import CreateServices from "../createServices"

export const checkLogin = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated? <CreateServices /> : <p>Please Log in</p>}
    </div>
  )
}
