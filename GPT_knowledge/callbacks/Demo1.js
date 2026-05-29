"use strict";
// DEFINITION: A function that accepts another function as argument
function doWork(data, callback) {
    // simulate async work (e.g., reading a file)
    setTimeout(() => {
        const result = data.toUpperCase();
        callback(result); // ← invoke the callback when done
    }, 1000);
}
// USAGE: Pass your "what to do next" function as argument
doWork('hello', (result) => {
    console.log(result); // prints: HELLO (after 1 second)
});
