//Basic callback example

function greets(callback){
    console.timeLog("Greeting function executed");
    callback();
}

function sayHello(){
    console.log("Hello, World!");
}  

function sayHi(){
    console.log("Hi, there!");
}



greets(sayHello);
greets(sayHi);





//callback with parameters
function test1(var1, t){
    console.log("test1 function executed with var1: " + var1);
    t(var1);
}

function test2(var1){
    console.log("test2 function executed with var1: " + var1);
}

test1("Hello", test2);




//callback with objects
function processData(data, callback){
    console.log("Processing data: " + data.name);
    callback(data);
}
function displayData(data){
    console.log("Data received: " + data.name);
}       

const myData = { name: "kalyan", age: 30 };
processData(myData, displayData);



//callback with arrays
function processArray(arr, callback){
    console.log("Processing array: " + arr);
    callback(arr);
}   
function displayArray(arr){
    console.log("Array received: " + arr);
}   
const myArray = [1, 2, 3, 4, 5];
processArray(myArray, displayArray);



//callback with asynchronous operations
function asyncOperation(callback){
    setTimeout(function(){  
        console.log("Asynchronous operation completed");
        callback();
    }, 2000);
}       
function afterAsync(){
    console.log("Callback executed after asynchronous operation");
}   
asyncOperation(afterAsync);



//callback with setTimeout
function cheif(item, waiter){
    setTimeout(()=>{
        const menu = ["idly", "dosa", "vada","pongal","upma", "poha", "uggani", "puri"];
        if(menu.includes(item)){
            waiter(item + " is available , will take 15 minutes to prepare");
        }else{
            waiter(`Sorry Sir, ${item} is not available`);
        }
    })
}

function waiter(message){
    console.log(message);
}

cheif("uggani", waiter);