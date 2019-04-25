import React from "react";
import "./Footer.css";
import FooterButton from "./FooterButton";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <FooterButton icon="far fa-comment fa-flip-horizontal"/>
        <FooterButton icon="fas fa-sync" span={6}/>
        <FooterButton icon="far fa-heart" span={4}/>
        <FooterButton icon="far fa-envelope"/>
      </div>
    </div>
  );
};

export default Footer;