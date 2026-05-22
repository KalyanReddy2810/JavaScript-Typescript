//Multiple independent closures -- Each call to the outer function creates a FRESH closure environment

function makeCounter() {
  let count = 0;
  return () => ++count;
}

const c1 = makeCounter(); // c1 has its OWN count variable
const c2 = makeCounter(); // c2 has a DIFFERENT count variable
const c3 = makeCounter(); // c3 has yet ANOTHER count variable

console.log(c1()); // 1 (c1 count = 1) // c1's closure captures its own count variable, which starts at 0 and is incremented to 1
console.log(c1()); // 2 (c1 count = 2) // c1's closure captures the same count variable, which is now 1, and increments it to 2
console.log(c2()); // 1 (c2 count = 1 — independent!) // c2's closure captures its own count variable, which starts at 0 and is incremented to 1, independent of c1's count
console.log(c3()); // 1 (c3 count = 1 — independent!) // c3's closure captures its own count variable, which starts at 0 and is incremented to 1, independent of both c1's and c2's counts
console.log(c1()); // 3 (c1 count = 3) // c1's closure captures the same count variable, which is now 2, and increments it to 3


//example2  // Each call to create a new salary creates a new closure with its own salary variable, allowing for independent state management for each user.    

function user(bonus){
    //    // Private variable for THIS closure only
    let salary = 50000 + bonus;

    return  {
        incrementSalary(amount){  // This method can access and modify the salary variable in its closure
            salary += amount;
            console.log("Updated Salary:", salary);
        },

        decrementsalary(amount){  // This method can also access and modify the salary variable in its closure
            salary -= amount;
            console.log("Updated Salary:", salary);
        }
}

}

//Each user gets their own salary variable, so they can have different bonuses and updates without affecting each other
const user1 = user(5000); // user1 has salary = 55000  // user1's closure captures its own salary variable initialized to 55000
const user2 = user(10000); // user2 has salary = 60000 // user2's closure captures its own salary variable initialized to 60000


//user1 and user2 can update their salaries independently
user1.incrementSalary(2000); // user1 salary = 57000 // users1's salary variable is  incremented by 2000, resulting in 57000
user1.decrementsalary(1000); // user1 salary = 56000 // user1's salary variable is decremented by 1000, resulting in 56000

user2.incrementSalary(3000); // user2 salary = 63000 // user2's salary variable is incremented by 3000, resulting in 63000
user2.decrementsalary(2000); // user2 salary = 61000    // user2's salary variable is decremented by 2000, resulting in 61000

user1.incrementSalary(5000); // user1 salary = 56500 // user1's salary variable is incremented by 5000, resulting in 56500 
user2.decrementsalary(1000); // user2 salary = 60000 // user2's salary variable is decremented by 1000, resulting in 60000

//closure allows user1 to maintain its own salary state without affecting user2, and vice versa. Each user's salary is encapsulated within their own closure, ensuring that updates to one user's salary do not interfere with the other user's salary.
