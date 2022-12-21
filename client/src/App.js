import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import News from "./components/News/News";
import Locations from "./components/Locations/Locations";
import Delivery from "./components/Delivery/Delivery";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import Details from "./components/Details/Details";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/selectMenu" element={<SelectMenu />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/locations" element={<Locations />} />
        <Route exact path="/delivery" element={<Delivery />} />
        <Route exact path="/product/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
