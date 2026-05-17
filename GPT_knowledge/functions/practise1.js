
// function Declaration
function test(){
    console.log("test");
}
test();

function test1(){
return console.log("test1")
}
test1();


//Function with parameter
function test2(num){
    return num * num
}
let x =test2(10)
console.log(x)


//Function Expression with paramter & return 

const test3 = function(a,b){
    return a*b
}
const final = test3(5,6)
console.log(final)


//Arror Functions
const test4 = (c,d) => {return c+d};
console.log(test4(100,200));


const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 3));



//Default parameter

function test5(name = "kalyan"){
    return `My Name is ${name}`
}
console.log(test5())
console.log(test5("sush"))


//Rest Parameters
function sum(...numbers){
   return numbers.reduce((a, b) => a + b);
}
console.log(sum(1,2,3,4));



//constructor function

const constfun = new Function('e','f','return e-f' );
const sub = constfun(100,40)
console.log(sub)
