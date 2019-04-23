import React from 'react';
import './Button.css';

import NumberButton from './NumberButton';

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <NumberButton buttonStyle="button--white" text={0} />
      <NumberButton buttonStyle="button--white" text={1} />
      <NumberButton buttonStyle="button--white" text={2} />
      <NumberButton buttonStyle="button--white" text={3} />
    </div>
  );
};

export default ButtonContainer;