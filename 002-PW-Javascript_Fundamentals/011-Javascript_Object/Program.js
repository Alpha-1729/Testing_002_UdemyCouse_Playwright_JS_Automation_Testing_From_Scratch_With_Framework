// Javascript Object

/*
>>>> Object:
        Object is a collection of properties.
>>>>
>>>>
>>>>
*/

let person = {
    firstName: "Peter",
    lastName: "Samuel",
};

// Getting the properties of an object.
console.log(person.firstName);
console.log(person["firstName"]);

// Change the values of the property.
person.firstName = "Raj";

// Adding a new property.
person.gender = "M";
console.log(person);

// Deleting a property.
delete person.gender;
console.log(person);

// Check for existence of a property.
console.log("gender" in person);

// Iterate through all property and value in the object.
for (let key in person) {
    console.log(key);
    console.log(person[key]);
}

// Set function as a property of an object.
let student = {
    firstName: "Ram",
    lastName: "Saankar",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    },
};

student.fullName();
