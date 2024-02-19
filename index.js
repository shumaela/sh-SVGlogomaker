// Runs the application using imports from lib
// Imported required packages
// const inquirer = require ('inquirer');
// const fs = require ('fs');

// const Triangle = require('./triangle');
// const Circle = require('./circle');
// const Square = require('./square');

// Runs the application using imports from lib
// Imported required packages
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require ('./lib/shapes'); 


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
    type: 'input',
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
        shape = new Circle(answers.shapeColor);
        break;
      case 'Triangle':
        shape = new Triangle(answers.shapeColor);
        break;
      case 'Square':
        shape = new Square(answers.shapeColor);
        break;
      default:
        console.log('Invalid shape choice');
        return;
    }

    // Render the shape and save it to logo.svg
    const svgContent = shape.render();
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

generateLogo();

