function test1(){
    return new Promise(resolve => {
        resolve([
            {id: 1, name: 'kalyan', branch: 'CSE'},
            {id: 2, name: 'sushmitha', branch: 'CSE'},
            {id: 3, name: 'maha', branch: 'CSE'},
        ]);
    });
}

//if you find any user whose branch is not CSE, then throw an error, otherwise return a success message.
//condition based throw inside then and catch the error in catch block.
test1()
.then(users => {
  users.forEach(user => {   
    if(user.branch !== 'CSE') {

        throw new Error(`user ${user.name} is not eligible for AI ML specialization`); // This will cause the promise to reject
    }
    
});
return 'All users are eligible for AI ML specialization';
})

.then(result => {
    console.log(result); // "All users are eligible for AI ML specialization"
})  

.catch(error => {
    console.error('Error:', error.message); // "Error: user is not eligible for AI ML specialization"
}); 
