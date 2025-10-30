window.promises = [];

// Do not change the code above this

// Create 5 promises with random resolve times between 1 and 5 seconds
for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1; // 1–5 seconds
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved in ${randomTime} seconds`);
    }, randomTime * 1000);
  });
  window.promises.push(promise);
}

// Use Promise.any() to get the first resolved promise
Promise.any(window.promises)
  .then((result) => {
    document.getElementById("output").innerText = result;
  })
  .catch((error) => {
    document.getElementById("output").innerText = error;
  });
