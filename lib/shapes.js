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
      return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: #eee;">
      <circle cx="50%" cy="50%" r="50%" fill="${this.color}" />
    </svg>`;
    }
  }
  
  // Square class, extending the base Shape class
  class Square extends Shape {
    // Render method to generate SVG markup for a square
    render() {
      // Using percentage-based attributes for responsiveness
      return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: #eee;">
      <rect x="25%" y="25%" height="50%" width="50%" fill="${this.color}" />
    </svg>`;
    }
  }
  
  // Triangle class, extending the base Shape class
  class Triangle extends Shape {
    // Render method to generate SVG markup for a triangle
    render() {
      // Using percentage-based attributes for responsiveness
      return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: #eee;">
      <polygon points="50%,75% 25%,25% 75%,25%" fill="${this.color}" />
    </svg>`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };
  
  
  