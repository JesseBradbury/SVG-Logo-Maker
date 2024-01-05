// This is where we will validate our shapes functions. 
const { Triangle } = require('../lib/shapes.js')



describe('Shapes', () => {

    describe('Triangle', () => {
        it("Should render a triangle", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});
