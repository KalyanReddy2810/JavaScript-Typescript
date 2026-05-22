function createPerson(name, age) {

  let _name = name;
  let _age  = age;

  return {

    getName() {
      return _name;
    },

    getAge() {
      return _age;
    },

    setAge(newAge) {

      if (newAge < 0 || newAge > 150) {
        console.log("Invalid age!");
        return;
      }

      _age = newAge;
    },

    setName(newName) {
      if (typeof newName !== 'string' || newName.trim() === '') {
        console.log("Invalid name!");
        return;
      }

      _name = newName;
    },

    introduce() {
      console.log(`Hi! I'm ${_name}, age ${_age}`);
    }

  };
}

const alice = createPerson("Alice", 25);

alice.introduce(); // Output: Hi! I'm Alice, age 25
console.log(alice.getName()); // Output: Alice
console.log(alice.getAge()); // Output: 25
//alice._name = "kalyani"; // Attempt to change name directly (won't work) why because _name is not accessible outside the closure, it's private to the createPerson function

alice.setAge(30);
alice.introduce(); // Output: Hi! I'm Alice, age 30

alice.setAge(200); // Invalid age
alice.introduce(); // Still 30

alice.setName("king");// Valid name change
alice.introduce(); // Output: Hi! I'm king, age 30
alice.setName(1234); // Invalid name



//EXAMPLE 2
console.log("---------------------------------");
function createBankAccount(initialBalance = 0) {

  let balance = initialBalance; // balance is captured in the closure, allowing each account to maintain its own balance state

  return {

    deposit(amount) {
      if (amount <= 0) {
        console.log("Invalid deposit amount!");
        return;
      }
      balance += amount;
    },

    withdraw(amount) {
      if (amount <= 0) {
        console.log("Invalid withdrawal amount!");
        return;
      }
      if (amount > balance) {
        console.log("Insufficient funds!");
        return;
      }
      balance -= amount;
    },

    getBalance() {
      return balance;
    }

  };
}

const myAccount = createBankAccount(100);
console.log(myAccount.getBalance()); // Output: 100 
myAccount.deposit(50);
console.log(myAccount.getBalance()); // Output: 150
myAccount.withdraw(30);
console.log(myAccount.getBalance());  // Output: 120
myAccount.withdraw(200); // Insufficient funds
console.log(myAccount.getBalance()); // Still 120
myAccount.deposit(-20); // Invalid deposit amount
console.log(myAccount.getBalance()); // Still 120   
