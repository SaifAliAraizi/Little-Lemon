import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Helmet>
        {/* Standard Meta Tags */}
        <meta name="description" content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Little Lemon - Authentic Mediterranean Cuisine</title>

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Little Lemon - Authentic Mediterranean Cuisine" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="%PUBLIC_URL%/Logo.svg" />
        <meta property="og:url" content="https://littlelemon.com/" />
        <meta property="og:description" content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Little Lemon" />

        {/* Favicon */}
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>

      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;