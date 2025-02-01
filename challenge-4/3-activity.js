// Task 5
// Write a program to print numbers from 1 to 5 using a do...while loop.
let num = 1;
do {
  console.log(num);
  num++;
} while (num < 6);

// Task 6
// Write a program to calculate the factorial of a number using a do...while loop.
let num2 = 5;
let i = 1;
let factorial = 1;
do {
  factorial *= i;
  i++;
} while (i < num2);

console.log(factorial);
