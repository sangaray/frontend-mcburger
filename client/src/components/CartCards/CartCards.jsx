import React from "react";


export default function CartCards({name, image, price, quantity, description }){
    return(
        <div>
            <div className="card-container">
                <img src={image} alt={name}/>
                <h3>{name}</h3>
                <h2>{price}</h2>
                <h2>{quantity}</h2>
                <h2>{description}</h2>
            </div>
        </div>
    )
}