import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import News from "./components/News/News";
import Locations from "./components/Locations/Locations";
import Delivery from "./components/Delivery/Delivery";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import Details from "./components/Details/Details";
import { useDispatch } from "react-redux";
import { getAllIngredients, getAllProducts } from "./actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllIngredients());
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
    </BrowserRouter>
  );
}

export default App;
