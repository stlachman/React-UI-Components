import React from 'react';
import './CalculatorWrapper.css';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import ButtonContainer from '../ButtonComponents/ButtonContainer';


const CalculatorWrapper = () => {
  return (
    <div className="calculator-wrapper">
      <CalculatorDisplay result={0} />
      <ButtonContainer />
    </div>
  )
};

export default CalculatorWrapper;