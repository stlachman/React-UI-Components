import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return (
    <div className={`button button--${props.buttonProps.color}`}>
      {props.buttonProps.text}
    </div>
  )
}

export default NumberButton;