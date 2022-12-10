import './App.css';
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import News from './components/News/News';
import Locations from './components/Locations/Locations';
import Delivery from './components/Delivery/Delivery';

function App() {
  return (
    <BrowserRouter>
       <Route exact path="/" component={Home} />
       <Route exact path="/menu" component={Menu} />
       <Route exact path="/news" component={News} />
       <Route exact path="/locations" component={Locations} />
       <Route exact path="/delivery" component={Delivery} />
     </BrowserRouter>
  );
}

export default App;
