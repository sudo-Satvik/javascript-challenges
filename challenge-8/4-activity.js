// Activity 4: Default Parameters
// Task 7
// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

const multiply = (a, b = 1) => a * b;

console.log(multiply(12, 4));
console.log(multiply(12));
