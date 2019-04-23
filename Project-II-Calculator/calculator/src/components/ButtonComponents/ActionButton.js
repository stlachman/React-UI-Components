import React from 'react';
import './Button.css';


const ActionButton = (props) => {
  return (
    <button className={`button button--${props.color} button--large`} value={props.text}>
      {props.text}
    </button>
  )
};

export default ActionButton;