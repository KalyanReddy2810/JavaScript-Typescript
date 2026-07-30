export {};

// Regular function — returns a string directly
function getName(): string {
  return 'Alice'; // returns string
}

// Async function — returns a Promise<string> automatically
async function getNameAsync(): Promise<string> {
  return 'Alice'; // TypeScript: return type is Promise<string>
                   // Runtime: returns Promise.resolve('Alice')
}

// Calling them differs:
const name1 = getName();          // 'Alice' — string directly
const name2 = getNameAsync();     // Promise<string> — pending!
const name3 = await getNameAsync(); // 'Alice' — awaited into string

console.log(name1);
console.log(name2);
console.log(name3);
