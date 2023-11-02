// Inheritance In Class

/*
>>>> Inheritance:
        One class can inherit/acquire the properties, methods of another class.
        The class which inherit the properties of other is known as subclass(derived class, child class).
        The class whose properties are inherited is known as superclass.
>>>>
>>>>
>>>>
*/

const Pet = require("./pet");

let pet = new Pet("San", "Sis");
console.log(pet.fullName());
