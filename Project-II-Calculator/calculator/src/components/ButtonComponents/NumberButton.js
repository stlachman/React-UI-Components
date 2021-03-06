import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return (
    <button className={`button button--${props.color}`} value={props.text} onClick={() => console.log(props.text)}>
      {props.text}
    </button>
  )
}

export default NumberButton;