// Import required files
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Set up inquirer questions
const questions = [
    // Question for Letters (Max 3)
    {
        type: "input",
        name: "letters",
        message: "Choose 3 characters",  
    },
    // Questions for letter color(color keyword (OR a hexadecimal number))
    {
        type: "input",
        name: "textColor",
        message: "Choose the text color (keyword or hex)",
    },
    // Question for Shape, multiple choice circle, triangle, chair
    {
        type: "list",
        name: "shape",
        message: "Select a shape ",
        choices: ["Circle", "Triangle", "Square"]
    },
    // Question for Shape Color(color keyword (OR a hexadecimal number))
    {
        type: "input",
        name: "shapeColor",
        message: "Choose the text color (keyword or hex)",
    }
]
// Output text "Generated logo.svg" is printed in the command line


// Generate the file named `logo.svg`
// 300x200 pixel image that matches the criteria entered

function init() {
    inquirer
        .prompt(questions)
}
init()