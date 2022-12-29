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
import Success from "./components/Succes/Succes";
import Failure from "./components/Failure/Failure";
import AboutUs from "./components/AboutUs/AboutUs";
import History from "./components/History/History";
import Team from "./components/Team/Team";
import Values from "./components/Values/Values";
import Quality from "./components/Quality/Quality";
import Favorites from "./components/Favorites/Favorites.jsx";
import Login from './components/Login/Login'
import FormUser from './components/FormUser/FormUser'
import FormUser2 from './components/FormUser/FormUser2'
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
      <Route exact path="/Cart/success" component={Success} />
      <Route exact path="/Cart/failure" component={Failure} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/history" component={History} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/values" component={Values} />
      <Route exact path="/quality" component={Quality} />
      <Route exact path="/favs" component={Favorites} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/formUser" component={FormUser} />
      <Route exact path="/formUser2" component={FormUser2} />
    </BrowserRouter>
  );
}

export default App;
