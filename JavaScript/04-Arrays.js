// ==ARRAYS===//

console.log("Section 3 - Arrays");
console.log(
  "An array is a special variable, which can hold more than one value at a time."
);
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
let car1 = "GMC";
let car2 = "Ford";
let car3 = "Chrysler";

// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.

////

//* Creating an Array *//

// Using an array literal is the easiest way to create a JavaScript Array.
// Example:
// let array_name = [item1, item2, ...];
let newArray1 = ["element1", "element2", "element3", "elementEtcetera"];
// Spaces and line breaks are not important. A declaration can span multiple lines:
let carsArray1 = ["Saab", "Volvo", "BMW"];
// Using the JavaScript Keyword new //

// The following example also creates an Array, and assigns values to it:
let carsArray2 = new Array("Honda", "Mazda", "Toyota");
// The two examples above do exactly the same. There is no need to use new Array().
// For simplicity, readability and execution speed, use the first one (the array literal method).

//* Accessing Elements of an Array *//

// You access an array element by referring to the index number.

// exampleArray = [index0, index1, index2, index3 ...];
// This statement accesses the value of the first element in cars:
// let newVariable = exampleArray[0];
// Example:
let carsArray3 = ["Hyundai", "Kia", "Renault"];
console.log(carsArray3[0]);

// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:
let carsArray4 = ["Maserati", "Ferrari", "Lamborghini"];
console.log(carsArray4[0]);

// Accessing the First Array Element
let fruits01 = ["Banana", "Orange", "Apple", "Mango"];
let firstFruit = fruits01[0];
// Accessing the Last Array Element
let fruits02 = ["Watermelon", "Lime", "Pineapple", "Kiwi"];
let lastFruit = fruits02[fruits02.length - 1];
console.log(lastFruit); // "Kiwi"

// Changing an Array Element
let fruits03 = ["Banana", "Orange", "Apple", "Mango"];
fruits03[0] = "Apricot";
console.log(fruits03[0]); //Banana changed to Apricot

//* Array Properties and Methods *//

// The real strength of JavaScript arrays are the built-in array properties and methods:

let favoriteFruits = fruits02.concat(fruits03);
console.log(favoriteFruits);
// The concat() method will Join two arrays and returns the combined array
let numberOfFruits = favoriteFruits.length;
// The length Property
// Returns the length of an array (the number of array elements).
console.log(numberOfFruits); // the length of fruits is 4

// Looping Array Elements
// The safest way to loop through an array, is using a for loop:
let fruits05 = ["Cherry", "Apple", "Peach", "Strawberry"];
for (let i = 0; i < fruits03.length; i++) {
  console.log(fruits05[i]);
}

// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:
var citrusFruits = ["Tangerine", "Orange", "Grapefruit", "Lemon"];
citrusFruits.push("Lime"); // adds a new element (Lime) to citrusFruits
console.log(citrusFruits);

// WARNING !
// Adding elements with high indexes can create undefined "holes" in an array:
/*
List of most used JavaScript Array Methods:

1. push() / pop()
The push() method adds one or more elements to the end of an array and returns the new length of the array.
The pop() method removes the last element from an array and returns that element.

2. shift() / unshift()
The shift() method removes the first element from an array and returns that element.
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

3. concat()
The concat() method merges two or more arrays, creating a new array without modifying the existing arrays

4. map()
The map() method creates a new array with the results of calling a provided function on every element in the array.

5. forEach()
The forEach() method executes a provided function once for each array element.

6. slice()
The slice() method extracts a portion of an array into a new array, without modifying the original array.

7. splice()
The splice() method changes the contents of an array by removing or replacing elements at a specified index.

10. filter()
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/

//* Associative Arrays *//

// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.

//* Arrays are Objects *//

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.
// Arrays use numbers to access its "elements".

// In this example, carModel[0] returns Ford:
let carModel = ["Ford", "Ranger", 2011];

// Objects use names to access its "members".
// In this example, carModelObj.make returns Ford.
let carModelObj = { make: "Ford", type: "Ranger", year: 2011 };

// The Difference Between Arrays and Objects

// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.

// Arrays are a special kind of objects, with numbered indexes.

//* When to Use Arrays. When to use Objects. *//

// - JavaScript does not support associative arrays
// - You should use objects when you want the element names to be strings
// - You should use arrays when you want the element names to be numbers

//* How to Recognize an Array *//

// A common question is: How do I know if a variable is an array?
// The problem is that the JavaScript operator typeof returns "object":
console.log(typeof carModel);
// The typeof operator returns object because a JavaScript array is an object.

//Solution 1:
// To solve this problem ECMAScript 5 defines a new method Array.isArray():
console.log(Array.isArray(carModel)); //returns true

// Solution 2:
// To solve this problem you can create your own isArray() function:
function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(carModel)); //returns true

// Solution 3:
// The instanceof operator returns true if an object is created by a given constructor:
console.log(carModel instanceof Array); // returns true

//* Array Iteration Methods *//

// Array iteration methods operate on every array item.

// Array.forEach()

// The forEach() method calls a function (a callback function) once for each array element.

// Example:
let txt = "";
let numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}

// Calls a function once for each array element.
// 45
// 4
// 9
// 16
// 25

//
// Array.map()

// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

// This example multiplies each array value by 2:
let numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

//
// Array.filter()
// The filter() method creates a new array with array elements that passes a test.

// This example creates a new array from elements with a value larger than 18:
let numbers3 = [45, 4, 9, 16, 25];
let over18 = numbers3.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//
// Array.reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
// The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:
let numbers4 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

// Note that the function takes 3 arguments:
// - The item value
// - The item index
// - The array itself
// - When a callback function uses only the value parameter, the index and array parameters can be omitted
