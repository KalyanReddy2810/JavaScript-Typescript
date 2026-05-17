//Example 2
function sum(...numbers) {

    let total = 0;

    for(const number of numbers) {
        total += number;
    }

    return total;  
}

console.log(sum(10,20,30));   //output : 60

//Example 3

function student(...names){
    console.log(names)
}

student("kalyan", "sush", "Maha")   //output : [ 'kalyan', 'sush', 'Maha' ]
