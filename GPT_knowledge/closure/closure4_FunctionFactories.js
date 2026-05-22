//example 1: Closure for function factories (creating specialized functions)
function makeMultiplier(multiplier) {
  return function (x) {
    return x * multiplier; // 'multiplier' is captured in the closure
  };        
}

const double = makeMultiplier(2);       
const triple = makeMultiplier(3);

console.log("double(5):", double(5)); // 10 - double is a closure that captures the 'multiplier' variable from its makeMultiplier call, allowing it to create a specialized function for multiplying by 2.
console.log("triple(5):", triple(5)); // 15 - double and triple are closures that capture the 'multiplier' variable from their respective makeMultiplier calls, allowing them to create specialized functions for multiplying by 2 and 3.


//Example2 
function makeAdder(x) {
  // x is captured in the closure of each returned function
  return (y) => x + y;
}

const add5  = makeAdder(5);   // x = 5 locked in
const add10 = makeAdder(10);  // x = 10 locked in
const add100= makeAdder(100); // x = 100 locked in

console.log(add5(3));    // 8   (5+3)
console.log(add10(3));   // 13  (10+3)
console.log(add100(3));  // 103 (100+3)


//Examples3:
// More complex factory — builds tax calculators per country
function makeTaxCalc(rate) {
  return (price) => +(price * (1 + rate)).toFixed(2);
}
const indiaTax  = makeTaxCalc(0.18);
const usTax     = makeTaxCalc(0.08);
console.log("India GST on 1000:", indiaTax(1000));  // 1180
console.log("US tax on 1000:", usTax(1000));      // 1080


//Example palywright 
/*function createButtonLocator(page) {

  return function(buttonText) {
    return page.locator('button', {
      hasText: buttonText
    });
  };

}
const button = createButtonLocator(page);

await button("Login").click();
await button("Submit").click();
await button("Save").click();
*/

//Ecample 4
function createCounter(start = 0)  // start is captured in the closure, allowing each counter to have its own starting point
{

  let count = start; // count is also captured in the closure, allowing the counter to maintain its own state

  return function() {

    count++;

    return count; // the returned function is a closure that has access to both 'start' and 'count', allowing it to maintain and update its own count state independently of other counters created by createCounter

  };

}

const counter1 = createCounter(); //
const counter2 = createCounter(100);

console.log(counter1()); // 1 // counter1 starts at 0, so the first call increments it to 1
console.log(counter1()); // 2

console.log(counter2()); // 101 // counter2 starts at 100, so the first call increments it to 101
console.log(counter2()); // 102