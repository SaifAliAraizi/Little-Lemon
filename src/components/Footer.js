import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Little Lemon</h3>
        <p>A Chicago-based, family-owned restaurant.</p>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Phone: (312) 555-1234</p>
        <p>Email: contact@littlelemon.com</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <p><a href="#">Facebook</a> | <a href="#">Instagram</a></p>
      </div>
    </footer>
  );
};

export default Footer;
