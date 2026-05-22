// 1. Function Declaration — HOISTED, available before written
greetDecl("Alice"); // works even before the function is defined!
function greetDecl(name) {
  console.log("Declaration: Hello,", name);
}

// 2. Function Expression — NOT hoisted, stored in variable
const greetExpr = function(name) {
  console.log("Expression: Hello,", name);
};
greetExpr("Bob");

// 3. Arrow Function — concise, no own 'this' (important for closures)
greetArrow("kalyan"); // error: Cannot access 'greetArrow' before initialization — because of temporal dead zone
const greetArrow = (name) => {
  console.log("Arrow: Hello,", name);
};
greetArrow("Carol");

// Arrow with implicit return (single expression)
//console.log("square(15):", square(15)); // ReferenceError: Cannot access 'square' before initialization — because of temporal dead zone
const square = n => n * n;
console.log("square(5):", square(5)); // 25