const Animal = require("./animal");
module.exports = class Pet extends Animal {
    constructor(firstName, lastName) {
        // Call parent class constructor.
        super(firstName, lastName);
    }
};
