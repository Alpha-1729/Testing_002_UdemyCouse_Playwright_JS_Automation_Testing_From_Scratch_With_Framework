// Javascript Classes

/*
>>>> Classes are introduced in ES6 Engine.
>>>> Constructor:
        Constructor is method which executes by default when you create object of the class.
>>>> Instance properties are declared inside the constructor.
>>>>
*/

class Person {
    // Class property.
    age = 25;

    // location = "Canada";
    // OR
    // Add a property using getter method.
    get location() {
        return "Canada";
    }

    // Creating a Constructor.
    constructor(firstName, lastName) {
        // firstName and lastName are called instance properties.
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Class methods.
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

let person1 = new Person();
console.log(person1.age);
console.log(person1.location);

let person2 = new Person("Tim", "Joseph");
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName());
