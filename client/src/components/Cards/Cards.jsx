import React from "react";
import "./Cards.css"

export default function Cards({name, image, key}){
    return(
        <div>
            <div className="card-container">
                <img src={image} alt={key}/>
                <h3>{name}</h3>
            </div>
        </div>
    )
}