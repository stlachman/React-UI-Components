import React from 'react';
import './CalculatorWrapper.css';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import Buttons from '../ButtonComponents/Buttons';


const CalculatorWrapper = () => {
  return (
    <div className="calculator-wrapper">
      <CalculatorDisplay result={0} />
      <Buttons />
    </div>
  )
};

export default CalculatorWrapper;