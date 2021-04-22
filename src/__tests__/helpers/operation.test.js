import { isBinaryOperation, isOperation, isUnaryOperation } from '../../helpers/operation';

describe('helpers/operations', () => {
  describe('isBinaryOperation', () => {
    test('returns true if given operation is binary operation', () => {
      expect(isBinaryOperation('+')).toBe(true);
    });
    test('returns false if given operation is not binary operation', () => {
      expect(isBinaryOperation('2')).toBe(false);
    });
  });
  describe('isUnaryOperation', () => {
    test('returns true if given operation is unary operation', () => {
      expect(isUnaryOperation('%')).toBe(true);
    });
    test('returns false if given operation is not unary operation', () => {
      expect(isUnaryOperation('+')).toBe(false);
    });
  });
  describe('isOperation', () => {
    test('returns true if given operation is  operation', () => {
      expect(isOperation('%')).toBe(true);
    });
    test('returns false if given operation is not  operation', () => {
      expect(isOperation('2')).toBe(false);
    });
  });
});
