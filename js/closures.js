function test1(a){
    function innerFunction(){
        console.log(a); 
    }
    return innerFunction;
}
var closureFunction = test1(10);
var closureFunction2 = test1(20);

closureFunction(); // 10
closureFunction2(); // 20

// In this example, the innerFunction forms a closure that captures the variable 'a' from its outer scope (test1 function). 
// Even after test1 has finished executing, the innerFunction retains access to 'a', allowing it to log the value 10 when called.



//example 2: closure with state 
function test2(){
    var count = 0; // this variable is captured by the closure
    function innerFunction2(){
        count++; // modifies the captured variable
        console.log(count); // logs the updated count
    }
    return innerFunction2;
        
}

var counter = test2();
counter();
counter();
counter();

var counter2= test2();
counter2();
counter();
counter2();

//each closure maintains its own state, so counter and counter2 have separate counts.