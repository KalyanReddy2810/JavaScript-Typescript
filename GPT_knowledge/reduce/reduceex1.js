const employees  = [
  { name: 'kalyan', department : 'SDET', gender : 'male', salary : 100000 },
  { name: 'john', department : 'Manager', gender : 'male', salary : 150000 },
  { name: 'jane', department : 'PE', gender : 'female', salary : 80000 },
  { name: 'sush', department : 'SDET', gender : 'female', salary : 90000},
  { name: 'maha', department : 'SDE', gender : 'female', salary : 120000 },
  { name: 'kumar', department : 'Product Manager', gender : 'male', salary : 130000 },

];

let groupedByDepartment = employees.reduce((acc, employee) => {
  let department = employee.department;  
  if (!acc[department]) {
    acc[department] = [];
  }
  acc[department].push(employee);
  return acc;
}, {}); 

console.log(groupedByDepartment);
console.log('-----------------------------------');
let groupedByGender = employees.reduce((acc, employee) => {
  let gender = employee.gender;  
  if (!acc[gender]) {
    acc[gender] = [];
  }
  acc[gender].push(employee);
  return acc;
}, {}); 

console.log(groupedByGender);   