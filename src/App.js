import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import MenuPage from "./components/MenuPage";
import OrderPage from "./components/OrderPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Little Lemon - Authentic Mediterranean Cuisine</title>
        <meta name="description" content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Little Lemon - Authentic Mediterranean Cuisine" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="%PUBLIC_URL%/Logo.svg" />
        <meta property="og:url" content="https://littlelemon.com/" />
        <meta property="og:description" content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Little Lemon" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>

      <Header />

      <ConditionalMain /> {/* Show Main only when not on specific pages */}

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

// A separate component to conditionally render Main
const ConditionalMain = () => {
  const location = useLocation();
  const hideMainRoutes = ["/home", "/booking", "/menu", "/order", "/login"];

  return !hideMainRoutes.includes(location.pathname) ? <Main /> : null;
};

export default App;
