// Activity 3: Spread and Rest Operators

// Task 5
// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 100, 101, 102];
console.log(arr2);

// Task 6
// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const sumUp = (...args) => {
  return args.reduce((acc, num) => acc + num, 0);
};

console.log(sumUp(1, 1, 1, 1, 1));
