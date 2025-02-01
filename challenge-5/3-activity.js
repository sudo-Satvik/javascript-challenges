let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Task 7
// Use the map method to create a new array where each number is doubled and log the new array.
const doubledNum = num.map((val) => val * 2);
console.log(doubledNum);

// Task 8
// Use the filter method to create a new array with only even numbers and log the new array.
const evenNumber = num.filter((val) => val % 2 == 0);
console.log(evenNumber);

// Task 9
// Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sumOfAllNumber = num.reduce((current, val) => (val += current), 0);
console.log(sumOfAllNumber);
