import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addOrderToDB } from "../../actions";
import NavBar from "../NavBar/NavBar";
import "./AfterPayment.css";

function AfterPayment() {
  const [failure, setFailure] = useState(false);
  const { status, payment_id, merchant_order_id } = {
    status: new URLSearchParams(useLocation().search).get("status"),
  };

  useEffect(() => {
    const sendData = async () => {
      let data = {
        status,
        userId: "1234567",
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
        ]) {
          localStorage.removeItem(item);
        }
      }
    };

    sendData();
  }, [status, payment_id, merchant_order_id]);

  return (
    <div>
      <NavBar />
      <div className="paymentContainer">
        {failure ? (
          <div className="error">
            <h2>There was an issue with your payment! :(</h2>
          </div>
        ) : (
          <div className="success">
            <h1>Your payment was successful! :)</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default AfterPayment;
