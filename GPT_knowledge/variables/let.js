// let respects BLOCK scope — stays inside {}
if (true) {
  let blockVar = "I stay inside!";
  console.log(blockVar); // "I stay inside!" ✓
}
// console.log(blockVar); → ReferenceError ✗

// Temporal Dead Zone (TDZ) — cannot use before declaration
try {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 20;
} catch(e) {
  console.log("TDZ Error:", e.message);
}

// let CANNOT be re-declared in same scope
let score = 100;
// let score = 200; //SyntaxError: Identifier 'score' has already been declared
score = 200; // reassignment is fine ✓
console.log(score); // 200