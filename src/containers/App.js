import React, { Component } from 'react';
import '../containers/App.scss';
import ProductForm from './ProductForm/ProductForm';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Header from '../components/header'
import Product from '../components/Products/Productlisting';

import { Route, NavLink, Switch, BrowserRouter, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div >
      
      <BrowserRouter>
        <Switch>
        <Route path="/products" component={Product} />
        <Route path="/details/:id" component={ProductDetails} />
        <Route path="/form" component={ProductForm} />
        <Route path="/" component={Header}/>
        <Route render={Header} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
