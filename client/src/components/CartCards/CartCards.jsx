import React from "react";
import { Box, Image, Text, Button,  Divider } from '@chakra-ui/react';


export default function CartCards({name, image, price }){
    return(
        <div>
            <div className="card-container">
                <img src={image} alt={name}/>
                <Text as="b">{name}</Text>
                
               
            </div>
        </div>
    )
}