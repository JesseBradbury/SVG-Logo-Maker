// This is the code that will create our square, circle, and triangel shapes. 

// function circle() {
//     return `<circle cx="150" cy="100" r="80" `
// }

// function triangle() {
// return `<polygon points="150, 18 244, 182 56, 182" `
// }

// function square() {
//     return `<rect x="75" y="25" width="150" height="150" `
// }

// This is the function that will return the correct shape based on the user input. 
function generateShape(data) {
    if (data.shape === "Triangle") {
        return new Triangle();
    }
    else if (data.shape === "Circle") {
        return new Circle();
    }
    else {
       return new Square()
    }
}

function Shape() {}
Shape.prototype.setColor = function(color) {
    this.color = color;
}

function Triangle() {
    Shape.call(this)
    this.render = function() {
       return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
Triangle.prototype = Object.create(Shape.prototype);

function Circle() {
    Shape.call(this)
    this.render = function() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
Circle.prototype = Object.create(Shape.prototype);

function Square() {
    Shape.call(this)
    this.render = function() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`
    }
}
Square.prototype = Object.create(Shape.prototype);

module.exports = generateShape;