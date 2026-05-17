function t1() {
    a = 1;
    b= 2;
    function t2(){
        return a + 1;
        
    } 
    return t2;
}

t3 = t1();
console.log(t3()); // 2 - the return value of t1 which is the result of t2() which returns a + 1, where a is 1

// function + lexical scope = closure


//example2 

function outer(){
    let count = 0;  
    function inner(){
        count++;
        return count;
    }       
    return inner;
}       
let counter = outer(); // counter is now a closure that has access to the count variable in the outer function's scope
console.log("**************************")
console.log(counter());
console.log(counter());
console.log(counter()); // 3 - counter retains access to the count variable and can modify it, demonstrating closure



//example3 
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }   
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2 - counter1 is a closure that has access to the count variable in makeCounter's scope, allowing it to maintain state between calls