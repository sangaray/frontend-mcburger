import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from "@chakra-ui/react";
//footer

export default function Failure() {

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div>
      <NavBar/>
      <div className="">
        <div className="">
            <h2>Purchase could not be completed</h2>
            <h1>¡We apologize for the inconvenience!</h1>
            <p className="">¿Would you like to retry the transaction? </p>
            
        <div>
        <Link to="/Cart">
          <Button>Back To Cart</Button>
        </Link> 
         
        </div>
            <p className="">Or continue navigating</p>
        <div>
        <Link to="/">
          <Button >Back Home</Button>
        </Link> 
        </div>
        </div>
      </div>
    </div>
  )
}
