import './App.css';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import { isBinaryOperation, isOperation, isUnaryOperation } from '../helpers/operation';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: '0',
    operation: null,
    showTotal: true,
  });
  const handleClick = buttonName => {
    const { operation, total, next } = state;

    // if its not an operation then its a number being entered
    if (!isOperation(buttonName)) {
      setState(() => {
        const calculation = calculate({ total, next, operation }, buttonName);
        return ({
          ...calculation,
          showTotal: false,
        });
      });
    } else {
      setState(prevState => {
        // First input of the calculation
        if (total === null && !isUnaryOperation(buttonName)) {
          return {
            ...prevState,
            total: prevState.next,
            operation: buttonName,
            next: '',
            showTotal: true,
          };
        }

        // if no second input is present for the binary operation
        if (next === '' && isBinaryOperation(buttonName)) {
          if (prevState.operation === buttonName) return prevState;
          return ({
            ...prevState,
            operation: buttonName,
          });
        }

        if (isUnaryOperation(buttonName)) {
          const isInterDigit = !!next;
          const calculation = calculate({ total, next, operation }, buttonName);
          return ({
            ...calculation,
            showTotal: !isInterDigit,
          });
        }
        const calculation = calculate({ total, next, operation }, buttonName);
        return ({
          ...calculation,
          next: '',
          showTotal: true,
        });
      });
    }
  };
  const { showTotal, total, next } = state;
  return (
    <>
      <div className="App">
        <Display result={showTotal ? total || '0' : next} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
