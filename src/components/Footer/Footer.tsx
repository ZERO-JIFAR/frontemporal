import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="ourCompany">
        <h4>Our Company</h4>
        <p>Some information about our comany, lorem ipsum etc</p>
      </div>
      <div className="contactUs">
        <h4>Contact Us</h4>
        <p>Email: info@fictionalCompany.com</p>
        <p>Phone: (123) 456-67890</p>
      </div>
    </div>
  );
};

export default Footer;
