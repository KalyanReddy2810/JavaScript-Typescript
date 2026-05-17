//Example1: Basic closure example
// STEP 1: outer() is called — creates execution context with 'secret'
function outer() {
  let secret = "I am the secret value";
  // STEP 2: inner() is defined here — it packs 'secret' in its backpack
  function inner() {
    console.log("inner() found secret:", secret);
  }
  return inner; // STEP 3: return inner (not inner()!)
}
// outer() finishes — normally 'secret' would be garbage collected
// BUT inner still references it, so it STAYS ALIVE
const myClosure = outer(); // myClosure = the inner function

console.log("outer() has finished...");
myClosure(); // inner still has 'secret' in its backpack!




//Exmple 2: closure with return value
// if inner() with return is used, the closure can also modify the variable:
function outer2() {
  let secret2 = "I am the secret value2";
    function inner() {  
    return secret2; // inner can access secret2
  } 
    return inner(); // return the result of inner() which is secret2
}
const myClosure2 = outer2();   
console.log("outer2() has finished...");
console.log("myClosure2() returns:", myClosure2); // inner can still access secret2




