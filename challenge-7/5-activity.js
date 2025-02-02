// Task 8
// Use a for...in loop to iterate over the properties of the book object and log each property and its value.
let user = {
  name: "Satvik",
  id: "sLRcHgtdwHcyrBs",
  salary: 100_000_000,
  files: [1231, 133, 123, 45, 765, 989],
  func: function () {
    return "Hello";
  },
  personalData: {
    phone: "+91 9554575247",
    email: "sharma12@google.com",
  },
};

// for (let key in user) {
//   console.log(`${key} => ${user[key]}`);
// }

// Task 9
// Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(user));
console.log(Object.values(user));

console.log(Object.values(user.personalData));
