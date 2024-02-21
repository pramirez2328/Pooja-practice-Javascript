// rectangle.test.js
const calculateRectangleArea = require('./rectangle');

describe('calculateRectangleArea', () => {
  test('calculates the area of a rectangle with positive integers', () => {
    expect(calculateRectangleArea(3, 4)).toBe(12);
  });

  test('calculates the area of a rectangle with floating point numbers', () => {
    expect(calculateRectangleArea(3.5, 2.5)).toBe(8.75);
  });

  test('throws an error if width is not a number', () => {
    expect(() => {
      calculateRectangleArea('3', 4);
    }).toThrow('Both width and height must be positive numbers');
  });

  test('throws an error if height is not a number', () => {
    expect(() => {
      calculateRectangleArea(3, '4');
    }).toThrow('Both width and height must be positive numbers');
  });

  test('throws an error if width is negative', () => {
    expect(() => {
      calculateRectangleArea(-3, 4);
    }).toThrow('Both width and height must be positive numbers');
  });

  test('throws an error if height is negative', () => {
    expect(() => {
      calculateRectangleArea(3, -4);
    }).toThrow('Both width and height must be positive numbers');
  });

  test('throws an error if width and height are zero', () => {
    expect(() => {
      calculateRectangleArea(0, 0);
    }).toThrow('Both width and height must be positive numbers');
  });
});
