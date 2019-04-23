import React from 'react';
import './CalculatorWrapper.css';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import Buttons from '../ButtonComponents/Buttons';


const CalculatorWrapper = (props) => {
  return (
    <div className="calculator-wrapper">
      <CalculatorDisplay result={props.result} />
      <Buttons />
    </div>
  )
};

export default CalculatorWrapper;