//hoisting

console.log(a); // undefined, because var declarations are hoisted to the top of their scope and initialized with undefined
var a = 5;
console.log(a); // 5

//console.log(b); // ReferenceError: Cannot access 'b' before initialization, because let declarations are hoisted but not initialized
let b = 10;
console.log(b); // 10


//console.log(c); // ReferenceError: Cannot access 'c' before initialization, because const declarations are hoisted but not initialized
const c = 15;
console.log(c); // 15


//block scope
if (true) {
    var d = 20;
    let e = 25;
    const f = 30;
    console.log(d); // 20, because var declarations are function-scoped and can be accessed within the block
    console.log(e); // 25, because let declarations are block-scoped and can be accessed within the block
    console.log(f); // 30, because const declarations are block-scoped and can be accessed within the block
}
console.log(d); // 20, because var declarations are function-scoped and can be accessed outside the block
// console.log(e); // ReferenceError: e is not defined, because let declarations are block-scoped and cannot be accessed outside the block
// console.log(f); // ReferenceError: f is not defined, because const declarations are block-scoped and cannot be accessed outside the block    


//function scope
function testScope() {
    var g = 35;
    let h = 40;
    const i = 45;
    console.log(g); // 35, because var declarations are function-scoped and can be accessed within the function
    console.log(h); // 40, because let declarations are block-scoped but can be accessed within the function
    console.log(i); // 45, because const declarations are block-scoped but can be accessed within the function
}

//console.log(g); // ReferenceError: g is not defined, because var declarations are function-scoped and cannot be accessed outside the function
// console.log(h); // ReferenceError: h is not defined, because let declarations are block-scoped and cannot be accessed outside the function
// console.log(i); // ReferenceError: i is not defined, because const declarations are block-scoped and cannot be accessed outside the function 
testScope();


//Re-declaration and Re-assignment
var j = 50;
var j = 55;
console.log(j); // 55, because var declarations can be re-declared and re-assigned

let k = 60;
// let k = 65; // SyntaxError: Identifier 'k' has already been declared, because let declarations cannot be re-declared in the same scope
k = 65; // Re-assignment is allowed
console.log(k); // 65

const l = 70;
// const l = 75; // SyntaxError: Identifier 'l' has already been declared, because const declarations cannot be re-declared in the same scope
 // l = 75; // TypeError: Assignment to constant variable, because const declarations cannot be re-assigned
console.log(l); // 70



//Temporal Dead Zone (TDZ)
try {
    console.log(m); // ReferenceError: Cannot access 'm' before initialization, because m is in the temporal dead zone  
    let m = 80;
    
} catch (e) {
    console.log("TDZ Error:", e.message);
}

try {
    console.log(n); // ReferenceError: Cannot access 'n' before initialization, because n is in the temporal dead zone
    const n = 85;
} catch (e) {
    console.log("TDZ Error:", e.message);
}


//const with objects and arrays
const obj = { name: "Alice", age: 30 };
obj.age = 31; // Allowed, because we can mutate the contents of a const object
console.log(obj.age); // 31 
const arr = [1, 2, 3];
arr.push(4); // Allowed, because we can mutate the contents of a const array
console.log(arr); // [1, 2, 3, 4]   

