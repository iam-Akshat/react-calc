/* eslint-disable no-param-reassign */
import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (Number.isInteger(+buttonName)) {
    if (next[0] === '0' && next.length === 1) {
      next = buttonName;
    } else {
      next += `${buttonName}`;
    }
  }
  switch (buttonName) {
    case 'AC':
      total = null;
      next = '';
      operation = null;
      break;
    case '.':
      next += '.';
      break;
    case '-/+':
      if (next.length === 0) {
        total *= -1;
        total = total.toString();
      } else {
        next *= -1;
        next = next.toString();
      }

      break;
    case '-':
      total = operate(total, next, '-');
      operation = '-';
      break;
    case '+':
      total = operate(total, next, '+');
      operation = '+';
      break;
    case 'X':
      total = operate(total, next, 'X');
      operation = 'X';
      break;
    case '÷':
      total = operate(total, next, '÷');
      break;
    case '%':
      if (next.length === 0) {
        total = operate(total, next, '%');
      } else {
        next = operate(next, total, '%');
      }
      break;
    case '=':
      total = operate(total, next, operation);
      break;
    default:
      break;
  }

  return { total, next, operation };
};

export default calculate;
