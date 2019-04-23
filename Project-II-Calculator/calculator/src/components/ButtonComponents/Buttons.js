import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';


const Buttons = () => {
  return (
    <div className="button-container">
      <div className="row row--action">
        <ActionButton text="clear" color="white"/>
        <NumberButton text="÷" color="red" />
      </div>
      <div className="row">
        <NumberButton text="7" color="white" />
        <NumberButton text="8" color="white" />
        <NumberButton text="9" color="white" />
        <NumberButton text="×" color="red" />
      </div>
      <div className="row">
        <NumberButton text="4" color="white" />
        <NumberButton text="5" color="white" />
        <NumberButton text="6" color="white" />
        <NumberButton text="-" color="red" />
      </div>

      <div className="row">
        <NumberButton text="1" color="white" />
        <NumberButton text="2" color="white" />
        <NumberButton text="3" color="white" />
        <NumberButton text="+" color="red" />
      </div>

      <div className="row row--action">
        <ActionButton text="0" color="white"/>
        <NumberButton text="=" color="red" />
      </div>
    </div>
  )
};

export default Buttons;