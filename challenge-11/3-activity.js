// Activity 3: Using Async/Await
// Task 4:
// Write an async function that waits for a promise to resolve and then logs the resolved value.
// const fetchUserData = new Promise((resolve, reject) => {
//   setTimeout(
//     () =>
//       resolve(`
//     {
//         "employeeId": 1001
//         "name": "Satvik",
//         "email": "sharmasatvik43@gmail.com",
//     }
//     `),
//     3000
//   );
// });

// const getUserData = async () => {
//   console.log("Initiating data fetching process...");
//   const result = await fetchUserData;
//   console.log("Data fetched!");
//   console.log(result);
// };

// getUserData();

// Task 5:
// Write an async function that handles a rejected promise using try-catch and logs the error message.
const fetchingUserData = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Failed to fetch the user data");
  }, 2000);
});

const gettingUserData = async () => {
  try {
    console.log("Fetching data...");
    const result = await fetchingUserData;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

gettingUserData();
