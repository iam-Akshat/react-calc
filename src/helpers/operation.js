const unaryOperations = ['%', 'AC', '-/+'];
const binaryOperations = ['-', '+', '=', 'X', '÷'];
const operations = [...unaryOperations, ...binaryOperations];

const isOperation = buttonName => operations.indexOf(buttonName) !== -1;

const isBinaryOperation = buttonName => binaryOperations.indexOf(buttonName) !== -1;

const isUnaryOperation = buttonName => unaryOperations.indexOf(buttonName) !== -1;
export { isOperation, isBinaryOperation, isUnaryOperation };
