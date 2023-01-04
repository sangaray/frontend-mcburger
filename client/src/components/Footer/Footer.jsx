import React, { useState }  from "react";
import { Link, useHistory } from "react-router-dom";
import emailJs from "@emailjs/browser";

import {
  Box,
  Image,
  Text,
  Button,
  Divider,
  IconButton,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";
import BurgerLogo from "./BurgerLogo.png";


function validate(input) {
  let errors = {};

  if (!input.user_name)
    errors.user_name = "Name is required";
  if (!input.user_email) {
    errors.user_email = "Email is required";
  }
  if (!input.user_message) {
    errors.user_message = "Comment  is required";
  }

  return errors;
}

export default function Footer(res) {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
   user_name: "",
   user_email:"",
   user_message:"",
  });
  const sendMail = (e) => {
    e.preventDefault();
    emailJs.sendForm("service_058m2cm", "template_dyl8zbt", e.target, "vETG-qCF-4RcUEbsU")
   .then(response => console.log(response))
   .catch(error => console.log(error));
   alert("comment sent successfully");
   setInput({
    user_name: "",
    user_email:"",
    user_message:"",
   });
   history.push("/");
  }
  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  return (
    <Box h="440px" w="auto" backgroundColor="#1b1b1b">
      <Box display="flex">
        <Image h="120px" w="200px" src={BurgerLogo} alt="." />
        <Text fontSize="1.8rem" mt="40px" fontWeight="bold" color="white">
          McBurger
        </Text>

        <Box ml="1350px"></Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="20px">
        <Box w="33.3%" flexDirection="column" ml="70px" mt="0px">
          <Text fontWeight="bold" fontSize="20px" color="white" mb="30px">
            Links
          </Text>
          <Link to="/">
          <Text mb="15px" color="white">
            Home
          </Text>
          </Link>
          <Link to="/selectMenu">
          <Text mb="15px" color="white">
            Menu
          </Text>
          </Link>
          <Link to="news">
          <Text mb="15px" color="white">
            News
          </Text>
          </Link>
          <Link to="about">
          <Text color="white">About Us</Text>
          </Link>
        </Box>
        <Box w="33.3%" textAlign="center" marginTop={"-30px"}>
          <Text fontWeight="bold" fontSize="20px" color="white" mb="10px" marginLeft={"-89"} marginBottom={"10px"}>
            Contact us
          </Text>
         
        
          <form onSubmit={sendMail}>
          <Input backgroundColor="white" mb="10px" placeholder="Name" marginLeft={"-80px"}
           type="text" 
           value={input.user_name} 
           name="user_name" 
           onChange={(e) => handleInputChange(e)} />
          {errors.user_name && <Text fontSize="11px"color="red">{errors.user_name}</Text>}

          <Input backgroundColor="white" mb="10px" placeholder="E-Mail" marginLeft={"-80px"} 
          type="email" 
          value={input.user_email}  
          name="user_email"  
          onChange={(e) => handleInputChange(e)}/>
          {errors.user_email && <Text fontSize="11px" color="red">{errors.user_email}</Text>}

          <Textarea backgroundColor="white" placeholder="Comments... " marginLeft={"-80px"} 
          type="text" 
          value={input.user_message} 
          name="user_message"
          onChange={(e) => handleInputChange(e)} />
          {errors.user_message && <Text fontSize="11px" color="red">{errors.user_message}</Text>}
          {errors.user_name ||
            errors.user_email ||
            errors.user_message ||
            input.user_name === "" ? (
          <Button mt={'10px'} marginRight={"75px"} select disabled type="submit">Submit</Button>
            ) : (
              <Button mt={'10px'} marginRight={"75px"} type="submit">
                Submit
              </Button>
            )}
          </form>
        
        </Box>
        <Box w="33.3%" textAlign="center" marginTop={"-28px"}>
          <Text color="white" fontWeight="bold" fontSize="20px">
            Social Media
          </Text>
          <Box mt="60px">
            <a
              href="https://www.facebook.com/profile.php?id=100088481538660&is_tour_dismissed=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                m="5px"
                colorScheme="facebook"
                icon={<FaFacebook />}
              />
            </a>
            <a
              href="https://www.instagram.com/mcburger_pf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="pink" icon={<FaInstagram />} />
            </a>
            <a
              href="https://twitter.com/McBurgerPF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="twitter" icon={<FaTwitter />} />
            </a>
            <a
              href="https://www.tiktok.com/@mcburgerpf?lang=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="gray" icon={<FaTiktok />} />
            </a>
            <a
              href="https://wa.link/8daidi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="gray" icon={<FaWhatsapp />} />
            </a>
            
          </Box>
        </Box>
      </Box>
      <Box mt="30px" backgroundColor="gray" h="40px" textAlign="center">
        <Text color="white">© All Rights Reserved 2022</Text>
      </Box>
    </Box>
  );
}
