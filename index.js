const input = require('readline-sync');

// Ask for name
let name = input.question("What is your name? ");
console.log("Hey " + name + "! Let’s test your knowledge.\n");

// Question 1
let q1 = input.question("What data type is 'hello'? ");
console.log("You said:", q1);

// Question 2 (number question)
let q2 = input.question("What is 5 + 5? ");
console.log("You said:", q2);

// Question 3
let q3 = input.question("Is 0 truthy or falsy? ");
console.log("You said:", q3);

// Question 4
let q4 = input.question("What is '5' + 2 in JavaScript? ");
console.log("You said:", q4);

// Question 5
let q5 = input.question("What does typeof 10 return? ");
console.log("You said:", q5);

console.log("\nThanks for playing, " + name + "!");