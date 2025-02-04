// Task 7
// Select an HTML element and change one of its attributes (e.g., src of an img tag).
const image = document.querySelector("img");
image.setAttribute(
  "src",
  "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
// Task 8
// Add and remove a CSS class to/from an HTML element.
const div1 = document.querySelector(".css1");
const div2 = document.querySelector(".css2");
div1.classList.add("sample-css");
div2.classList.remove("sample-css");
