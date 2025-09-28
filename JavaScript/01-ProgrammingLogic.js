//===JavaScript Programming Logic===//

console.log("JS Logic and Math");

/*
Programming logic in JavaScript, as in any programming language, refers to the 
fundamental principles and structures used to control the flow of a program and 
make decisions based on conditions. It's about how you instruct the computer to 
perform tasks and respond to different inputs.

Key elements of programming logic in JavaScript include:

1. Variables and Data Types: 
Defining and manipulating data using variables, 
which can hold various data types like numbers, strings, booleans, arrays, and objects.

2. Operators: Performing operations on data using various operators:
    - Arithmetic operators: +, -, *, /, % (modulo).
    - Assignment operators: =, +=, -=, etc.
    - Comparison operators: ==, ===, !=, !==, <, >, <=, >=.
    - Logical operators: && (AND), || (OR), ! (NOT).
*/
console.log(1 + 1); // 1 + 1 = 2 (arithmetic operator)
a = 3;
console.log(a); // a = 3 (assignment operator)
b = a += 1; // b = (a + 1)) so, b = 3 + 1
console.log(b); // 4 (assignment operator)
console.log(2 <= 2); // true (comparison operator)
console.log(2 > 1 && 2 > 3); // false (logical operator)
/*
3. Conditional Statements: Controlling program flow based on conditions:
    - if...else if...else: Executes different blocks of code depending on 
    whether a condition is true or false.
    - switch: Provides a more concise way to handle multiple possible conditions 
    for a single expression.

4. Looping Structures: Repeating blocks of code multiple times:
    - for loop: Iterates a specific number of times or over elements in an array.
    - while loop: Repeats as long as a condition remains true.
    - do...while loop: Similar to while, but guarantees at least 
    one execution of the loop body.
    - for...of loop: Iterates over iterable objects like arrays.
    - for...in loop: Iterates over enumerable properties of an object.

5. Functions: 
Encapsulating reusable blocks of code to perform specific tasks. 
Functions can take arguments and return values, promoting modularity and code organization.

6. Asynchronous Programming: 
Handling operations that don't execute immediately, such as network requests 
or timers, using:
    - Callbacks: Functions passed as arguments to be executed later.
    - Promises: Objects representing the eventual completion (or failure)
     of an asynchronous operation.
    - async/await: Syntactic sugar built on Promises to write
     asynchronous code that looks more synchronous.
*/

// Understanding and effectively utilizing these elements of programming logic
// are crucial for building robust and interactive applications with JavaScript.

//* Control Flow *//
/*
Control flow is the order in which the computer executes statements in a script.

Code is run in order from the first line in the file to the last line, unless the 
computer runs across the (extremely frequent) structures that change the control 
flow, such as conditionals and loops.

For example, imagine a script used to validate user data from a webpage 
form. The script submits validated data, but if the user, say, leaves a 
required field empty, the script prompts them to fill it in. To do this, 
the script uses a conditional structure or if...else, so that different code 
executes depending on whether the form is complete or not:

    if (isEmpty(field)) {
    promptUser();
    } else {
    submitForm();
    }

A typical script in JavaScript or PHP (and the like) includes many control 
structures, including conditionals, loops and functions. Parts of a script 
may also be set to execute when events occur.

For example, the above excerpt might be inside a function that runs when the 
user clicks the Submit button for the form. The function could also include 
a loop, which iterates through all of the fields in the form, checking each 
one in turn. Looking back at the code in the if and else sections, the lines 
promptUser and submitForm could also be calls to other functions in the script. 
As you can see, control structures can dictate complex flows of processing 
even with only a few lines of code.

Control flow means that when you read a script, you must not only read from 
start to finish but also look at program structure and how it affects order 
of execution.
*/

