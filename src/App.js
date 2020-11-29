import React from 'react';

import Header from "./components/Header"

import Furniture from "./pages/Home"
import Cart from "./pages/Cart"
import Cabinets from "./pages/Cabinets"
import Sofas from "./pages/Sofas"
import Tables from "./pages/Tables"

import './App.css';

import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="container">
      
      <Header />
      <Switch>
        <Route exact path="/">
          <Furniture/>
        </Route>
        <Route path="/cabinets">
          <Cabinets />
        </Route>
        <Route path="/sofas">
          <Sofas />
        </Route>
        <Route path="/tables">
          <Tables />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
