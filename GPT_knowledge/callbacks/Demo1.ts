// DEFINITION: A function that accepts another function as argument
function doWork(data: string, callback: (result: string) => void) {
  // simulate async work (e.g., reading a file)
  setTimeout(() => {
    const result = data.toUpperCase();
    callback(result);  // ← invoke the callback when done
  }, 1000);
}

// USAGE: Pass your "what to do next" function as argument
doWork('hello', (result) => {
  console.log(result); // prints: HELLO (after 1 second)
});


console.log('-------------Only if block without return keyword-------')
//example 2 : Error-first callbacks — without return keyword
function doWork1(fileName: string, callback: (err: Error | null, result: string) => void) {
  // simulate async work (e.g., reading a file)
  setTimeout(() => {
    if (fileName === 'badfile.txt') {
      console.log('Only if block without return keyword')
      callback(new Error('File not found'), '');  // ← invoke the callback with an error
      //return;
    } 
      callback(null, `${fileName} is as expected`);  // ← invoke the callback with no error
    

},3000);
}

// error case
doWork1('badfile.txt', (err, result) => {
  if (err) {    
    console.error('Error:', err.message); // prints: Error: File not found (after 1 second)
  } else {
    console.log('Result:', result);
  } 
})

/*
// success case
doWork1('goodfile.txt', (err, result) => {
  if (err) {
    console.error('Error:', err.message); 
  } else {
    console.log('Result:', result); // prints: GOODFILE.TXT (after 1 second)
  }
  });

  */


  console.log('-------------Only if block with return keyword-------')
function doWork2(fileName: string, callback: (err: Error | null, result: string) => void) {
  // simulate async work (e.g., reading a file)
  setTimeout(() => {
    if (fileName === 'badfile.txt') {
        console.log('Only if block with return keyword')
      callback(new Error('File not found'), '');  // ← invoke the callback with an error
      return;
    } 
      callback(null, `${fileName} is as expected`);  // ← invoke the callback with no error
    

},3000);
}

// error case
doWork2('badfile.txt', (err, result) => {
  if (err) {    
    console.error('Error:', err.message); // prints: Error: File not found (after 1 second)
  } else {
    console.log('Result:', result);
  } 
})


 console.log('------------- if else block no need for return keyword-------')
function doWork3(fileName: string, callback: (err: Error | null, result: string) => void) {
  // simulate async work (e.g., reading a file)
  setTimeout(() => {
    if (fileName === 'badfile.txt') {
      console.log(' if else block no need for return keyword')
      callback(new Error('File not found'), '');  // ← invoke the callback with an error
      
    } else{
      callback(null, `${fileName} is as expected`);  // ← invoke the callback with no error
    }

},3000);
}

// error case
doWork3('badfile.txt', (err, result) => {
  if (err) {    
    console.error('Error:', err.message); // prints: Error: File not found (after 1 second)
  } else {
    console.log('Result:', result);
  } 
})