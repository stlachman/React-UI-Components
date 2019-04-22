import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <button className="footer-button">
            <i className="far fa-comment fa-flip-horizontal"></i>
        </button>
        <button className="footer-button">
            <i className="fas fa-sync"></i>
            <span>6</span>
        </button>
        <button className="footer-button">
            <i className="far fa-heart"></i>
            <span>4</span>
        </button>
        <button className="footer-button">
            <i className="far fa-envelope"></i>
        </button>
      </div>
    </div>
  );
};

export default Footer;