// A function factory is a function that creates and returns another function.
console.log("------------------Basic Function Factory Example------------------");
function createSomething() {
   return function() {
      console.log("Hello");
   };
}
const myFunction = createSomething();
myFunction();


//Normal function
function greet(name) {
   return `Hello ${name}`;
}
console.log(greet("KKR"));


//Function factory  - with parameter
console.log("------------------Function Factory with Parameter Example------------------");
function createGreeter(greeting) {
   return function(name) {
      return `${greeting} ${name}`;
   };   
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");  
console.log(sayHello("kalyan")); // Output: Hello kalyan
console.log(sayHi("suah")); // Output: Hi sush


//example of function factory with closure for data privacy 
console.log("------------------Function Factory with Closure for Data Privacy Example------------------");
function createCounter() {
   let count = 0; // private variable, not accessible outside the closure         
    return {
        increment() {   
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.count); // Output: undefined (count is private and not accessible outside the closure)  

//example of function factory  for encapsulation
console.log("------------------Function Factory for Encapsulation Example------------------");
function createPerson1(name1, age1) {
    let _name1 = name1; // private variable
    let _age1 = age1; // private variable
    return {
        getName() {
            return _name1;
        },
        getAge() {
            return _age1;
        },
        
        setName(newName1){
            if (typeof newName1 !== "string" || newName1.trim() === "") {
                console.log("Invalid name!");
                return;
            }   
            _name1 = newName1;

        },
        setAge(newAge1){
            if (typeof newAge1 !== "number" || newAge1 < 0 || newAge1 > 150) {
                console.log("Invalid age!");
                return;
            }
            _age1 = newAge1;
        }

        }
    };

console.log("------------------Data Privacy and Validation Example------------------");
const person1 = createPerson1("Alice", 30);
//console.log(person1.getName()); // Output: Alice
//console.log(person1.getAge()); // Output: 30     
person1.setName("Bob");
person1.setAge(35);
console.log(person1.getName()); // Output: Bob
console.log(person1.getAge()); // Output: 35
person1.setName(""); // Invalid name
person1.setAge(200); // Invalid age
//console.log(person1.getName()); // Output: Bob (name remains unchanged)
//console.log(person1.getAge()); // Output: 35 (age remains unchanged) 






//example of function factory with closure for data privacy and validation

console.log("------------------Function Factory with Closure for Data Privacy and Validation Example------------------");   
function createPerson(name, age) { 
    if (typeof name !== "string" || name.trim() === "") {
        throw new Error("Invalid name");
    }
    if (typeof age !== "number" || age < 0) {
        throw new Error("Invalid age");
    }

    let person = {
        name: name,
        age: age
    };

    return person;
}

const person = createPerson("Alice", 30);
console.log(person); // Output: { name: 'Alice', age: 30 } //object is created successfully with valid name and age
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30
//const person2 = createPerson("", 25); // Throws error: Invalid name
//const person3 = createPerson("Bob", -5); // Throws error: Invalid age     



//example of function factory with closure for data privacy and validation with getter and setter methods
console.log("------------------Function Factory with Closure for Data Privacy and Validation with Getter and Setter Methods Example------------------");
function student(name, collegeName,Selectedbranch){
    let branch = Selectedbranch;
    switch(branch){
        case "CSE" || "cse" || "Cse" || "CsE":
            console.log(`Computer Science and Engineering: ${name} from ${collegeName}` );
            break;
        case "ECE" || "ece" || "Ece" || "ecE":
            console.log(`Electronics and Communication Engineering: ${name} from ${collegeName}`);
            break;
    
    case "ME" || "me" || "Me" || "mE":
        console.log(`Mechanical Engineering: ${name} from ${collegeName}`);
        break;
    }

    return {
        getBranch() {
            return branch;
        }
    };  
}

const student1 = student("kalyan", "VNRVJIET", "CSE");