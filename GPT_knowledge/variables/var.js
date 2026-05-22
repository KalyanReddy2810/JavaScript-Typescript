// Hoisting — var declaration is moved to top automatically
console.log(x); // undefined (no error!) — declaration hoisted
var x = 10;
console.log(x); // 10

// var LEAKS out of blocks — a common source of bugs
if (true) {
  var leaked = "I escaped the block!";
}
console.log(leaked); // "I escaped the block!" — bad!

// var can be re-declared — no error
var name = "Alice";
var name = "Bob";   // silent overwrite — dangerous
console.log(name);  // "Bob"