// GLOBAL SCOPE — accessible everywhere
var globalVar = "global";

function outer() {
  // FUNCTION SCOPE — accessible only inside outer()
  let outerVar = "outer";

  if (true) {
    // BLOCK SCOPE — accessible only inside this if block
    let blockVar = "block";
    var funcVar  = "func (var leaks!)";
    console.log(globalVar); // ✓ can see global
    console.log(outerVar);  // ✓ can see outer function
    console.log(blockVar);  // ✓ own block
  }

  console.log(funcVar);    // ✓ var leaked out of block
  // console.log(blockVar) → ReferenceError (let stayed in block)
}
outer();