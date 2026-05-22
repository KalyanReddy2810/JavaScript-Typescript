let env = "global";

function outer() {
  let env = "outer";
  // inner is DEFINED inside outer — its lexical env is outer's scope
  function inner() {
    console.log(env); // "outer" — uses WHERE it was CREATED
  }
  return inner;
}

const fn = outer();
// fn is now called from GLOBAL scope
// But it still uses the scope where it was DEFINED (inside outer)
fn(); // "outer" — not "global"!