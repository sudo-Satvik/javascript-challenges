// Activity 5: Enhanced Object Literals

// Task 8
// Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const user = (name, age) => {
  return {
    name,
    age,
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };
};

const person = user("Alice", 30);
console.log(person);
person.greet();

// Task 9
// Create an object with computed property names based on variables and log the object to the console.
const key = "name";
const value = "Satvik";

const object2 = {
  [key]: value,
};

console.log(object2);
