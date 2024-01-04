// Import required files
const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require("./lib/generateSVG")

// TODO: Set up inquirer questions
const questions = [
    // Question for Letters (Max 3)
    {
        type: "input",
        name: "characters",
        message: "Choose up to 3 characters",
        validate: function(value) {
            const inputLength = value.trim().length;
            if (inputLength > 3) {
                return "Please enter up to three characters.";
            }
            return true;
        }
          
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
        message: "Choose the shape color (keyword or hex)",
    }
]

// Generate the file named `logo.svg` 300x200 pixel image that matches the criteria entered
function writeToFile(fileName, data) {
    const svgContent = generateSvg(data);
    fs.writeFile(
        fileName,
        svgContent,
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
            // Output text "Generated logo.svg" is printed in the command line
            console.log("Generated logo.svg")

        }
    );
}


function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const fileName = "logo.svg";
            writeToFile(fileName, response)
        }
        );
}
init()