/* eslint-disable no-param-reassign */
import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case '-/+':
      total *= -1;
      next *= -1;
      break;
    case '-':
      total = operate(total, next, '-');
      break;
    case '+':
      total = operate(total, next, '+');
      break;
    case 'X':
      total = operate(total, next, 'X');
      break;
    case '÷':
      total = operate(total, next, '÷');
      break;
    case '%':
      total = operate(total, next, '%');
      break;
    default:
      break;
  }

  return { total, next, operation };
};

export default calculate;
