// Jest tests for shapes

// imports shapes from shapes.js //
const {Circle, Square, Triangle} = require('./shapes');

// shape.test.js
const { Circle, Square, Triangle } = require('./shapes');

// Test the Shape class
test('Shape class constructor and setColor method', () => {
  const shape = new Circle();
  expect(shape.color).toBe('');

  shape.setColor('red');
  expect(shape.color).toBe('red');
});

// Test the Circle class
test('Circle class constructor and render method', () => {
  const circle = new Circle();
  circle.setColor('blue');
  const svgContent = circle.render();
  expect(svgContent).toMatch(/<circle.*fill="blue".*<\/circle>/);
});

// Test the Square class
test('Square class constructor and render method', () => {
  const square = new Square();
  square.setColor('green');
  const svgContent = square.render();
  expect(svgContent).toMatch(/<rect.*fill="green".*<\/rect>/);
});

// Test the Triangle class
test('Triangle class constructor and render method', () => {
  const triangle = new Triangle();
  triangle.setColor('yellow');
  const svgContent = triangle.render();
  expect(svgContent).toMatch(/<polygon.*fill="yellow".*<\/polygon>/);
});
