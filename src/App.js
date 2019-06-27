import React, { Component } from "react";
import NavBar from "./components/navBar";
import Products from "./components/products";
import ProductDetails from "./components/productDetails";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Orders from "./components/orders";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header date={Date()} />
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" exact component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
