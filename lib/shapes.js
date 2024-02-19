// Exports `Triangle`, `Circle`, and `Square` classes


class Shape {
    constructor() {
      // Default color is an empty string
      this.color = '';
    }
  
    // Method to set the color of the shape
    setColor(color) {
      this.color = color;
    }
  }
  
  // Circle class, extending the base Shape class
  class Circle extends Shape {
    // Render method to generate SVG markup for a circle
    render() {
      // Using percentage-based attributes for responsiveness
      return `<circle cx="50%" cy="50%" r="50%" fill="${this.color}"></circle>`;
    }
  }
  
  // Square class, extending the base Shape class
  class Square extends Shape {
    // Render method to generate SVG markup for a square
    render() {
      // Using percentage-based attributes for responsiveness
      return `<rect x="25%" y="25%" height="50%" width="50%" fill="${this.color}"></rect>`;
    }
  }
  
  // Triangle class, extending the base Shape class
  class Triangle extends Shape {
    // Render method to generate SVG markup for a triangle
    render() {
      // Using percentage-based attributes for responsiveness
      return `<polygon points="50%,75% 25%,25% 75%,25%" fill="${this.color}"></polygon>`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };
  
  
  