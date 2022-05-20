import React from 'react';

import Header from "./components/Header"

import Furniture from "./pages/Home"
import Cart from "./pages/Cart"
// import Cabinets from "./pages/Cabinets"
// import Sofas from "./pages/Sofas"
import Tables from "./pages/Tables"

import './App.css';

import {Switch, Route} from "react-router-dom"

import RenderPropsLogic from './RenderPropsLogic';

function App() {
  return (
    <div className="container">
      
      <Header />
      <Switch>
        <Route exact path="/">
          <RenderPropsLogic render={(furniture, cartItems, addToCart, removeFromCart, emptyCart) => (
            <Furniture 
              furniture={furniture}
              cartItems={cartItems}
              addToCart={addToCart}           
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          )}/>
        </Route>
        <Route path="/cabinets">
        <RenderPropsLogic render={(furniture, cartItems, addToCart, removeFromCart, emptyCart) => (
            <Furniture 
              furniture={furniture}
              cartItems={cartItems}
              addToCart={addToCart}           
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          )}/>
        </Route>
        <Route path="/sofas">
        <RenderPropsLogic render={(furniture, cartItems, addToCart, removeFromCart, emptyCart) => (
            <Furniture 
              furniture={furniture}
              cartItems={cartItems}
              addToCart={addToCart}           
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          )}/>
        </Route>
        <Route path="/tables">
        <RenderPropsLogic render={(furniture, cartItems, addToCart, removeFromCart, emptyCart) => (
            <Furniture 
              furniture={furniture}
              cartItems={cartItems}
              addToCart={addToCart}           
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          )}/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
