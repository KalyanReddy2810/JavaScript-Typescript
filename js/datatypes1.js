// In this files we will explore different data types in JavaScript, 
// JavaScript has 7 primitive data types and 2 complex data types
// primitive data types----number, string, boolean, undefined, null, bigInt, symbol
//typeof operator is used to check the data type of a variable 
//type coercion is the automatic or implicit conversion of values from one data type to another (e.g., from string to number).

//primitive data types
var x = 5; // number
var userName = "John"; // string            
var isStudent = true; // boolean

// special data types
var undefinedVariable; 
var nullVariable = null;



// collection of values or complex data types  -- non-primitive data types
//Array : index based collection
var hobbies = ["reading", "coding", "gaming"]; //array of strings
var years = [1990, 1995, 2000]; //array of numbers
var mixedArray = [1, "hello", true, null]; // array with mixed data types  - not recommended but possible in JavaScript



//Object : key-value pair collection
var person = { name: "Alice", age: 30, city: "New York" }; // object with properties




// bigInt for large integers
var bigIntValue = 1234567890123456789012345678901234567890n;

// symbol for unique identifiers
var uniqueId = Symbol("id");


console.log(typeof x); // number
console.log(typeof userName); // string
console.log(typeof isStudent); // boolean
console.log(typeof undefinedVariable); // undefined

console.log(typeof nullVariable); // object (this is a quirk in JavaScript)
console.log(typeof hobbies); // object (arrays are a type of object)
console.log(typeof person); // object

console.log(typeof bigIntValue);    // bigint
console.log(typeof uniqueId);      // symbol

console.log(x + userName); // "5John" Type coercion example
console.log(isStudent + 10); // 11 Type coercion example (number + boolean)
console.log(isStudent + userName); // "trueJohn" Type coercion example (string + boolean)

// == vs ===
console.log(5 == "5"); // true (loose equality, type coercion)
console.log(5 === "5"); // false (strict equality, no type coercion)