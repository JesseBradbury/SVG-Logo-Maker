// This will take the data from the user and genreate the SVG file. 
const generateShape = require("./shapes")

function generateSvg(data) {
    const shapeSvg = generateShape(data);
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="white" />

 ${shapeSvg} fill="${data.shapeColor}"/>
 
 <text x="150" y="115" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>
 
 </svg>`
}


module.exports = generateSvg;