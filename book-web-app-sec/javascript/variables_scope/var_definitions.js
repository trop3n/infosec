// global definition
age = 25;

// function scoped
var age = 25;

// block scoped
let age = 25;

// block scoped, without reassignment
const age = 25;

// define global integer
age = 25;

// direct call (returns 25)
console.log(age);

// call via pointer on window (returns 25)
console.log(window.age);