// When multiply(4, 5) is called, JS creates an EC:
// ExecutionContext = {
//   variableEnv: { a: 4, b: 5, result: undefined → 20 },
//   outerEnvRef: → global scope
// }

function multiply(a, b) { //a and b are created in this EC
  let result = a * b;   // result is created in this EC
  console.log(result);  // 20
  return result;        // EC destroyed after this return
}
// After multiply() returns:
// result, a, b are ALL gone from memory
multiply(4, 5); //



let x = 10; // x is created in the global scope EC
function foo() {
  let y = 20; // y is created in foo()'s EC
  console.log(x); // 10 (x is accessible via outerEnvRef)
  console.log(x+y); // 30 (x and y are both accessible)
  }

  foo(); // triggers foo() EC creation, which has access to x via outerEnvRef
 // console.log(y); // ReferenceError: y is not defined (y is not in global scope)
  console.log(x); // 10 (x is still accessible in global scope)

