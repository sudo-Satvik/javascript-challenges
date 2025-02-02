// Task 5
// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "Satvik Library",
  books: [
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "Diary of Anne Frank", author: "Anne Frank" },
    { title: "Get Epic Shit Done", author: "Ankur Warikoo" },
  ],
};

console.log(library);

// Task 6
// Access and log the name of the library and the titles of all the books in the library.
console.log(
  `In ${library.name}, there are total ${
    library.books.length
  } books and these are ${library.books.map((val) => val.title)} `
);
