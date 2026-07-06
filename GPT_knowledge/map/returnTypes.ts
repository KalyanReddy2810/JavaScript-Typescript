//Number Return Type
const numbers = [10, 20, 30];
const double = numbers.map((n:number) : number => 
   n * 10
);
console.log(double); //output:[ 100, 200, 300 ]

//String Return Type
const names2  =  ['kalyan', 'sush', 'maha', 'anvi']
//const capitalNames = names.map((k: string): string => k.toUpperCase());  // if don't want to use {} , remove return keyword as well
const capitalNames = names2.map((k: string): string => {
    return k.toUpperCase()
});
console.log(capitalNames) //output: [ 'KALYAN', 'SUSH', 'MAHA', 'ANVI' ]


//Boolean return type
const cost = [100, 200, 300]
const result = cost.map((c:number) : boolean=>{
  return c>150;
})
console.log(result)   //output: [ false, true, true ]


//Array Return Type
const num1 = [1,2,3,4,5,6,7]
const result1 = num1.map((n:number): number[]=>{
return [n, n*10]
})
console.log(result1)
/*output:
[
  [ 1, 10 ],
  [ 2, 20 ],
  [ 3, 30 ],
  [ 4, 40 ],
  [ 5, 50 ],
  [ 6, 60 ],
  [ 7, 70 ]
]
  */

// Object Return Type
const nums = [1,2,3,4,5]
const results = nums.map((n:number) : {id:number}=>({
    id:n

}))

console.log(results)  //output: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ]

//real time object return type examples
const employee = [
    {id:1, name:'kalyan', salary:5000},
    {id:2, name:'sush', salary:10000},
    {id:3, name:'maha', salary:20000}
]

const totsal = employee.map((emp):{id:number; salary :number; bonus:number}=>({
id: emp.id,
salary : emp.salary,
bonus : emp.salary*0.1

})

)
console.log(totsal)

/*output: [
  { id: 1, salary: 5000, bonus: 500 },
  { id: 2, salary: 1000, bonus: 100 },
  { id: 3, salary: 20000, bonus: 2000 }
]
*/