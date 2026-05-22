let color = "blue"; // outer color

function paintRoom() {
  let color = "red"; // SHADOWS the outer color
  console.log(color); // "red" — inner shadows outer
}

function printColor() {
  console.log(color); // "blue" — sees global (no shadow here)
}

paintRoom();   // "red"
printColor();  // "blue"
console.log(color); // "blue" — global unchanged