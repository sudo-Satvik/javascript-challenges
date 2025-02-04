// Activity 2: Mouse Events
// Task 3:
// Add a mouseover event listener to an element that changes its background color.
const element = document.querySelector(".task-3");
element.addEventListener("mouseover", () =>
  element.classList.toggle("hover-t-3")
);

// Task 4:
// Add a mouseout event listener to an element that resets its background color.
document.getElementById("colorDiv").addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});
