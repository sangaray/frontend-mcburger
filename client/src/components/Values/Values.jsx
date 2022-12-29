import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/react";
//footer

export default function Values() {
    return (
        <div>
        <NavBar/>
        <br/>
        <br/>
        <h1>Values In Action</h1>
        <br/>
        <br/>
        <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672087214/McBurgerExtras/values_in_action_d0b6sp.jpg"/>
        <br/>
        <br/>
        <br/>
        <h2>Our journey towards good.</h2>
        <p>From the start, we've been committed to doing the right thing. And every day, all around the globe, we put people, processes and practices into place to make quality food, more responsible sourcing choices, a stronger community and a better planet. In accordance with our McBurger’s values, we’re here to make a difference, and here’s how.</p>
        <br/>
        <br/>
        <br/>
        <div className=''>
            <div className=''>
                <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084663/McBurgerExtras/sustentabilidad_tmibiu.jpg" />
                <br/>
                <h2>Sustainability Priorities</h2>
                <br/>
                <p>We’re making a difference in the communities we serve.</p>
            </div>
            <div className=''>
                <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672086014/McBurgerExtras/nuestravariedad_mq0h6s.jpg" />
                <br/>
                <h2>Good Food</h2>
                <br/>
                <p>Check out nutrition and ingredient information, as well as our commitment to providing responsibly sourced food.</p>
            </div>
            <div className=''>
                <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672085499/McBurgerExtras/elequipo_jt8wbx.jpg" />
                <br/>
                <h2>Our People & Communities</h2>
                <br/>
                <p>Investing in people is a top priority. So is giving back to the community.</p>
            </div>
            
        </div>
        </div>
    )
}