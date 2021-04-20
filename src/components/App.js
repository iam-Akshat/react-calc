import './App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import { isBinaryOperation, isOperation, isUnaryOperation } from '../helpers/operation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: '0',
      operation: null,
      showTotal: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { operation, total, next } = this.state;

    // if its not an operation then its a number being entered
    if (!isOperation(buttonName)) {
      this.setState(() => {
        const calculation = calculate({ total, next, operation }, buttonName);
        return ({
          ...calculation,
          showTotal: false,
        });
      });
    } else {
      this.setState(prevState => {
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
  }

  render() {
    const { showTotal, total, next } = this.state;
    return (
      <>
        <div className="App">
          <Display result={showTotal ? total || '0' : next} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
