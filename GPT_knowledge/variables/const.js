const PI = 3.14159;
// PI = 3; → TypeError: Assignment to constant variable ✗

// const with objects — binding is constant, contents are mutable
const user = { name: "Alice", age: 25 };
user.age = 26;          // ✓ mutating the object is allowed
console.log(user.age);  // 26
// user = {};            → TypeError ✗ (can't reassign the binding)

// const with arrays — can push/pop, cannot reassign
const nums = [1, 2, 3];
nums.push(4);           // ✓ allowed
console.log(nums);      // [1, 2, 3, 4]