import React from "react";
import logo from "../assets/Logo.svg"; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
