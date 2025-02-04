// Task 3
// Create a new div element with some text content and append it to the body.
const newDivCreation = document.createElement("div");
newDivCreation.textContent =
  "Hello Guys! It's Stephen and you know what time it is?";
document.body.appendChild(newDivCreation);

// Task 4
// Create a new li element and add it to an existing ul list.
const newLiElement = document.createElement("li");
newLiElement.textContent = "Broccoli";
const unorderedList = document.querySelector("ul");
unorderedList.appendChild(newLiElement);
