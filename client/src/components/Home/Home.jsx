import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "../carousel/carousel";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Button, Box, Text, Image, Textarea } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="main-container-home">
      <div>
        <NavBar />
      </div>
      <Box h={"500px"}>
        <Box textAlign={"left"} mt={"150px"} ml={"100px"}>
          <Text as={"b"} className="w-d-y">
            WHAT DO YOU WANT TO ORDER<br></br> TODAY?
          </Text>
        </Box>
        <Box ml={"100px"} mt={"50px"}>
          <Link to="/Selectmenu">
            <Button
              colorScheme={"red"}
              size={"md"}
              padding={"30px"}
              borderRadius={"10px"}
              fontSize={"30px"}
            >
              ORDER NOW&nbsp;&nbsp;&nbsp;
              <MdOutlineDeliveryDining size={"40"} />
            </Button>
          </Link>
        </Box>
      </Box>

      <div className="container-directo">
        <div className="acceso-directo11">
          <Image
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671118229/mcburger/Prod11_outidc.png"
            alt="Imagen"
          />
          <h4>Classic Burger</h4>
          <Link to="/product/11">
            <Button mt={"50px"} size={"lg"} fontSize={"20px"}>
              Order Now
            </Button>
          </Link>
        </div>

        <div className="acceso-directo22">
          <img
            src="https://www.freepnglogos.com/uploads/fries-png/premium-french-fries-photos-7.png"
            alt="Imagen"
          />
          <h4>French Fries</h4>
          <Link to="/product/52">
            <Button mt={"50px"} size={"lg"} fontSize={"20px"}>
              Order Now
            </Button>
          </Link>
        </div>

        <div className="acceso-directo33">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671118234/mcburger/Prod64_zhudyu.png"
            alt="Imagen"
          />
          <h4>Offers</h4>
          <Link to="/product/64">
            <Button mt={"50px"} size={"lg"} fontSize={"20px"}>
              Order Now
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Carousel />
      </div>

      <Footer />
    </div>
  );
}
