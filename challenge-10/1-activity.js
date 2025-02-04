// Activity 1: Basic Event Handling
// Task 1:
// Add a click event listener to a button that changes the text content of a paragraph.
const para = document.querySelector(".content-1");
document.querySelector(".btn-1").addEventListener("click", () => {
  para.textContent = "After data";
});
// Task 2:
// Add a double-click event listener to an image that toggles its visibility.
const image = document.getElementById("img-1");
document.querySelector(".btn-2").addEventListener("dblclick", () => {
  image.classList.toggle("visible");
});
