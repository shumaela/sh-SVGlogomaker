// Exports `Triangle`, `Circle`, and `Square` classes
class Shape {
    constructor() {
      // Initialize shapeColor and textColor properties
      this.shapeColor = ''; 
      this.textColor = '';
    }
  
    // Method to set the shape color
    setShapeColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  
    // Method to set the text color
    setTextColor(textColor) {
      this.textColor = textColor;
    }
}
  
class Circle extends Shape {
    render() {
      // Log the shape and text color for debugging purposes
      console.log('Circle shape color:', this.shapeColor);
      console.log('Circle text color:', this.textColor);
  
      // Return SVG content for a circle with the specified colors
      return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: #eee;">
        <circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="50%" y="50%" fill="${this.textColor}" font-size="30" text-anchor="middle" dy=".3em">CIR</text>
      </svg>`;
    }
}
  
class Square extends Shape {
    render() {
      // Log the shape and text color for debugging purposes
      console.log('Square shape color:', this.shapeColor);
      console.log('Square text color:', this.textColor);
  
      // Return SVG content for a square with the specified colors
      return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: #eee;">
        <rect x="50" y="50" height="100" width="100" fill="${this.shapeColor}" />
        <text x="50%" y="50%" fill="${this.textColor}" font-size="30" text-anchor="middle" dy=".3em">SQR</text>
      </svg>`;
    }
}
  
class Triangle extends Shape {
    render() {
      // Log the shape and text color for debugging purposes
      console.log('Triangle shape color:', this.shapeColor);
      console.log('Triangle text color:', this.textColor);
  
      // Return SVG content for a triangle with the specified colors
      return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: #eee;">
        <polygon points="100,150 50,50 150,50" fill="${this.shapeColor}" />
        <text x="50%" y="50%" fill="${this.textColor}" font-size="30" text-anchor="middle" dy=".3em">TRI</text>
      </svg>`;
    }
}
  
// Export the classes to be used in other files
module.exports = { Circle, Square, Triangle };

  






