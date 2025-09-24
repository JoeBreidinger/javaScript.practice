JavaScript Fundamentals Practice

This file is a hands-on exploration of core JavaScript concepts, including:

- Variable declarations and scope
- Object and array creation and manipulation
- Function syntax, parameters vs arguments
- Comparison operators and logical conditions
- Looping structures (for, while)
- Basic programming logic and control flow
- DOM interaction and event handling

The goal is to reinforce foundational skills through direct experimentation and annotated examples. Ideal for beginners building confidence or intermediate learners reviewing key patterns - but overall, kept direct and concise.

==========

📜 What Is JavaScript?
JavaScript is a high-level, dynamic programming language that powers interactivity on the web.
It runs in the browser and lets developers create responsive, animated, and data-driven experiences — from dropdown menus to full-blown web apps.

🧬 Where It Came From
JavaScript was created in 1995 by Brendan Eich at Netscape (in just 10 days).
Originally called Mocha, then LiveScript, it was renamed to JavaScript to ride the wave of Java’s popularity (though the two languages are unrelated).
It was standardized as ECMAScript by ECMA International in 1997, ensuring consistent behavior across browsers.

🚀 How It’s Used Today
JavaScript is everywhere:

- Web development: DOM manipulation, event handling, animations
- Frameworks: React, Vue, Angular for building complex UIs
- Server-side: Node.js enables backend development with JS
- Mobile apps: Tools like React Native let you build cross-platform apps
- Desktop apps: Electron powers apps like VS Code and Slack
- APIs and automation: Fetching data, scripting tasks, building bots

It’s now one of the most widely used languages in the world — essential for front-end development and increasingly useful across the full stack.

==========

// JavaScript Values //
The JavaScript syntax defines two types of values:

- Literals (Fixed values)
- Variables (Variable values)

// JavaScript Literals //
The most important syntax rules for literals (fixed values) are:

- Numbers are written with or without decimals: 10.50 || 1001
- Strings are text, written within double or single quotes: "John Doe" || 'John Doe'

// JavaScript Keywords //
JavaScript keywords are used to defines actions to be performed.

The let and const keywords create variables: let x = 5; || const name = "John";

Note:
JavaScript keywords are case-sensitive.

JavaScript does not interpret LET or Let as the keyword let.Note

// JavaScript Variables //
Variables are containers for storing data values.
Variables must be identified with unique names.

Define x as a variable:
let x;

Assign the value 6 to x:
x = 6;

// JavaScript Identifiers //
An identifier is the name you give to a variable.

Rules for identifiers:

- Must start with a letter, \_, or $
- Can contain digits after the first character
- Cannot be a reserved keyword (let, const, if, etc.)
- Are case-sensitive

JavaScript assignment operators (=) assign values to variables: let x = 5; || let y = 6; || let sum = x + y;

JavaScript uses arithmetic operators ( + - _ / ) to compute values: (5 _ 10)

// JavaScript Expressions //
An expression is a combination of values, variables, and operators, which computes to a value.

Examples:

(5 + 6) \_ 10 evaluates to 110: (5 + 6) \* 10

Expressions can also contain variable: x \* 10

// JavaScript is Case Sensitive //
JavaScript identifiers are case sensitive.

The variables lastName and lastname are different variables:
let lastName = "Doe"; && let lastname = "Peterson";

//JavaScript and Camel Case//
Historically, programmers have used different ways of joining multiple words into one variable name:

Hyphens:
first-name, last-name, master-card, inter-city.

-Hyphens are not allowed in JavaScript - They are reserved for subtractions-

Underscore:
first_name, last_name, master_card, inter_city.

Upper Camel Case (Pascal Case):
FirstName, LastName, MasterCard, InterCity.

Lower Camel Case:
firstName, lastName, masterCard, interCity.

Note:
JavaScript programmers tend to use lower camel case.
