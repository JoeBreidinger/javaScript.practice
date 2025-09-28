//===Loops===//

console.log("Loops");
console.log("Loops can execute a block of code a number of times.");

// Loops are handy, if you want to run the same code over and over again,
// each time with a different value.

// You can think of a loop as a computerized version of the game where you
// tell someone to take X steps in one direction, then Y steps in another.
// For example, the idea "Go five steps to the east" could be expressed this
// way as a loop:
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
/*
There are many different kinds of loops, but they all essentially do the same 
thing: they repeat an action some number of times. (Note that it's possible 
that number could be zero!)

The various loop mechanisms offer different ways to determine the start and 
end points of the loop. There are various situations that are more easily 
served by one type of loop over the others.

The statements for loops provided in JavaScript are:

    - for statement
    - while statement
    - do...while statement
    - labeled statement
    - break statement
    - continue statement
    - for...in statement
    - for...of statement

*/

//* The For Loop *//

// The for statement creates a loop with 3 optional expressions:
//  Syntax:
//     for (expr1; expr2; expr) {
//     code block to be executed
//     }

// exp1: is executed one time before the execution of the code block.
// exp2: defines the condition for executing the code block.
// exp3: is executed every time the code block has been executed

// Example:
(forEx) => {
  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
};

// exp1 sets a variable before the loop starts (let i = 0).
// exp2 defines the condition for the loop to run (i must be less than 5).
// exp3 increases a value (i++) each time the code block has been executed

//* The While Loop *//

// The while loop loops through a block of code as long as a specified
// condition is true.
//  Syntax:
//      while (condition) {
//      code block to be executed
//      }

// Example:
// In the following example, the code in the loop will run, over and over
// again, as long as a variable (i) is less than 10:
(whileEx) => {
  while (i < 10) {
    text += "The number is " + i;
    i++;
  }
};
// Note:
// If you forget to increase the variable used in the condition, the loop will
// never end. This will crash your browser.

//* The Do While Loop *//

// The do while loop is a variant of the while loop.
// The do while loop will execute the code block once, before checking if the
// condition is true, then it will repeat the loop as long as the condition is true.
//  Syntax:
//      do {
//      code block to be executed
//      }
// while (condition);

// The do while runs at least once, even if the condition is false from the start.
// This is because the code block is executed before the condition is tested.

//Example:
(doWhileEx) => {
  do {
    text += "The number is " + i;
    i++;
  } while (i < 10);
};

// Do not forget to increase the variable used in the condition, otherwise
// the loop will never end!

//* Labeled Statement *//
/*
A label provides a statement with an identifier that lets you refer to it 
elsewhere in your program. For example, you can use a label to identify a 
loop, and then use the break or continue statements to indicate whether a 
program should interrupt the loop or continue its execution.
*/
// The syntax of the labeled statement looks like the following:
//     label:
//      statement

/*
The value of label may be any JavaScript identifier that is not a reserved 
word. The statement that you identify with a label may be any statement. For 
examples of using labeled statements, see the examples of break and continue 
below.
*/

//* Break statement *//
/*
Use the break statement to terminate a loop, switch, or in conjunction with a 
labeled statement.

    - When you use break without a label, it terminates the innermost 
    enclosing while, do-while, for, or switch immediately and transfers 
    control to the following statement.
    - When you use break with a label, it terminates the specified labeled 
    statement.
*/
// The syntax of the break statement looks like this:
//     break;
//      break label;

// Example:
(breakEx) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
      break;
    }
  }
};
//  1. The first form of the syntax terminates the innermost enclosing loop
// or switch.
//  2. he second form of the syntax terminates the specified
// enclosing labeled statement.

// Continue statement //
/*
The continue statement can be used to restart a while, do-while, for, or label statement.

    - When you use continue without a label, it terminates the current 
    iteration of the innermost enclosing while, do-while, or for statement and 
    continues execution of the loop with the next iteration. In contrast to 
    the break statement, continue does not terminate the execution of the loop 
    entirely. In a while loop, it jumps back to the condition. In a for loop,
    it jumps to the increment-expression.
    - When you use continue with a label, it applies to the looping statement 
    identified with that label.

*/
// The syntax of the continue statement looks like the following:
//     continue;
//      continue label;

// Example:
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// Logs:
// 1 3 7 12

//* for...in statement *//

// The for...in statement iterates a specified variable over all the
// enumerable properties of an object. For each distinct property, JavaScript
// executes the specified statements. A for...in statement looks as follows:

//    for (variable in object)
//    statement

// Example
// The following function takes as its argument an object and the object's
// name. It then iterates over all the object's properties and returns a
// string that lists the property names and their values.

function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}

// For an object car with properties make and model, result would be:

// car.make = Ford
// car.model = Mustang

//* for...of statement *//

// The for...of statement creates a loop Iterating over iterable objects
// (including Array, Map, Set, arguments object and so on), invoking a custom
// iteration hook with statements to be executed for the value of each
// distinct property.
//    for (variable of iterable)
//    statement

// The following example shows the difference between a for...of loop and a
// for...in loop. While for...in iterates over property names, for...of
// iterates over property values:
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7

// The for...of and for...in statements can also be used with destructuring.
// For example, you can simultaneously loop over the keys and values of an
// object using Object.entries().
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2

//=== Loop Scope ===//

/*
Example 1:
    let i = 5;

    for (i = 0; i < 10; i++) {
    some code
    }

// Here i is 10
// In this example, let i = 5; is declared outside the loop.

Example 2:
    let i = 5;

    for (let i = 0; i < 10; i++) {
    some code
    }

// Here i is 5
// In this example, let i = 0;, is declared inside the loop.

When a variable is declared with let or const inside a loop, it will only be visible within the loop.
*/
