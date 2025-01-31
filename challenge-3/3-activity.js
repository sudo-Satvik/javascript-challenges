// Task 4
// Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 3;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Enter the correct number!");
}
// Task 5
// Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 78;

switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score < 90 && score >= 80:
    console.log("B");
    break;
  case score < 80 && score >= 70:
    console.log("C");
    break;
  case score < 70 && score >= 60:
    console.log("D");
    break;
  default:
    console.log("E");
}
