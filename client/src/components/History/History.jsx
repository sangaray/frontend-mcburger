import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { Button, Box, Text, Image, Textarea } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
//footer

export default function History() {
  return (
    <div>
      <NavBar />
      <Box textAlign="center" mt="50px">
        <Text fontWeight="bold" fontSize="4rem">
          Our History
        </Text>
      </Box>
      <Box  display={"flex"} justifyContent={"center"} mt="10px">
        <Image
          w={"1000px"}
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084662/McBurgerExtras/foto_restaurante_m71erw.jpg"
        />
      </Box>
      
      <Box display={"flex"} justifyContent="center" >
        <Box display={"flex"} justifyContent={"center"} mt="10px" mb={"40px"}>
          <Text justifyContent="center" textAlign={"center"} fontSize={"1.2rem"}>
            Every day, more than 1 million guests visit McBurger restaurants
            around the country. And they do so because our restaurants are
            known for serving high-quality, great-tasting, and affordable
            food. Founded in 2020, McBurger is the third largest fast food
            hamburger chain in the country. The original Home of the big
            McBurger, our commitment to premium ingredients, signature
            recipes, and family-friendly dining experiences is what has
            defined our brand 3 successful years.
          </Text>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box justifyContent={"center"} >
            <Text textAlign={"center"} fontSize={"2rem"} fontWeight={"bold"}>
              Origins
            </Text>
          </Box>
          <Box textAlign={"center"} mb={"40px"}>
            <Text textAlign={"center"} fontSize={"1.2rem"}>
              Every day, more than 1 million guests visit McBurger restaurants
              around the country. And they do so because our restaurants are
              known for serving high-quality, great-tasting, and affordable
              food. Founded in 2020, McBurger is the third largest fast food
              hamburger chain in the country. The original Home of the big
              McBurger, our commitment to premium ingredients, signature
              recipes, and family-friendly dining experiences is what has
              defined our brand 3 successful years.
            </Text>
          </Box>
        </Box>
        <Box>
          <Text textAlign={"center"} fontSize={"2rem"} fontWeight={"bold"}>
            A Unique Philosophy
          </Text>
        </Box>
        <Box textAlign={"center"} mb={"40px"}>
          <Text textAlign={"center"} fontSize={"1.2rem"}>
            The team wanted to build a restaurant system that would be famous
            for providing food of consistently high quality and uniform methods
            of preparation. They wanted to serve burgers, fries and beverages
            that tasted just the same in every restaurant around de country
            during the pandemic. To achieve this, they chose a unique path:
            persuading both franchisees and suppliers to buy into his vision,
            working not for McBurger but for themselves, together with McBurger.
            Their philosophy was based on the simple principle of a 3-legged
            stool: one leg was McBurger franchisees; the second, McBurger
            suppliers; and the third, McBurger employees. The stool was only as
            strong as the three legs that formed its foundation.
          </Text>
        </Box>
        <Box>
          <Text textAlign={"center"} fontSize={"2rem"} fontWeight={"bold"}>
            Hamburger University
          </Text>
        </Box>
        <Box textAlign={"center"} mb={"40px"}>
          <Text textAlign={"center"} fontSize={"1.2rem"}>
            In 2021, the team launched a training program, later called
            Hamburger University, at a new McBurger restaurant in Córdoba.
            There, franchisees were trained on the proper methods for running a
            successful McBurger restaurant. Hamburger U utilized a research and
            development laboratory in Córdoba to develop new cooking, freezing,
            storing and serving methods. Today, more than 60 franchisees,
            managers, and employees have graduated from the program.
          </Text>
        </Box>
      </Box>
      <Footer></Footer>
    </div >
  );
}
