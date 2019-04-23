import React from 'react';
import './App.css';

import CalculatorWrapper from './components/CalculatorWrapper/CalculatorWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <CalculatorWrapper />
    )
  }
}

export default App;
