// Task 7
// Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product = (a, b = 12) => a * b;
console.log(product(2));

// Task 8
// Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greet = (name, age) =>
  `Hi ${name}, your age is ${age} as per our record!
`;

console.log(greet("Satvik", 20));
