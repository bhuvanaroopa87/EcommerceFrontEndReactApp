import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-danger">
        <Link className="navbar-brand" to="/">
          <img src={require("../data/images/online.jpg")} width={60} alt="" />
          My Shop
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