//=== Java Script Scope ===//
/*
In JavaScript, scope defines the accessibility and visibility of variables, 
functions, and other expressions within a program. It determines where a 
variable or expression can be referenced and used. JavaScript utilizes lexical 
scoping, meaning the scope of a variable is determined by its position in the 
code when it is written, not when it is called.

There are four main types of scope in JavaScript:

Global Scope:
Variables declared outside of any function or block are in the global scope.
They are accessible from anywhere in the entire program.
Using global variables excessively is generally discouraged as it can lead to 
naming conflicts and make code harder to maintain.

Module Scope:
When using ES modules (import/export), variables declared at the top level of 
a module are in module scope.
They are accessible within that specific module file but not globally or in 
other modules unless explicitly exported.

Function Scope:
Variables declared inside a function (using var, let, or const) are in 
function scope.
They are only accessible within that specific function and its nested 
functions.
var declarations are strictly function-scoped, meaning they are available 
throughout the entire function, even if declared within a 
block inside the function.

Block Scope:
Variables declared with let or const inside a block of code (defined by curly 
braces {}), such as if statements, for loops, or even just standalone blocks, 
are in block scope.
They are only accessible within that specific block where they are declared.
var does not adhere to block scope.

Scope Chain:
When JavaScript tries to access a variable, it first looks in the current 
scope. If the variable is not found, it then looks in the immediate parent 
scope, and so on, up the chain of nested scopes until it reaches the global 
scope. This process is called scope chaining. If the variable is not found in 
any scope, a ReferenceError will be thrown.

//Example:

    const globalVar = "I am global";

    function outerFunction() {
    // Function Scope (outerFunction)
    const outerVar = "I am in outerFunction";

    if (true) {
        // Block Scope
        let blockVar = "I am in a block";
        console.log(globalVar); // Accessible
        console.log(outerVar);  // Accessible
        console.log(blockVar);  // Accessible
    }

    // console.log(blockVar); // Error: blockVar is not defined here

    function innerFunction() {
        // Function Scope (innerFunction)
        const innerVar = "I am in innerFunction";
        console.log(globalVar); // Accessible
        console.log(outerVar);  // Accessible
        console.log(innerVar);  // Accessible
    }

    innerFunction();
    }

    outerFunction();
    // console.log(outerVar); // Error: outerVar is not defined here

*/

//===JavaScript Math Object===//
/*
The Math Object

The JavaScript Math object allows you to perform mathematical tasks.
The Math object is static. All methods and properties can be used 
-without- creating a Math object first.
(more about Objects later in the guide)

*/

//* Math Properties (Constants) *//

/*
The syntax for any Math property is : Math.property.
JavaScript provides 8 mathematical constants that can be accessed as Math properties:

    Math.E        = returns Euler's number
    Math.PI       = returns PI
    Math.SQRT2    = returns the square root of 2
    Math.SQRT1_2  = returns the square root of 1/2
    Math.LN2      = returns the natural logarithm of 2
    Math.LN10     = returns the natural logarithm of 10
    Math.LOG2E    = returns base 2 logarithm of E
    Math.LOG10E   = returns base 10 logarithm of E

*/
// Example:
console.log(Math.PI); // logs: 3.141592653589793

// Math Methods
// The syntax for Math any methods is : Math.method(number)

// Number to Integer
// There are 4 common methods to round a number to an integer:

// Math.round(x)	= Returns x rounded to its nearest integer:
console.log(Math.round(4.7)); // returns 5

// Math.ceil(x)	    = Returns x rounded up to its nearest integer:
console.log(Math.ceil(4.7)); // returns 5

// Math.floor(x)	= Returns x rounded down to its nearest integer:
console.log(Math.floor(4.7)); // returns 4

// Math.trunc(x)	= Returns the integer part of x:
console.log(Math.trunc(4.7)); // returns 4

// Math.sign(x)     = Returns if x is negative, null or positive:
console.log(Math.sign(-4)); // returns -1
// If x is positive it returns 1
// If x is negative it returns -1
// If x is zero, it returns 0

// Math.pow(x, y)      = Returns the value of x to the power of y:
console.log(Math.pow(4, 7)); // returns 4^7 = 16384

// Math.sqrt(x)     = Returns the square root of x:
console.log(Math.sqrt(4)); // returns 2

// Math.abs(x)     = returns the absolute (positive) value of x:
console.log(Math.abs(-4.7)); // returns 4.7

// Math.min() and Math.max()    = Returns the lowest or highest value in a list of arguments
console.log(Math.min(0, 150, 30, 20, -8, -200)); // returns -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // returns 150

// Math.random()   = Returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());
// returns random number greater than 0 but less than 1
console.log(Math.random() + 10);
// returns random number greater than 10 but less than 11
console.log(Math.random() * 10);
// returns random number greater than 0 but less than 10

// Math.random() is often used with Math.trunc() to use random number between a set
// of numbers.
// Example:
Math.floor(Math.random() * 11);
// Returns a random integer from 0 to 10:
console.log(Math.random() * 10);
// returns random integer from 0 to 9.999999...
// Math.random() always returns a number lower than 1.

//* A Proper Random Function *//

// As you can see from the examples above, it might be a good idea to create a proper
// random function to use for all random integer purposes.

// This JavaScript function always returns a random number between min (included)
// and max (excluded):
function getRndIntegerEx(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndIntegerEx(1, 100)); // random (rounded down) number from 1 to 99 (100 is excluded)

// This JavaScript function always returns a random number between min and max (both included):
function getRndIntegerInc(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndIntegerInc(1, 100)); // random (rounded down) number from 1 to 100
