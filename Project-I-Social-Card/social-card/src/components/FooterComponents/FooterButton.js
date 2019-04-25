import React from "react";
import "./Footer.css";

function FooterButton(props) {
  return (
    <button className={`footer-button`}>
        <i className={props.icon}></i>
        {props.span > 0 &&
          <span>{props.span}</span>
        }
    </button>
  );
}

export default FooterButton;