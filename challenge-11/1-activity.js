// Activity 1: Understanding Promises

// Task 1:
// Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const fetchUserData = new Promise((resolve, reject) => {
  let message = true;
  if (message) {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  }
});

fetchUserData.then((message) => console.log(message));

// Task 2:
// Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const fetchUserData2 = new Promise((resolve, reject) => {
  let message = false;
  if (!message) {
    setTimeout(() => reject("Data fetching failed!"), 2000);
  }
});

fetchUserData2.catch((err) => console.log(err));
