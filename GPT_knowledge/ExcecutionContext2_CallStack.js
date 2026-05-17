// Call Stack grows as functions call each other:
// [global] → [global, a] → [global, a, b] → [global, a, b, c]
// Then shrinks as functions return (LIFO — last in, first out)

function c() { console.log("c() running — stack deepest"); }
function b() { console.log("b() calling c()"); c(); console.log("b() resumed"); }
function a() { console.log("a() calling b()"); b(); console.log("a() resumed"); }

a(); // triggers chain: a → b → c → b (resumes) → a (resumes)