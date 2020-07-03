import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import productList from './components/productList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container-width">
      <Navbar />
      <Switch>
        <Route path='/' exact component={productList}></Route>
        <Route path='/cart' exact component={Cart}></Route>
        <Route exact component={Default}></Route>
      </Switch>
    </div>
  );
}

export default App;
