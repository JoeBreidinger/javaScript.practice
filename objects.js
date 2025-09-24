//===OBJECTS===//

//An Object is a variable that can hold many variables.
// Objects are collections of key-value pairs, where each key (known as property names) has a value.
// Objects can describe anything like houses, cars, people, animals, or any other subjects.

//You should declare objects with the const keyword.
// When an object is declared with const, you cannot later reassign it to point to a different variable.
// It does not make the object unchangeable. You can still modify its properties and values.

//This code assigns many values (Fiat, 500, white) to an object named car:
const car = { type: "Fiat", model: "500", color: "white" };

// How to Create a JavaScript Object
// An object literal is a concise way to create an object.
// An object literal is a list of key : value pairs inside curly braces
//  { }:
// In object terms, the {key:value} pairs are the object properties.

// Creating a JavaScript object with 4 properties:
object1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// Spaces and line breaks are not important. An object literal can span multiple lines:
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
// Create a new JavaScript object using new Object():
const person2 = new Object({
  firstName: "Jane",
  lastName: "Doe",
  age: 50,
  eyeColor: "green",
});
// You can also create an empty object, and add the properties later:
//Example:
const carObject = {};
//Car Properties:
carObject.name = "Fiat";
carObject.model = "500";
carObject.weight = "850kg";
carObject.color = "white";
//carObject = object
//name (model, weight, etc.) = key
//data after the "=" operator = value

// Object Properties
// Different cars have the same properties, but the property values can differ from car to car.

// You can access object properties in two ways:
// objectName.propertyName
// objectName["propertyName"]

// JavaScript Object Methods
// Object methods are actions that can be performed on objects.
// Object methods are function definitions stored as property values.
//Example:
const person3 = {
  firstName: "Jim",
  lastName: "Slim",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// document.getElementById("person3Tag").innerHTML = person3.fullName();

// Different cars have the same methods, but the methods can be performed at different times.

// carObject Methods:
// carObject.start();
// carObject.drive();
// carObject.brake();
// carObject.stop();

// In JavaScript, Objects are King.
// If you Understand Objects, you Understand JavaScript.
// In JavaScript, almost "everything" is an object.

// - Objects are objects
// - Maths are objects
// - Functions are objects
// - Dates are objects
// - Arrays are objects
// - Maps are objects
// - Sets are objects

// All JavaScript values, except primitives, are objects.

// Summary:
// - Objects are containers for Properties and Methods.
// - Properties are named Values.
// - Methods are Functions stored as Properties.
// - Properties can be primitive values, functions, or even other objects.
// - Constructors are Object Prototypes.

//Deep dive into object fundamentals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object (MDN)
