import React from 'react';

import NumberButton from './NumberButton';

const buttons = [
  {
    text: 'clear',
    color: 'white'
  },
  {
    text: '÷',
    color: 'red'
  },
  {
    text: '7',
    color: 'white'
  },
  {
    text: '8',
    color: 'white'
  },
  {
    text: '9',
    color: 'white'
  },
  {
    text: '×',
    color: 'red'
  },
  {
    text: '4',
    color: 'white'
  },
  {
    text: '5',
    color: 'white'
  },
  {
    text: '6',
    color: 'white'
  },
  {
    text: '−',
    color: 'red'
  },
  {
    text: '1',
    color: 'white'
  },
  {
    text: '2',
    color: 'white'
  },
  {
    text: '3',
    color: 'white'
  },
  {
    text: '+',
    color: 'red'
  },
  {
    text: '0',
    color: 'white'
  },
  {
    text: '=',
    color: 'red'
  }
];

const Buttons = () => {
  return (
    <div className="button-container">
      {buttons.map(button => {
        return <NumberButton buttonProps={button} />
      })}
    </div>
  )
};

export default Buttons;