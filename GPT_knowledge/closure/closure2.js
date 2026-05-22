
//Example : Closure captures a REFERENCE, not a copy The closure sees the CURRENT value — changes are reflected
function makeCounter() {
  let count = 0; // a single variable shared by all returned functions

  return {
    increment() { count++; console.log("count:", count); },
    decrement() { count--; console.log("count:", count); },
    reset()     { count = 0; console.log("count reset to 0"); },
    get()       { return count; }
  };
}

const counter = makeCounter();
counter.increment(); // count: 1
counter.increment(); // count: 2
counter.increment(); // count: 3
counter.decrement(); // count: 2
counter.reset();     // count reset to 0
counter.increment(); // count: 1



//example 2: Closure for data encapsulation and privacy
function createCart() {
  let items = 0; // private variable, not accessible from outside

  return {
    addItem() {
      items++;
      console.log("Items in cart:", items);
    },

    removeItem() {
      items--;
      console.log("Items in cart:", items);
    },

    getItems() {
      return items;
    }
  };

  //console.log(items); // This will cause an error because 'items' is not accessible here
}

const cart = createCart();

cart.addItem();    // 1
cart.addItem();    // 2
cart.removeItem(); // 1



//example 3 : Closure for simulating private variables in a bank account
function createBankAccount() {
  let balance = 1000; // private variable, not accessible from outside

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },

    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    },

    checkBalance() {
      return balance;
    }
  };
}

const account = createBankAccount();

account.deposit(500);  // 1500
account.withdraw(200); // 1300