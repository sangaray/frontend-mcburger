import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { Button, Box, Text, Image } from "@chakra-ui/react";
import Footer from '../Footer/Footer';
//footer

export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <Box textAlign="center" mt="50px" display="grid">
        <Text fontWeight="bold" fontSize="4rem" >
          About Us
        </Text>
      </Box>
      <Box display="grid" justifyContent="center" mt="10px"   >
        <Image
          w="80%" marginLeft={"10%"}
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672087651/McBurgerExtras/frente_blanco_y_negro_n7worh.jpg"
        />
      </Box>
      <Box display="grid" justifyContent="center" marginBottom={"-20"}>
        <Box textAlign="center" w="1000px" mt="100px" mb="100px" >
          <Text fontWeight="bold" fontSize="2rem" marginTop={"-60px"}>
            Our story starts with one dream.
          </Text>

          <Text>
            Back in 2020 in the middle of a global pandemic, a group of friends
            come up with the idea of opening a small hamburger restaurant that
            can satisfy the customer's appetite without leaving their own home.
            They were able to carry out this national success bringing to the
            doors of every home the best quality burgers, thus becoming the
            largest chain of fast food restaurants, with more than 65 locations
            in more than 65 cities around the country.
          </Text>
        </Box>
      </Box>
      <Box className="container-about" flexWrap={'wrap'} >
        <Box
          className="access1"
          display="grid"  grid-template-columns= "repeat(auto-fill, minmax(250px, 400px))"
          justifyContent="center"
          alignItems="center"
          grid-gap='2em'
          margin-bottom='2em'
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Image
              objectFit="cover"
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672150894/McBurgerExtras/foto_restaurante_ip7dtt.jpg"
              width={500}
              marginBottom={-30}
            />
            <Box w="750px" textAlign="center">
              <Text mt="50px" fontSize="1.8rem" fontWeight="bold">
                Our History
              </Text>

              <Text mt="20px">
                See how far we’ve come and how we got to now.
              </Text>
            </Box>

            <Box mt="20px">
              <Link to="/history">
                <Button colorScheme="yellow" marginBottom={"30px"}>Learn More</Button>
              </Link>
            </Box>
          </Box>
          <Box
            className="access2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Image
              mb="10px"
              objectFit="cover"
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672150894/McBurgerExtras/fondo_negro_con_logo_cuadrado_gmhz9r.jpg"
              width={500}
            />
            <Box w="750px" textAlign="center" >
              <Text mt="20px" fontSize="1.8rem" fontWeight="bold">
                Leadership Team
              </Text>

              <Text mt="20px">
                We wouldn’t be here today without our leaders.
              </Text>
            </Box>
            <Box mt="20px">
              <Link to="/team">
                <Button colorScheme="yellow" marginBottom={"30px"}>Learn More</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box text-align='center'>
        <Box 
            display= 'grid'
            grid-template-columns= "repeat(auto-fill, minmax(250px, 400px))"
            align-items= 'center'
            justify-items='center'
            grid-gap='2em'
            margin-bottom='2em'>            
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column">
            <Image
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672150894/McBurgerExtras/solidaridad2_yer8wf.jpg"
              width={500}
               marginBottom={2} 
            />

            <Text mt="20px" fontSize="1.8rem" fontWeight="bold">Values In Action</Text>
            <Text mt="20px">See the steps we take to be a good community leader.</Text>

            <Box>
              <Link to="/values">
                <Button colorScheme="yellow" mt="70px" marginTop={"5"}>Learn More</Button>
              </Link>
            </Box>
          </Box>

          <Box
            className="access1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column">
            <Image mt="20px"
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672150894/McBurgerExtras/quality_hjc0mx.jpg"
              width={500}
               marginTop={"8"}  
            />

            <Text mt="20px" fontSize="1.8rem" fontWeight="bold">The Roots of Quality</Text>

            <Text mt="20px">
              See our passion for ingredients quality.
            </Text>

            <Box>
              <Link to="/quality">
                <Button colorScheme="yellow" mt="30px" marginBottom={"30px"}>Learn More</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer mt={"100px"}/>
    </div>
  );
}
