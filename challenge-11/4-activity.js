// Activity 4: Fetching Data from an API
// Task 6:
// Use the fetch API to get data from a public API and log the response data to the console using promises.
// fetch("https://swapi.dev/api/starships/9/")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP Error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Task 7:
// Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchData = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/starships/2/");
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    console.log("Data fetched!");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch Error:", error);
  }
};

fetchData();
