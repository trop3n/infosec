// anonymous function
function() {};

// globally declared named function
a = function() {};

// block scoped named function
let a = function() {};

// block scoped named function without reassignment
const a = function() {};

// anonymous function inheriting parent context
() => {};

// immediately invoked function expression (IIFE)
(function() { })();