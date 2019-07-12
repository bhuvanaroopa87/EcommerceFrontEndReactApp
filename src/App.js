import React, { Component } from "react";
import NavBar from "./components/navBar";
import Products from "./components/products/products";
import LoginForm from "./components/users/loginForm";
import Register from "./components/users/register";
import Home from "./components/home";
import Orders from "./components/orders";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import NotFound from "./components/notFound";
import "./App.css";
import AddProduct from "./components/products/addProduct";

class App extends Component {
  render() {
    return (
      <div>
        <Header date={Date()} />
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/products/newProduct" component={AddProduct} />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/login" component={LoginForm} />
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
