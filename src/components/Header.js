import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
