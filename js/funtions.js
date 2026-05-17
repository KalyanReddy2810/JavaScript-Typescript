
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
console.log(c); // ReferenceError: c is not defined, because c is not accessible outside the function  

let a =1; 
let b = 2;
function sum(){
    return a + b;
}

console.log(sum()); // 3 - the sum of

