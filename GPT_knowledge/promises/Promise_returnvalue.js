const p = Promise.resolve(5);

p
  .then(n => {
    // n = 5 (number)
    return n * 2; // plain value
    // JS wraps → Promise.resolve(10)
  })
  .then(n => {
    // n = 10
    return `result: ${n}`; // plain string
  })
  .then(msg => {
    console.log(msg);
    // "result: 10"
  });