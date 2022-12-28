import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import News from "./components/News/News";
import Cart from "./components/Cart/Cart";
import Locations from "./components/Locations/Locations";
import Delivery from "./components/Delivery/Delivery";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import Details from "./components/Details/Details";
import AfterPayment from "./components/AfterPayment/AfterPayment";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/selectMenu" component={SelectMenu} />
      <Route exact path="/news" component={News} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/delivery" component={Delivery} />
      <Route exact path="/product/:id" component={Details} />
      <Route exact path="/Cart" component={Cart} />
      <Route exact path="/payment" component={AfterPayment} />
    </BrowserRouter>
  );
}

export default App;
