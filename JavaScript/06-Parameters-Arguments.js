//===Function Parameters and Arguments===//

console.log("Parameters and Arguments");
/*
Earlier, we learned that functions can have parameters:

    function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
    }

Function parameters are the names listed in the function definition.
Function arguments are the real values passed to (and received by) the function.

Parameters:
- These are placeholders defined in a function declaration.
- Think of them as labels for the values the function expects.

Arguments
- These are the actual values you pass into the function when you call it.
- The Argument is the actual input for the function.

Remember, functions are, in the simplest terms, like a recipe: 

    - The recipe (the function) gives instructions. The code inside the function body tells JavaScript what to do.

    - Ingredients (parameters) are optional. A function can take inputs, called parameters, which can change what the function does.

    - The finished dish (the return value) is the result. A function can calculate a value and give it back to you using the return keyword.

Parameter Rules:

- JavaScript function definitions do not specify data types for parameters.
- JavaScript functions do not perform type checking on the passed arguments.
- JavaScript functions do not check the number of arguments received.
*/

//* Default Parameters *//

// If a function is called with missing arguments (less than declared),
// the missing values are set to undefined.

// Sometimes this is acceptable, but sometimes it is better to assign
// a default value to the parameter.
// ES6 allows function parameters to have default values

// Example:
// If y is not passed or undefined, then y = 10.
function myFunction(x, y = 10) {
  return x + y;
}
console.log(myFunction(5)); // 5 (argument) + 10 (default parameter) = 15

//* Function Rest Parameter *//

// The rest parameter (...) allows a function to treat an
// indefinite number of arguments as an array:

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x); // sum = 326

//* The Arguments Object *//

// JavaScript functions have a built-in object called the arguments object.

// The argument object contains an array of the arguments used
// when the function was called (invoked).

// This way you can simply use a function to find (for instance)
// the highest value in a list of numbers:
y = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(y);

// Or create a function to sum all input values:
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// Note: If a function is called with too many arguments (more than declared),
// these arguments can be reached using the arguments object.

// Arguments are Passed by Value //
/*
The parameters, in a function call, are the function's arguments.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.
*/

// Objects are Passed by Reference //
/*
In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.
*/
