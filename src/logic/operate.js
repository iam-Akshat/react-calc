import Big from 'big.js';

const operate = (num1, num2, operation) => {
  let total;
  const num1Valid = !!num1;
  const num2Valid = !!num2;
  const bigNum1 = Big(num1Valid ? num1 : '0');
  const bigNum2 = Big(num2Valid ? num2 : '0');
  switch (operation) {
    case '-':
      total = bigNum1.minus(bigNum2);
      break;
    case '+':
      total = bigNum1.add(bigNum2);
      break;
    case 'X':
      total = bigNum1.mul(bigNum2);
      break;
    case '÷':
      total = bigNum1.div(bigNum2);
      break;
    case '%':
      total = bigNum1.div(100);
      break;
    default:
      break;
  }
  return total.toString();
};

export default operate;
