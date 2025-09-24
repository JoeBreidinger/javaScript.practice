//===VARIABLES===//

//JavaScript variables are containers for data.
//JavaScript variables can be declared in 4 ways:
/**
 * 1. let
 * 2. const
 * 3. var (not recommended)
 * 4. automatically (not recommended)
 */

let letVariable = "changeable";
// The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
let nameA = "valueA";
let nameB = "valueB",
  nameC = "valueC";

const constVariable = "constant";
//The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator
const name1 = "value1";
const name2 = "value2",
  name3 = "value3";
const name4 = "value4",
  name5 = "value5",
  /* …, */ nameN = "valueN";
//If a constant is an object, its properties can be added, updated, or removed.

var varVariable = "outdated";
// var declarations, wherever they occur in a script, are processed before any code within the script is executed. Declaring a variable anywhere in the code is equivalent to declaring it at the top.

// JavaScript Primitives

// A primitive data type is data type that can only store a single primitive value.

// JavaScript defines 7 types of primitive data types:

// Type:	    Example value:
// -string	    - "Hello"
// -number	    - 3.14
// -boolean	    - true
// -bigint	    - 12345678901234
// -null	    - null
// -undefined	- undefined
// -symbol	    - symbol
