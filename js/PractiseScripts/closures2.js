//ex:1 // trying to access local variables outside the function
function outer(){
    var a = 10;
    let b = 20;
    const c = 30;
}

//console.log(a); // ReferenceError: a is not defined, because a is a local variable and cannot be accessed outside the function
//console.log(b); // ReferenceError: b is not defined, because b is a local variable and cannot be accessed outside the function
//console.log(c); // ReferenceError: c is not defined, because c is a local variable and cannot be accessed outside the function

//ex2:
//Access global variables and local variables inside a nested function
var x = 5;
let y = 10;
const z = 15;
function outer1(){
    console.log(x); // 5 - accessing global variable
    console.log(y); // 10 - accessing global variable
    console.log(z); // 15 - accessing global variable

    var x1 = 1;
    let y1 = 2;
    const z1= 3;
    function inner1(){
        console.log('---------------');
        console.log(x); // 5 - accessing global variable
        console.log(y); // 10 - accessing global variable
        console.log(z); // 15 - accessing global variable
        console.log(x1); // 1 - accessing local variable
        console.log(y1); // 2 - accessing local variable
        console.log(z1); // 3 - accessing local variable
    }
    inner1();
}
outer1();

console.log("------------------")
//console.log(x1); // ReferenceError: x1 is not defined, because x1 is a local variable and cannot be accessed outside the function
//console.log(y1); // ReferenceError: y1 is not defined, because y1 is a local variable and cannot be accessed outside the function
//console.log(z1); // ReferenceError: z1 is not defined, because z1 is a local variable and cannot be accessed outside the function


//ex3 // outer function returning inner function, which forms a closure that retains access to the outer function's variables even after the outer function has finished executing
//function with Parameters and closure
function outer3(k1){

    function inner3(k2){
        console.log(k1); // 10 - accessing variable from outer function
        console.log(k2); // 20 - accessing variable from inner function
    }
    return inner3;
}

outer3(10)(20); // calling outer3 with 10 and then calling the returned inner3 with 20, which will log both k1 and k2 values


//ex4://
//function without parameters and closure
// return a function that forms a closure and retains access to the outer function's variable
function outer6(){
    let a = 200;
    function inner6(){
        console.log(a); // 200 - accessing variable from outer function
    }
    return inner6;
}

var closureFunction = outer6(); // calling outer6 and storing the returned inner6 function in closureFunction variable
closureFunction(); // 200 - calling the closureFunction which retains access to variable a from outer6 function due to closure


//ex5: 
//return a function that forms a closure and retains access to the outer function's variable
function outer7(){
    let a = 100;
    return function inner7(){
        console.log(a); // 100 - accessing variable from outer function
    }   
}

var closureFunction2 = outer7(); // calling outer7 and storing the returned inner7 function in closureFunction2 variable
closureFunction2(); // 100 - calling the closureFunction2 which retains access to variable a from outer7 function due to closure