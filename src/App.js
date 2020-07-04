import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import ProductList from './components/productList';
import Cart from './components/Cart';

export default class App extends Component{
  render() {
  return (
    <div className="container-width">
      <Navbar />
      <Switch>
        <Route path='/' exact component={ProductList}></Route>
        <Route path='/cart' exact component={Cart}></Route>
        <Route exact component={Default}></Route>
      </Switch>
    </div>
  );
}
}

