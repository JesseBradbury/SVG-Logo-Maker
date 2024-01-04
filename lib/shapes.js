// This is the code that will create our square, circle, and triangel shapes. 

function circle() {
    return `<circle cx="150" cy="100" r="80" `
}

function triangle() {
return `<polygon points="150, 18 244, 182 56, 182" `
}

function square() {
    return `<rect x="75" y="25" width="150" height="150" `
}

// This is the function that will return the correct shape based on the user input. 
function generateShape(data) {
    if (data.shape === "Triangle") {
        return triangle();
    }
    else if (data.shape === "Circle") {
        return circle();
    }
    else {
       return square()
    }
}

module.exports = generateShape;