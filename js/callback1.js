
//Example of callback function
function greeting(name) {
    console.log('Hello ' + name);
}
function processUserInput(callback) {
    var name = "kalyan";
    callback(name);
}   


processUserInput(greeting); 

//example of callback function with setTimeout

mycallback = function() {   
    console.log("This is a callback function executed after 2 seconds");
}
setTimeout(mycallback, 2000);   


//example of callback hell
setTimeout(function() {
    console.log("First callback");  
    setTimeout(function() {
        console.log("Second callback"); 
        setTimeout(function() {
            console.log("Third callback");
        }, 1000);
    }, 1000);
}
, 1000);



