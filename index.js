
// Runs the application using imports from lib
// Imported required packages
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Created an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter three(3) characters:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'list',
    name: 'shapeColor',
    message: 'Choose a shape color:',
    choices: ['Red', 'Blue', 'Green'],
  },
];

async function generateLogo() {
  try {
    // Use inquirer to prompt the user for input
    const answers = await inquirer.prompt(questions);

    // Based on user input, create an instance of the selected shape
    // and set its color
    let shape;
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Square':
        shape = new Square();
        break;
      default:
        console.log('Invalid shape choice');
        return;
    }

    // Set the colors based on user input
    shape.setShapeColor(answers.shapeColor);
    shape.setTextColor(answers.textColor);

    // Render the shape and save it to logo.svg
    const svgContent = shape.render();
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (writeError) {
    console.error('Error writing to logo.svg:', writeError.message);
  }
}

generateLogo();


