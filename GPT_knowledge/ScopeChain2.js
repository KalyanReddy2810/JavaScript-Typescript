
//JavaScript walks UP the chain to find variables — never down

let A = "level A (global)";

function level1() {
  let B = "level B"; //function level 1 scope variable

  function level2() {
    let C = "level C";

    function level3() {
      let D = "level D";
      // level3 walks the FULL chain: D → C → B → A
      console.log(D); // own scope ✓
      console.log(C); // parent scope ✓ (walked up)
      console.log(B); // grandparent scope ✓ (walked up)
      console.log(A); // great-grandparent (global) ✓
    }
    level3();
    // level2 CANNOT see D — it's a child scope
  }
  level2();
}
level1();