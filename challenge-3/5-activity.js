// Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;

const leapYearChecker =
  year % 4 === 0 && year > 400 ? "Leap Year" : "Non Leap Year";

console.log(leapYearChecker);
