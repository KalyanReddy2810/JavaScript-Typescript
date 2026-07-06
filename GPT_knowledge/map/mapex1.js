//Double every Number
const number  = [1,2,3,4,5 ]
const doubleNumber = number.map((num) => num*2)
console.log(doubleNumber)  //[ 2, 4, 6, 8, 10 ]

//Add 10 to every number
const addTen = number.map((num) => num+10)
console.log(addTen)  //[ 11, 12, 13, 14, 15 ]


//UpperCase every string in the array
const names = ["kalyan","sush","vijji","bhaskar"]
const upperCaseNames = names.map((name) => name.toUpperCase())
console.log(upperCaseNames)  //[ 'KALYAN', 'SUSH', 'VIJJI', 'BHASKAR' ] 


//Intermediate Example
//Extract names from  the array of objects
const users = [
    {id:1, name:"kalyan"},
    {id:2, name:"sush"},
    {id:3, name:"vijji"},
    {id:4, name:"bhaskar"}
]
const userNames = users.map((user) => user.name)
console.log(userNames)  //[ 'kalyan', 'sush', 'vijji', 'bhaskar' ]  

const userIds = users.map((user) => user.id)
console.log(userIds)  //[ 1, 2, 3, 4 ]


//Create Labels

const labels = users.map(user => ({

        userName: user.name,
        userId: user.id
        
}));

console.log(labels)  // [ { userName: 'kalyan', userId: 1 }, { userName: 'sush', userId: 2 }, { userName: 'vijji', userId: 3 }, { userName: 'bhaskar', userId: 4 } ]    



//Another way of creating labels using the return statement
const label = users.map(user => {
    return {
        userName: user.name,
        userId: user.id
    }

});
console.log(label)  // [ { userName: 'kalyan', userId: 1 }, { userName: 'sush', userId: 2 }, { userName: 'vijji', userId: 3 }, { userName: 'bhaskar', userId: 4 } ]

//Add a new property to each object in the array
const updated = users.map(user=>({
...user,
status:"Active"
}));
console.log(updated)  // [ { id: 1, name: 'kalyan', status: 'Active' }, { id: 2, name: 'sush', status: 'Active' }, { id: 3, name: 'vijji', status: 'Active' }, { id: 4, name: 'bhaskar', status: 'Active' } ]


// copy the array using the spread operator
const num = [1,2,3,4,5]
const copy  = [...num]
console.log(copy)  //[ 1, 2, 3, 4, 5 ]

