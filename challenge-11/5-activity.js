// Activity 5: Concurrent Promises
// Task 8:
// Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseA = new Promise((res, rej) =>
  setTimeout(() => res("A Data fetched!"), 1000)
);
const promiseB = new Promise((res, rej) =>
  setTimeout(() => rej("B Data fetched!"), 2000)
);
const promiseC = new Promise((res, rej) =>
  setTimeout(() => rej("C Data fetched!"), 3000)
);

// Promise.all([promiseA, promiseB, promiseC])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error));

const getAllPromises = async () => {
  try {
    const response = await Promise.all([promiseA, promiseB, promiseC]);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

getAllPromises();
// Task 9:
// Use Promise.race to log the value of the first promise that resolves among multiple promises.
// Promise.race() in JavaScript
// The Promise.race() method returns a promise that settles as soon as one of the given promises settles (either resolved or rejected). It doesn’t wait for all promises—whichever resolves or rejects first, that result is returned.

const promiseX = new Promise((res) =>
  setTimeout(() => res("A Data fetched!"), 3000)
);
const promiseY = new Promise((_, rej) =>
  setTimeout(() => rej("B Data failed!"), 1000)
);
const promiseZ = new Promise((res) =>
  setTimeout(() => res("C Data fetched!"), 2000)
);

Promise.race([promiseX, promiseY, promiseZ])
  .then((result) => console.log("First resolved:", result))
  .catch((error) => console.log("First rejected:", error));
