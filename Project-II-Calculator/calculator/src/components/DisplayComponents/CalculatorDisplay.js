import React from 'react';
import './Display.css';


const CalculatorDisplay = (props) => {
  return (
    <div className="calculator-display">
      {props.result}
    </div>
  )
};

export default CalculatorDisplay;
