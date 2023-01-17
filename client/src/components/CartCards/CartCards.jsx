import React from "react";
import { Text, Button } from "@chakra-ui/react";
import "../Cart/Cart.css"

export default function CartCards({ name, image}) {
  return (
      <div className="image-card-carts">
        <img src={image} alt={name} />
      </div>
  );
}