// Activity 5: Event Handling
// Task 9
// Add a click event listener to a button that changes the text content of a paragraph.
const paragraph = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click", handleClick);

function handleClick() {
  paragraph.textContent = "You can do it!";
}
// Task 10
// Add a mouseover event listener to an element that changes its border color.
const borderChanger = document.getElementById("border-color");
borderChanger.addEventListener(
  "mouseover",
  () => (borderChanger.style.borderColor = "blue")
);
