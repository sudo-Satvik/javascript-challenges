// Task 9
// Write a higher-order function that takes a function and a number, and calls the function that many times.
const higherOrderFunction = (func, num) => {
  for (let i = 0; i < num; i++) {
    func();
  }
};

function greet() {
  console.log("Hello World!");
}

higherOrderFunction(greet, 3);

// Task 10
// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const higherOrderFunction2 = (func1, func2, val) => {
  return func2(func1(val));
};

const multiply = (val) => val * 10;
const add = (val) => val + 10;

console.log(higherOrderFunction2(multiply, add, 10));
