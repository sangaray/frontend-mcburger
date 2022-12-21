import React from "react";
import "./Cards.css"

<<<<<<< HEAD
export default function Cards({ name, image }) {
    return (
=======

export default function Cards({name, image}){
    return(
>>>>>>> 92922a6ad0be9e90aa03e86619adf7afd0c2e700
        <div>
            <div className="card-container">
                <img src={image} alt={name} />
                <h3>{name}</h3>
            </div>
        </div>
    )
}