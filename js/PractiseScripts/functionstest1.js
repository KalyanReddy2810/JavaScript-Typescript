
function t(){
    console.log("Hello");
}

t();
var tt = t(); // if only console statement is present in the function, it will return undefined by default & will execute the console statement inside the function, but will not return any value to tt variable
console.log(tt);// undefined, because the function t does not return anything
console.log(typeof tt); // undefined

console.log("-------------------------------")



function test(){
    return "Hello, World!";
}
var t1 = test(); // calling the function test and storing its return value in t1 variable & will not  execute the console statement
console.log(t1); // "Hello, World!" - the return value of the function test
console.log(typeof t1); //string

console.log("------------------")


var t2 = test; // assigning the function test itself to t2 variable, not calling it, so t2 will reference the function test, but will not execute it
console.log(t2); // [Function: test] - the function itself, not called
console.log(typeof t2); // function
console.log(t2()); // "Hello, World!" - calling the function t2 which is the same as test()



console.log("------------------")

//short hand/Arrow function syntax
t3 = () => {
    return "Hello,arrow function!";
}
console.log(t3); // [Function: t3] - the arrow function itself, not called
console.log(typeof t3); // function
console.log(t3()); // "Hello, World!" - calling the arrow function t3
function testscope(){
    var c = 3; // local variable, only accessible within this function
}
//console.log(c); // ReferenceError: c is not defined, because c is not accessible outside the function  

let a =1; 
let b = 2;
function sum(){
    return a + b;
}

console.log(sum()); // 3 - the sum of


//FUNCTION 

console.log('================================================');
//outer3("Hello, World!"); hoisted function declaration
//function with Parameters and closure
function outer3(k1){
    console.log("Inside outer3 function with parameter k1:", k1);
}
outer3("Hello, World!");


console.log('================================================');
//outer4("Hello, World!");    // ReferenceError: Cannot access 'outer4' before initialization, because outer4 is a function expression and is not hoisted like function declarations
//function expression with parameter and closure

const outer4 = function(k1){
    console.log("Inside outer4 function expression with parameter k1:", k1);
}
outer4("Hello, World!");    

console.log('================================================');
//arrow function with parameter and closure
//outer5("Hello, World!"); // ReferenceError: Cannot access 'outer5' before initialization, because outer5 is an arrow function and is not hoisted like function declarations
const outer5 = (k1) => {
    console.log("Inside outer5 arrow function with parameter k1:", k1);
}   
outer5("Hello, World!");
