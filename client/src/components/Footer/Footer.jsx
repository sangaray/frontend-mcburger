import React from "react";
import { Box, Image, Text, Button,  Divider, IconButton, Input, Textarea } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import BurgerLogo from "./BurgerLogo.png"

export default function Footer(){
    return(
        <Box h="400px" w="auto" backgroundColor="black">
            <Box  display="flex" >
                <Image h="120px" w="200px" src={BurgerLogo} alt="."/>
                <Text  fontSize="1.8rem" mt="40px" fontWeight="bold"  color="white">McBurger</Text>
                <Box ml="1350px">
                     
                </Box>
                
                 
            </Box>
            <Box display="flex" justifyContent="space-between" mt="20px">
            <Box w="33.3%" flexDirection="column" ml="70px" mt="0px" >
                <Text fontWeight="bold" fontSize="20px" color="white" mb="30px">Links</Text>
                <Text mb="15px" color="white">Home</Text>
                <Text mb="15px" color="white">Menu</Text>
                <Text mb="15px" color="white">News</Text>
                <Text color="white">About Us</Text>
            </Box>
            <Box w="33.3%" textAlign="center">
                <Text fontWeight="bold" fontSize="20px" color="white" mb="10px">Contact us</Text>
                <Input backgroundColor="white" mb="10px" placeholder='Name'/>
                <Input backgroundColor="white" mb="10px" placeholder='E-Mail'/>
                <Textarea backgroundColor="white" placeholder="Comments... " />
            </Box>
            <Box w="33.3%"  textAlign="center">
                <Text color="white" fontWeight="bold" fontSize="20px">Social Media</Text>
                <Box mt="60px">
                    <IconButton m="5px" colorScheme='facebook'  icon={<FaFacebook />}/>
                    <IconButton m="5px" colorScheme='pink' icon={<FaInstagram />}/>
                    <IconButton m="5px" colorScheme='twitter' icon={<FaTwitter />}/>
                    <IconButton m="5px" colorScheme='gray' icon={<FaTiktok />}/>
                </Box>
            </Box>
            </Box>
            <Box mt="30px" backgroundColor="gray" h="40px" textAlign="center">
                <Text color="white">© All Rights Reserved 2022</Text>
            </Box>
        </Box>
    )
}