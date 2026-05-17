var x = 7;
function display() {
    var y = 10;
    let z = 15;
    console.log("Inside function: x =", x); // Accessing global variable
    console.log("Inside function: y =", y); // Accessing local variable
}
display();
console.log("Outside function: x =", x); // Accessing global variable
//console.log("Outside function: y =", y); // ReferenceError: y is not defined, because y is a local variable and cannot be accessed outside the function
//console.log("Inside function: z =", z); // ReferenceError: z is not defined

//

console.log("------------------")
//console.log(a); // ReferenceError: a is not defined, because a is declared with let and is in the temporal dead zone until it is initialized


console.log("------------------")
console.log(k);
//console.log(I);
var k = 5; // variable declared with var is hoisted and initialized with undefined, so it will not throw an error but will log undefined
let I = 10; // variable declared with let is hoisted but not initialized, so it will throw a ReferenceError if accessed before initialization


console.log("--------function hosting----------")

//function hoisting
//example 1
displayMessage(); // Function hoisting allows us to call the function before its declaration
console.log(displayMessage); // [Function: displayMessage] - the function declaration is hoisted and available before its definition
function displayMessage() {
    console.log("Hello, this is a hoisted function!");
}

//example 2
//greet(); // TypeError: greet is not a function, because greet is a variable that is hoisted but not initialized, so it will be undefined at the time of the call
var greet = function() {
    console.log("Hello, this is a function expression!");
}
greet(); // Now it works because greet is assigned the function expression after the hoisting, so it is no longer undefined when we call it.
console.log(greet); // [Function: greet] - the function expression assigned to greet variable



//example 3
function name(){
    return "kalyan";
}
name(); // "kalyan" - function hoisting allows us to call the function before its declaration
var k = name(); // "kalyan" - the return value of the function name is assigned to variable k
console.log(k); // "kalyan" - the value of k is the return value of the function name

var s = name; // assigning the function name itself to variable s, not calling it
console.log(s); // [Function: name] - the function itself, not called
console.log(s()); // "kalyan" - calling the function s which is the same as name() due to function hoisting
