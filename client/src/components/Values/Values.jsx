import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Button, Box, Text, Image, Textarea } from "@chakra-ui/react";
//footer

export default function Values() {
    return (
        <Box>
            <NavBar />
            <Text>Values In Action</Text>
            <Image src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672087214/McBurgerExtras/values_in_action_d0b6sp.jpg" />
            <Text display={"flex"} textAlign={"center"} fontSize={"2rem"}>Our journey towards good.</Text>
            <p>From the start, we've been committed to doing the right thing. And every day, all around the globe, we put people, processes and practices into place to make quality food, more responsible sourcing choices, a stronger community and a better planet. In accordance with our McBurger’s values, we’re here to make a difference, and here’s how.</p>
            <Box mb={"100px"}>

                <Box display={"flex"} m={"50px"} ml={"50px"} mr={"50px"}>
                    <Box ml={"50px"} mr={"50px"}>
                        <Box className='image' display={"flex"} justifyContent={"center"} >
                            <Image src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084663/McBurgerExtras/sustentabilidad_tmibiu.jpg" />
                        </Box>
                        <Box>
                            <Text textAlign={"center"} fontSize={"2rem"}>Sustainability Priorities</Text>
                            <Text textAlign={"center"} fontSize="1rem">We're making a difference in the communities we serve.</Text>
                        </Box>
                    </Box>

                    <Box ml={"50px"} mr={"50px"}>
                        <Box className='image' display={"flex"} justifyContent={"center"}>
                            <Image src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672086014/McBurgerExtras/nuestravariedad_mq0h6s.jpg" />
                        </Box>
                        <Box>
                            <Text textAlign={"center"} fontSize={"2rem"}>Good Food</Text>
                            <Text textAlign={"center"} fontSize="1rem">
                                Check out nutrition and ingredient information to providing responsibly sourced food.
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box className='image' display={"flex"} justifyContent={"center"}>
                    <Image h={"600px"}
                        justifyContent={"center"} src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672085499/McBurgerExtras/elequipo_jt8wbx.jpg" />
                </Box>
                <Box>
                    <Text textAlign={"center"} fontSize={"2rem"}>Our People & Communities</Text>
                    <Text textAlign={"center"} fontSize="1rem">Investing in people is a top priority. So is giving back to the community.</Text>
                </Box>
            </Box>
            <Footer mt={"100px"}/>
        </Box>)
}