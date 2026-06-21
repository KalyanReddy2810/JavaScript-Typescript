function test1() {
    return new Promise(resolve => {
        resolve('Success');
    })

}

test1()
.then(result =>{
    console.log(result); // "Success"
    throw new Error('Something went wrong'); // This will cause the promise to reject
})

.catch(error => {
    console.error('Error:', error.message); // "Error: Something went wrong"
}); 



//example 2
function test2() {
    return new Promise((resolve, reject) => {
      resolve('Hello');

   
    });
};

test2()
.then(result => {
    throw new Error('Error inside then'); // This will cause the promise to reject
})
.catch(error => {   
    console.error('Caught error:', error.message); // "Caught error: Error inside then"
}); 


/*

//example 3  -- throw inside the then without catch
function test3() {
    return new Promise((resolve, reject) => {
        resolve('Hello');
    });
}   

test3()
.then(result => {
    throw new Error('Error inside then'); // This will cause the promise to reject
})      
*/

//example 4 -- throw inside then with catch
function test4() {
    return new Promise((resolve, reject) => {
        resolve('Hello');
    });     

}
test4()
.then(result => {
    throw new Error('Error inside then - test4()'); // This will cause the promise to reject
})
.catch(error => {
    console.error('Caught error:', error.message); // "Caught error: Error inside then"
});


//example 5 -- throw inside then with followup then & catch
function test5() {
    return new Promise((resolve, reject) => {
        resolve('Hello');
    }); 
}

test5()     
.then(result => {
    throw new Error('Error inside then - test5()'); // This will cause the promise to reject
}   )
.then(result => {
    console.log('This will not run due to the error above');
})
.catch(error => {
    console.error('Caught error:', error.message); // "Caught error: Error inside then - test5()"
}); 