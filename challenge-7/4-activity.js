// Task 7
// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
};

/* Prototype is not possible in object. It will always present in constructor function and classes */

// book.prototype.yearTitle = function () {
//   return `${this.title} released in ${this.year}`;
// };

book.yearTitle = function () {
    return `${this.title} released in ${this.year}`;
  };
console.log(book.yearTitle());
