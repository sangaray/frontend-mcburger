import React from "react";
import "./Cards.css";
import { Box, Image, Text, Button, Divider } from "@chakra-ui/react";

export default function Cards({ name, image }) {
  return (
    <div>
      <div className="card-container">
        <img src={image} alt={name} />
        <Box m={9}>
          <Text as="b" fontSize="1xl" color="white">
            {name}
          </Text>
        </Box>
      </div>
    </div>
  );
}
