function testA(password){
    return new Promise((resolve, reject) => {
       if (password.length > 6) {
        resolve('Password is strong');
       } 
    }); 
}

testA("Test123123")
.then(result => {
    throw new Error('Error inside then - testA()'); // This will cause the promise to reject    

})
.catch(error => {
    console.error('Caught error:', error.message); // "Caught error: Error inside then"
    return 'password must be > 6 digits & should have the special charecter mandatory'
})

.then(result => {   
    console.log('Result after catch:', result); // "Result after catch: password must be > 6 digits"
});
