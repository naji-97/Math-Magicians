import calculate from '../logic/calculate';

describe('calculate function', () => {
  let obj;

  beforeEach(() => {
    obj = {
      total: null,
      next: null,
      operation: null,
    };
  });

  it('should update next with the number when a number button is pressed', () => {
    obj = calculate(obj, '2');
    expect(obj).toHaveProperty('next', '2');
  });

  it('should append the pressed number to the existing number if it is not zero', () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '3');
    expect(obj).toHaveProperty('next', '23');
  });

  it('should not append the pressed number to the existing number if it is zero', () => {
    obj = calculate(obj, '0');
    obj = calculate(obj, '0');
    expect(obj).not.toHaveProperty('next', '00');
    expect(obj).toHaveProperty('next', '0');
  });

  it('should update operation when an operator button is pressed', () => {
    obj = calculate(obj, '+');
    expect(obj).toHaveProperty('operation', '+');
  });

  it('should calculate the result when "=" button is pressed after two numbers and an operator', () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '+');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    expect(obj).toHaveProperty('total', '5');
  });

  it('should not calculate the result when "=" button is pressed without an operator or second number', () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj).not.toHaveProperty('total');
  });

  it('should handle decimal numbers correctly', () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '.');
    obj = calculate(obj, '3');
    obj = calculate(obj, '.');
    obj = calculate(obj, '4');
    expect(obj).toHaveProperty('next', '2.34');
  });

  it('should toggle the sign of the current number when "+/-" button is pressed', () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '+/-');
    expect(obj).toHaveProperty('next', '-2');
    obj = calculate(obj, '+/-');
    expect(obj).toHaveProperty('next', '2');
  });

  it('should clear all values when "AC" button is pressed', () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '+');
    obj = calculate(obj, '3');
    obj = calculate(obj, 'AC');
    expect(obj).toHaveProperty('total', null);
    expect(obj).toHaveProperty('operation', null);
    expect(obj).toHaveProperty('next', null);
  });
});
