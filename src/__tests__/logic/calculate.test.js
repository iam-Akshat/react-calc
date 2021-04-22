import calculate from '../../logic/calculate';

const prepCalculatorObj = (total, next, operation) => ({ total, next, operation });

describe('calculate', () => {
  describe('entering numbers', () => {
    test('enters the first number', () => {
      const calcData = prepCalculatorObj(null, '0', null);
      const calculation = calculate(calcData, '1');
      expect(calculation.next).toBe('1');
    });
    test('enters a multi digit number', () => {
      const calcData = prepCalculatorObj(null, '2', null);
      const calculation = calculate(calcData, '1');
      expect(calculation.next).toBe('21');
    });
    test('enters a decimal number', () => {
      const calcData = prepCalculatorObj(null, '2', null);
      const calculation1 = calculate(calcData, '.');
      const calculation2 = calculate(calculation1, '1');
      expect(calculation2.next).toBe('2.1');
    });
  });
  describe('binary operations', () => {
    test('after a binary operation total is changed', () => {
      const initCalcData = prepCalculatorObj('1', '2', null);
      const calculation = calculate(initCalcData, '+');
      expect(calculation.total).toBe('3');
    });
    test('buttonName when "=" evaluates the calculator object', () => {
      const initCalcData = prepCalculatorObj('1.1', '2', 'X');
      const calculation = calculate(initCalcData, '=');
      expect(calculation.total).toBe('2.2');
    });
    test(' buttonName "+" adds total and next', () => {
      const initCalcData = prepCalculatorObj('1.1', '2', '+');
      const calculation = calculate(initCalcData, '+');
      expect(calculation.total).toBe('3.1');
    });
    test(' buttonName "-" subtracts total from next ', () => {
      const initCalcData = prepCalculatorObj('1.1', '2', '+');
      const calculation = calculate(initCalcData, '-');
      expect(calculation.total).toBe('-0.9');
    });
    test(' buttonName "X" multiplies total and next', () => {
      const initCalcData = prepCalculatorObj('3', '3', 'X');
      const calculation = calculate(initCalcData, 'X');
      expect(calculation.total).toBe('9');
    });
    test(' buttonName "÷" divides total by next', () => {
      const initCalcData = prepCalculatorObj('8', '2', '÷');
      const calculation = calculate(initCalcData, '÷');
      expect(calculation.total).toBe('4');
    });
  });
  describe('AC button', () => {
    test('return initial calculator state', () => {
      const initCalcData = prepCalculatorObj('1', '2', '+');
      const calculation = calculate(initCalcData, 'AC');
      expect(calculation).toStrictEqual(prepCalculatorObj(null, '0', null));
    });
    test('should not return same object back', () => {
      const initCalcData = prepCalculatorObj('1', '2', '+');
      const calculation = calculate(initCalcData, 'AC');
      expect(calculation).not.toStrictEqual(initCalcData);
    });
  });
  describe('unary operations', () => {
    test('applies operation to total when next is empty', () => {
      const initCalcData = prepCalculatorObj('50', '', null);
      const calculation = calculate(initCalcData, '-/+');
      expect(calculation.total).toBe('-50');
    });
    test('applies operation to next when next is not empty , total does not change', () => {
      const initCalcData = prepCalculatorObj('501', '-22', null);
      const calculation = calculate(initCalcData, '-/+');
      expect(calculation.total).toBe('501');
      expect(calculation.next).toBe('22');
    });
    test('buttonName "%" divides by 100', () => {
      const initCalcData = prepCalculatorObj('501', '100', null);
      const calculation = calculate(initCalcData, '%');
      expect(calculation.next).toBe('1');
    });
    test('buttonName "-/+" multiplies by -1', () => {
      const initCalcData = prepCalculatorObj('501', '100', null);
      const calculation = calculate(initCalcData, '-/+');
      expect(calculation.next).toBe('-100');
    });
  });
});
