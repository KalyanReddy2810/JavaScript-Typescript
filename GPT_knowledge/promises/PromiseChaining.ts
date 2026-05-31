// Case 1: Return a plain value → wraps in Promise.resolve(value)

Promise.resolve(10)
  .then(n => n * 2)        // returns 20 (plain) → wrapped as Promise(20)
  .then(n => n + 5)        // receives 20, returns 25
  .then(n => console.log(n)); // prints: 25


// Case 2: Return a Promise → waits for it to settle

Promise.resolve(10)
  .then(x => new Promise<number>(resolve => setTimeout(() => resolve(x * 2), 1000))) // returns Promise(20) after 1s  , resolve holds the value 20 after 1s & resolve value will be passed to next then i.e x in next then will be 20
  .then(x => x + 5)        // receives 20, returns 25
  .then(x => console.log(x)); // prints: 25 after 1s    


  // Case 3: Throw an error → wraps in Promise.reject(error)

Promise.resolve(10)
  .then(x => { throw new Error('Something went wrong'); }) // throws error → wrapped as Promise.reject(error)
  .then(x => x * 2)        // skipped due to rejection
  .catch(err => console.error(err.message)); // prints: "Something went wrong"

  // Case 4: Return a rejected Promise → propagates the rejection

Promise.resolve(10)         
    .then(x => Promise.reject(new Error('Failed to process'))) // returns rejected Promise → propagates rejection   
    .then(x => x * 2)        // skipped due to rejection
    .catch(err => console.error(err.message)); // prints: "Failed to process"


 