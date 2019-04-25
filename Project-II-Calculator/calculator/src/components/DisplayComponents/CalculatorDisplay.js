import React from 'react';
import './Display.css';


const CalculatorDisplay = (props) => {
  return (
    <div className="calculator-display">
      <span>{props.result}</span>
    </div>
  )
};

export default CalculatorDisplay;
