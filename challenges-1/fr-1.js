// Primitive Types
let name = "John"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let height = null; // Null
let weight; // Undefined
let bigNumber = 9007199254740991n; // BigInt
let uniqueKey = Symbol("id"); // Symbol

// Reference Types
let person = { name: "Alice", age: 30 }; // Object
let hobbies = ["reading", "gaming", "coding"]; // Array (which is an object)
function greet() {
  return "Hello!";
} // Function (which is also an object)

// Logging values and their types
console.log(name, typeof name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(height, typeof height);
console.log(weight, typeof weight);
console.log(bigNumber, typeof bigNumber);
console.log(uniqueKey, typeof uniqueKey);
console.log(person, typeof person);
console.log(hobbies, typeof hobbies);
console.log(greet, typeof greet);
