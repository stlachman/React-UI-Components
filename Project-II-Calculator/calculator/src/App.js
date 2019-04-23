import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
   <div className="wrapper">
     <CalculatorDisplay result={0} />
   </div>
  );
};

export default App;
