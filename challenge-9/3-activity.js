// Task 5
// Select an HTML element and remove it from the DOM.
const removedElement = document.getElementById("removed-one");
if (removedElement) removedElement.remove();

// Task 6
// Remove the last child of a specific HTML element.
const parentElement = document.querySelector(".parent-element");
if (parentElement.lastElementChild) {
  parentElement.removeChild(parentElement.lastElementChild);
}
