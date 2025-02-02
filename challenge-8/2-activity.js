// Task 3
// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr = [1, 2, 3, 4, 5];

const [firstVal, secondVal] = arr;

console.log("first: " + firstVal);
console.log("second: " + secondVal);

// Task 4
// Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "Book 1",
  author: "Any Person",
};

const { title, author } = book;

console.log(title);
