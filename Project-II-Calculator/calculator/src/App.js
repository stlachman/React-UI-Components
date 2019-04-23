import React from 'react';
import './App.css';

import CalculatorWrapper from './components/CalculatorWrapper/CalculatorWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0'
    }
  }

  render() {
    return (
      <CalculatorWrapper result={this.state.total} />
    )
  }


}

export default App;
