function getUser(){
    return new Promise(resolve => {
        resolve({id: 1, name: 'kalyan', role : 'admin'});
    })
    
} 

function getUserAccess(role){
    return new Promise(resolve => {
        if (role === 'admin') {
             console.log('Admin got all access ');
            resolve(['read', 'write', 'delete']);
           
        }else {
            console.log('User got read access only ');
            resolve(['read']);
            
        }
    })
}

getUser()
.then(user => {
    console.log('User:', user);
    return getUserAccess(user.role)
    })  
    
    .then(access => {
        console.log('Access:', access);
    
})