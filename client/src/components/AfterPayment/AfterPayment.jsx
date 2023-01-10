import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { addOrderToDB } from "../../actions";
import NavBar from "../NavBar/NavBar";
import { Button, Box, Text, Image } from "@chakra-ui/react";
import Footer from '../Footer/Footer';
import "./AfterPayment.css";
import successImg from "./success.png";
import failureImg from "./failure.png"

function AfterPayment() {
  const [failure, setFailure] = useState(false);
  const { status, payment_id, merchant_order_id } = {
    status: new URLSearchParams(useLocation().search).get("status"),
  };

  useEffect(() => {
    const sendData = async () => {
      let data = {
        status,
        userId: "agusdlmonzon@gmail.com",
      };

      if (status !== "approved") {
        setFailure(true);
      }

      for (const item of [
        "shippingAddress",
        "billingAddress",
        "productId",
        "quantity",
        "totalPrice",
        "branchId",
        "msg",
      ]) {
        if (!localStorage.getItem(item)) {
          setFailure(true);
        }
        data[item] = localStorage.getItem(item) + "";
      }

      try {
        await addOrderToDB(data)();
      } catch (error) {
        alert(error.message);
      } finally {
        for (const item of [
          "shippingAddress",
          "billingAddress",
          "productId",
          "quantity",
          "totalPrice",
          "branchId",
          "msg",
        ]) {
          localStorage.removeItem(item);
        }
      }
    };

    sendData();
  }, [status, payment_id, merchant_order_id]);

  return (
    <Box>
      <NavBar />
      <Box className="paymentContainer"  
       display={"grid"} 
       justifyContent="center" 
       alignItems="center"
       marginTop={"2%"}
       marginBottom={"2%"}
       >
        {failure ? (
          <Box className="error">
            <Image w="350px" src={failureImg}/>
          </Box>
        ) : (
          <Box className="success">
            <Image w="350px" src={successImg}/>
          </Box>
        )}
        <Box className="buttonContainer"display={"grid"}  justifyContent="center"  >
         {/*  <Link to="/Cart">
            <Button>Back To Cart</Button>
          </Link> */}
          <Link to="/">
            <Button  size='sm' colorScheme='yellow' mt="30px" >Back Home</Button>
          </Link>
        </Box>
      </Box>
      <Footer mt={"100px"}/>
    </Box>
  );
}

export default AfterPayment;
