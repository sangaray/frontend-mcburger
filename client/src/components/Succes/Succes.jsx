import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from "@chakra-ui/react";
//footer

export default function Success() {

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div>
      <NavBar/>
      <div className="">
        <div className="">
            <h2>Purchase successfully completed</h2>
            <h1>¡Thank you for choosing us!</h1>
            <p className="">you can continue to purchase</p>
            <div>
               <Link to="/Cart">
                <Button >Add a product</Button>
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


