// rectangle.js
function calculateRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number' || width <= 0 || height <= 0) {
    throw new Error('Both width and height must be positive numbers');
  }

  return width * height;
}

module.exports = calculateRectangleArea;
