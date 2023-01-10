import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { Button, Image, Box, Text } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
//footer

export default function Team() {
  return (
    <Box>
      <NavBar />
      <Box textAlign={"center"} mt="50px">
        <Text fontWeight="bold" fontSize="4rem">
          Leadership Team
        </Text>
      </Box>
      <Box display="grid" justifyContent="center" mt="10px">
        <Image
          w={"80%"} marginLeft={"10%"}
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672087214/McBurgerExtras/fondo_negro_con_logo_alargado_fj2wua.jpg"
        />
      </Box>
      <Box w={'100%'}>
        <Box mt={"50px"} display={'flex'}  justifyContent={'center'} flexWrap={'wrap'} >
          <Box
            w={"500px"}  
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Box>
                <Image
                  boxSize="400px"
                  src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672148840/McBurgerGrupo/agus_hawmlr.png"
                />
              </Box>
              <Box textAlign={"center"}>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>Agustina Monzón</Text>
              </Box>
            </Box>
            <Box mt={"20px"} mb="20px">
              <a
                href="https://www.linkedin.com/in/agustinamonzon/"
                target="_BLANK"
              >
                <Image
                  src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png"
                  alt="linkdin"
                  width={50}
                />
              </a>
            </Box>
          </Box>
          <Box
            w={"500px"}
            
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Box>
                <Image
                  boxSize="400px"
                  src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672148840/McBurgerGrupo/meli_ug1esq.png"
                />
              </Box>
              <Box textAlign={"center"}>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>Melina Veyrat Durbex</Text>
              </Box>
            </Box>
            <Box mt={"20px"} mb="20px">
              <a
                href="https://www.linkedin.com/in/melina-veyrat-durbex-b66b3b227/"
                target="_BLANK"
              >
                <Image
                  src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png"
                  alt="linkdin"
                  width={50}
                />
              </a>
            </Box>
          </Box>
          <Box
            w={"500px"}
            
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Box>
                <Image
                  boxSize="400px"
                  src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672148840/McBurgerGrupo/fran_ujokkm.png"
                />
              </Box>
              <Box textAlign={"center"}>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>Francisco Rodriguez</Text>
              </Box>
            </Box>
            <Box mt={"20px"} mb="20px">
              <a
                href="https://www.linkedin.com/in/francisco-rodriguez-793039248/"
                target="_BLANK"
              >
                <Image
                  src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png"
                  alt="linkdin"
                  width={50}
                />
              </a>
            </Box>
          </Box>
          <Box
            w={"500px"}
            
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Box>
                <Image
                  boxSize="400px"
                  src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672148840/McBurgerGrupo/lucas_xplyic.png"
                />
              </Box>
              <Box textAlign={"center"}>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>Lucas Iván Giménez</Text>
              </Box>
            </Box>
            <Box mt={"20px"} mb="20px">
              <a
                href="https://www.linkedin.com/in/lucas-gim%C3%A9nez-226b3122b "
                target="_BLANK"
              >
                <Image
                  src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png"
                  alt="linkdin"
                  width={50}
                />
              </a>
            </Box>
          </Box>
          <Box
            w={"500px"}
            
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Box>
                <Image
                  boxSize="400px"
                  src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672148840/McBurgerGrupo/enri_yzzl4n.png"
                />
              </Box>
              <Box textAlign={"center"}>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>Enrique Torres</Text>
              </Box>
            </Box>
            <Box mt={"20px"} mb="20px">
              <a
                href="https://www.linkedin.com/in/enritorres/"
                target="_BLANK"
              >
                <Image
                  src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png"
                  alt="linkdin"
                  width={50}
                />
              </a>
            </Box>
          </Box>
          <Box
            w={"500px"}
            
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Box>
                <Image
                  boxSize="400px"
                  src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672148840/McBurgerGrupo/cristian_mr1aoa.png"
                />
              </Box>
              <Box textAlign={"center"}>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>Cristian Ganon</Text>
              </Box>
            </Box>
            <Box mt={"20px"} mb="20px">
              <a
                href="https://www.linkedin.com/in/cristian-ganon-6b2242135/"
                target="_BLANK"
              >
                <Image
                  src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png"
                  alt="linkdin"
                  width={50}
                />
              </a>
            </Box>
          </Box>
          <Box
            w={"500px"}
            
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Box>
                <Image
                  boxSize="400px"
                  src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672148841/McBurgerGrupo/sandra_j3tdcn.png "
                />
              </Box>
              <Box textAlign={"center"}>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>Sandra Cecilia Garaycochea</Text>
              </Box>
            </Box>
            <Box mt={"20px"} mb="20px">
              <a
                href="https://www.linkedin.com/in/sandra-cecilia-garaycochea/"
                target="_BLANK"
              >
                <Image
                  src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png"
                  alt="linkdin"
                  width={50}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}
