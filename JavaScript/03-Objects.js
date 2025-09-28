//===OBJECTS===//

console.log("Section 2 - Objects");
console.log("An Object is a variable that can hold many variables.");
// Objects are collections of key-value pairs, where each key (known as property names) has a value.
// Objects can describe anything like houses, cars, people, animals, or any other subjects.

//You should declare objects with the const keyword.
// When an object is declared with const, you cannot later reassign it to point to a different variable.
// It does not make the object unchangeable. You can still modify its properties and values.

//This code assigns many values (Fiat, 500, white) to an object named car:
const car = { type: "Fiat", model: "500", color: "white" };

////

//* How to Create a JavaScript Object *//

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
// Example:
const carObject = {};
// Car Properties:
carObject.name = "Fiat";
carObject.model = "500";
carObject.weight = "850kg";
carObject.color = "white";
//carObject = object
//name (model, weight, etc.) = key
//data after the "=" operator = value

//* Object Properties *//

//  Different cars have the same properties, but the property values can differ from car to car.

// You can access object properties in two ways:
//  objectName.propertyName
//  objectName["propertyName"]

//* JavaScript Object Methods *//

//  Object methods are actions that can be performed on objects.
//  Object methods are function definitions stored as property values.
//  A typical object inherits properties (including methods) from Object.prototype
// Note:
//  You should avoid calling any of the Object.prototype methods directly from the instance

// Example:
//  Different cars have the same methods, but the methods can be performed at different times.

// carObject Methods:
//  carObject.start();
//  carObject.drive();
//  carObject.brake();
//  carObject.stop();

//  All of these 'functions' are 'properties' of a car and are 'actions' that can be performed on cars
//  Car, in this case, is an object, and those methods are properties stored in the car and can be performed upon the object by:
//  - Hard-coded design
//  - Dynamic events (user action)
// A method is a function stored as an object property
//  - sometimes automatically inherited by the prototype
//  - sometimes created by the programmer (see the next section)

// Inherited Methods
// JavaScript objects also inherit methods from their prototype chain. For example:
const arr = [1, 2, 3];
arr.push(4); // '.push' inherited from Array.prototype

/*
10 Important JavaScript Object Methods

1. Object Keys: Object.keys(obj): 
  The Object.keys() the method returns an array of a given object's own 
  enumerable property names, in the same order as we get with a normal loop. 
  This array only includes properties that are enumerable. Enumerable 
  properties are those properties whose internal enumerable flag is set to true.

2. Object Values: Object.values(obj):
  The Object.values() the method returns an array of a given object's own enumerable property values, in the same order as that provided by a 
  for...in the loop. This array includes only the values of enumerable properties.

3. Object Entries: Object.entries(obj): 
  The Object.entries() the method returns an array of a given object's own 
  enumerable property [key, value] pairs, in the same order as that provided 
  by a for...in loop. This array includes only the properties that are 
  enumerable.

4. Object assign: Object.assign(obj1, obj2, ...): 
  Copies the values of all enumerable own properties from one or more source 
  objects to a target object and returns the target object. This method is 
  used to copy properties from one object to another, it makes a complete copy 
  of all properties, including non-enumerable properties.

5. Object defineProperty: Object.defineProperty(obj, prop, descriptor): 
  Defines a new property directly on an object, or modifies an existing 
  property on an object, and returns the object. The defineProperty() the 
  method allows you to define a new property on an object, or modify an 
  existing property, and provides a way to set the property's attributes.

6. Object defineProperty:Object.defineProperty(obj, prop, descriptor): 
  Defines a new property directly on an object, or modifies an existing 
  property on an object, and returns the object. The defineProperty() the 
  method allows you to define a new property on an object, or modify an 
  existing property, and provides a way to set the property's attributes.

7. Object defineProperties: Object.defineProperties(obj, props): 
  Defines new or modifies existing properties directly on an object and 
  returns the object. The defineProperties() the method is similar to the 
  defineProperty() method, but it allows you to define multiple properties at 
  once, using an object that contains the property descriptors.

8. Object getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor(obj, prop):  
  The getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object, not present by virtue of being along an object's prototype chain) of a given object.

9. Object getOwnPropertyNames: Object.getOwnPropertyNames(obj): 
  The getOwnPropertyNames() method returns an array of all properties (enumerable or non-enumerable) found directly on an object.

10. Object Create: Object.create(proto[, propertiesObject]): 
  The create() method creates a new object with the specified prototype object 
  and properties. If the prototype is not an object or null, it throws a 
  TypeError.

*/

//* The 'this' Keyword *//

//  In a function definition, this refers to the "owner" of the function.
//  In the example below,
//  'this' is the person object that "owns" the fullName function.
//  In other words, this.firstName means the firstName property of this object.
// Example:
const person3 = {
  firstName: "Jim",
  lastName: "Slim",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person3.fullName());
// returns 'Jim Slim'

// Programmer-Defined Methods
// You can create custom methods like this:
const dog = {
  name: "Lulu",
  speak() {
    return `${this.name} says woof!`;
  },
};

console.log(dog.speak()); // "Lulu says woof!"

// You Can Even Add Methods Dynamically
dog.fetch = function (item) {
  return `${this.name} fetched the ${item}.`;
};

console.log(dog.fetch("ball")); // "Rex fetched the ball"
console.log(dog.name + " is the best <3");

// Accessing Object Methods
// You access an object method with the following syntax:

//    objectMethod = objectName.methodName()

// Example:
const person4 = {
  firstName: "Bob",
  lastName: "Oblaw",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
fullName = person4.fullName();
console.log(fullName); //returns 'Bob Oblaw' as a string
console.log(person1); //(by contrast) returns 'John Doe' as an object

// If you access a method without the () parentheses, it will return the function definition:
//    name = person.fullName;

// Do Not Declare Strings, Numbers, and Booleans as Objects!
// Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

let xVar = new String(); // Declares x as a String object
let yVar = new Number(); // Declares y as a Number object
let zVar = new Boolean(); // Declares z as a Boolean object

//* Objects Summary: *//

// In JavaScript, Objects are King.
// If you Understand Objects, you Understand JavaScript.
// In JavaScript, almost "everything" is an object.

// Definition:
// - Objects are objects
// - Maths are objects
// - Functions are objects
// - Dates are objects
// - Arrays are objects
// - Maps are objects
// - Sets are objects
// - All JavaScript values (except primitives) are objects.

// Functionality:
// - Objects are containers for Properties and Methods.
// - Properties are named Values.
// - Methods are Functions stored as Properties.
// - Properties can be primitive values, functions, or even other objects.
// - Constructors are Object Prototypes.

//Deep dive into object fundamentals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object (MDN)
