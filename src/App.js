import React, {useContext} from 'react';

import Header from "./components/Header"

import Furniture from "./pages/Home"
import Cart from "./pages/Cart"
import Cabinets from "./pages/Cabinets"
import Sofas from "./pages/Sofas"
import Tables from "./pages/Tables"
import DetailedPage from "./pages/detailedPages/DetailedPage"

import PieceOfFurniture from "./components/pieceOfFurniture"

import {Context} from "./Context"

import './App.css';

import {Switch, Route} from "react-router-dom"

function App() {

  const {furniture} = useContext(Context)

  const cabinets = furniture.slice(0, 5)


  return (
    <div className="container">
      
      <Header />
      <Switch>
        <Route exact path="/">
          <Furniture furniture={furniture} />
        </Route>
        {/* making one example with props.children just to prove that I can do it =) */}
        {/*add another comment*/}
        <Route path="/cabinets">
          <Cabinets>
          <div className="cabinets">
              <h1 className="header">Our Cabinets</h1>
              <div className="furniture">
                {cabinets.map(onePiece => (
                    <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
                ))}
              </div>
          </div>
          </Cabinets>
        </Route>
        {/* making one example with render props just to prove that I can do it =) */}
        <Route path="/sofas">
          <Sofas render={() => furniture} />
        </Route>
        <Route path="/tables">
            <Tables furniture={furniture} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/home/:detailedId">
          <DetailedPage />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
