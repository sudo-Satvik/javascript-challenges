// Activity 2: Chaining Promises
// Task 3:
// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchUserResponse1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data 1 fetched!");
  }, 2000);
});

const fetchUserResponse2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data 2 fetched!");
  }, 2000);
});

const fetchUserResponse3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data 3 fetched!");
  }, 2000);
});

fetchUserResponse1
  .then((data) => {
    console.log(data);
    return fetchUserResponse2;
  })
  .then((data) => {
    console.log(data);
    return fetchUserResponse3;
  })
  .then((data) => console.log(data));
