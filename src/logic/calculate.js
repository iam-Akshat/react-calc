/* eslint-disable no-param-reassign */
import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (Number.isInteger(+buttonName)) {
    next += `${buttonName}`;
  }
  switch (buttonName) {
    case 'AC':
      total = 0;
      next = 0;
      break;
    case '.':
      next += '.';
      break;
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
    case '=':
      total = operate(total, next, operation);
      break;
    default:
      break;
  }

  return { total, next, operation };
};

export default calculate;
