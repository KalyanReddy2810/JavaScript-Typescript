//primitive data types are immutable, meaning their values cannot be changed after they are created. When you assign a primitive value to a variable, it holds the actual value. When you assign that variable to another variable, it creates a copy of the value. Changes to one variable do not affect the other variable.

var a = 10; // a holds the value 10
var b = a; // b is assigned the value of a, which is 10
b = 20; // b is reassigned to 20, but a remains 10
console.log(a); // logs 10
console.log(b); // logs 20

//varible  - differece reference and value assignment

//complex data types (objects and arrays) are mutable, meaning their values can be changed after they are created. When you assign an object or array to a variable, it holds a reference to the location in memory where the object or array is stored. When you assign that variable to another variable, it creates a reference to the same object or array. Changes to one variable will affect the other variable because they both reference the same underlying data.
var arr1 = [1, 2, 3]; // arr1 holds a reference to the array [1, 2, 3]
var arr2 = arr1; // arr2 is assigned the reference to the same array as arr1
arr2.push(4); // arr2 modifies the array by adding 4, which also affects arr1 because they reference the same array
console.log(arr1); // logs [1, 2, 3, 4]
console.log(arr2); // logs [1, 2, 3, 4]

// pointing the same reference to a new array
