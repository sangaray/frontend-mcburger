import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/react";
//footer


export default function AboutUs() {
    return (
        <div>
        <NavBar/>
        <br/>
        <br/>
        <h1>About Us</h1>
        <br/>
        <br/>
        <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672087651/McBurgerExtras/frente_blanco_y_negro_n7worh.jpg"/>
        <br/>
        <br/>
        <h2>Our story starts with one dream.</h2>
        <br/>
        <p>Back in 2020 in the middle of a global pandemic, a group of friends come up with the idea of opening a small hamburger restaurant that can satisfy the customer's appetite without leaving their own home. They were able to carry out this national success bringing to the doors of every home the best quality burgers, thus becoming the largest chain of fast food restaurants, with more than 65 locations in more than 65 cities around the country.    
        </p>
        <br/>
        <br/>
        <br/>
        <div>
            <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084662/McBurgerExtras/foto_restaurante_m71erw.jpg" width={600}/>
        <br/>
            <h2>Our History</h2>
            <br/>
            <p>See how far we’ve come and how we got to now.</p>
            <br/>
        <div>
          <Link to="/history">
          <Button>Learn More</Button>
          </Link>
        </div>
        </div>
        <div>
        <br/>
            <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672087214/McBurgerExtras/fondo_negro_con_logo_cuadrado_ztzzrx.jpg" width={600}/>
            <br/>
            <h2>Leadership Team</h2>
            <br/>
            <p>We wouldn’t be here today without our leaders.</p>
            <br/>
        <div>
          <Link to="/team">
          <Button>Learn More</Button>
          </Link>
        </div>
        </div>
        <div>
        <br/>
            <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084663/McBurgerExtras/solidaridad2_mf1z2b.jpg" width={600}/>
            <br/>
            <h2>Values In Action</h2>
            <br/>
            <p>See the steps we take to be a good community leader.</p>
            <br/>
        <div>
          <Link to="/values">
          <Button>Learn More</Button>
          </Link>
        </div>
        </div>
        <div>
        <br/>
            <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672087214/McBurgerExtras/quality_fbqslc.jpg" width={600}/>
            <br/>
            <h2>The Roots of Quality</h2>
            <br/>
            <p>McBurger’s passion for quality meant that ingredients were tested, tasted and perfected to fit the operating system. The team shared their vision of McBurger’s future, selling his early suppliers on future volumes. They believed in them and the restaurant boomed.</p>
            <br/>
        <div>
          <Link to="/quality">
          <Button>Learn More</Button>
          </Link>
        </div>
        </div>
        </div>
    )
}