// Task 3
// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1995,
  method: function () {
    console.log(`Book Name: ${this.title} || Author: ${this.author}`);
  },
  changeYear: function (year) {
    this.year = year;
    console.log("Done");
  },
};

book.method();
console.log(book);

book.changeYear(1997);
console.log(book);

// Task 4
// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
