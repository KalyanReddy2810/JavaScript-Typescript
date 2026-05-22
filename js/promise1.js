//Promise example
function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating success or failure  
            if (success) {
                resolve("Operation successful!"); // Resolve the promise with a success message
            } else {

                reject("Operation failed!"); // Reject the promise with an error message
            }
        }, 2000); // Simulating an asynchronous operation with a 2-second delay
    });
}

asyncOperation()
    .then(result => {
        console.log(result); // Logs "Operation successful!" if the promise is resolved
    })
    



    //
console.log("first call")

setTimeout(function() {
    console.log("second call");
}, 2000);

console.log("third call");