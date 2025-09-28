//===FUNCTIONS===//

console.log("Section 4 - Functions");
console.log(
  "A JavaScript function is a block of code designed to perform a particular task."
);
// A JavaScript function is executed when "something" invokes it (calls it)

// Example:
// function addition(p1, p2) {
//   return p1 + p2;
//   }
// addition(2, 2);

// The function returns the sum of p1 and p2
// The "addition(x, y)" is the invocation and it performs: (2+2=4)

//* JavaScript Function Syntax *//

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)
// The code to be executed by the function is placed inside curly brackets: {}
// Example:

// function name(parameter1, parameter2, parameter3) {
//   -code to be executed-
// }

//* Parameters and Arguments *//

// Function parameters are listed inside the parentheses () in the function definition.
// Parameters:
// - These are placeholders defined in a function declaration.
// - Think of them as labels for the values the function expects.

function greet(name) {
  // name is the parameter
  console.log(`Hello, ${name}!`);
}

// Function arguments are the values received by the function when it is invoked.
// Arguments:
// - These are the actual values you pass into the function when you call it.
// - Not just the placeholder, but an input to the function.

greet("World"); // world is the argument (it fills the name parameter)

// Inside the function, the arguments (the parameters) behave as local variables - as in variables only recognized within the scope of the function
// Note:
// A Function is much the same as a Procedure or a Subroutine, in other programming languages.

//* Function Invocation *//

/*
The code inside the function will execute when 
"something" invokes (calls)  the function:
- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)
The () operator invokes (calls) the function:
Example
Convert Fahrenheit to Celsius:
*/
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let afternoonHighTemp = toCelsius(77);
console.log(
  `Today's afternoon high is 77 F, or ${afternoonHighTemp} C for our friends up North!`
);
// Accessing a function with incorrect parameters can return an incorrect answer:
/*
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(x);
*/
// Accessing a function without () returns the function and not the function result:
/*
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius;
*/
// Note:
// In the examples above, toCelsius refers to the function object,
// and toCelsius() refers to the function output.

//* Arrow Functions *//

// Introduced in ES6
// Arrow functions allow us to write shorter function syntax:
/*
Before Arrow:
  Function to compute the product of a and b
  let myFunction = function(a, b) {return a * b}
  
  With Arrow:
  let myFunction = (a, b) => a * b;
*/
let greeting = function () {
  return "It's a beautiful day, make the most of it!";
};
let goldenRule = () => {
  return "Don't forget to be kind!";
};
console.log(greeting());
console.log(goldenRule());
/*
 If the function has only one statement that returns a value, 
 you can remove the brackets and the return keyword:

 let hello = () => "Hello World!";

 Note:
 This works only if the function has only one statement.
*/

/*
If you have parameters, you pass them inside the parentheses:
Arrow Function With Parameters:
  let hello = (val) => "Hello " + val;

Arrow Function Without Parentheses:
  let hello = val => "Hello " + val;

Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

You can only omit the return keyword and the curly brackets if the function is 
a single statement. 
Because of this, it might be a good habit to always keep them:

// This will not work
let myFunction = (x, y) => { x * y } ;

// This will not work
let myFunction = (x, y) => return x * y ;

// Only this will work
let myFunction = (x, y) => { return x * y };

*/

// What About this? //

// The handling of the 'this' keyword is also different in arrow functions
// compared to regular functions.
// In short, with arrow functions there are no binding of this.

// In regular functions the this keyword represented the object that called
// the function, which could be the window, the document, a button or whatever.

// With arrow functions the this keyword always represents the object that
// defined the arrow function.

// Let us take a look at two examples to understand the difference.

// Both examples call a method twice, first when the page loads, and once
// again when the user clicks a button.

// The first example uses a regular function, and the second example uses an
// arrow function.

// The result shows that the first example returns two different objects
// (window and button), and the second example returns the window object
// twice, because the window object is the "owner" of the function.

// Example:
// With a regular function this represents the object that calls the function

// Regular Function:
/*
hello = function () {
  document.getElementById("demo").innerHTML += this;
};

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

// Arrow Function:
// With an arrow function this represents the owner of the function

hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

*/

// Remember these differences when you are working with functions. Sometimes
// the behavior of regular functions is what you want, if not, use arrow
// functions.
