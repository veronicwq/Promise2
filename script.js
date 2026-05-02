// ===== Завдання 1 =====
const delayedPromise = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
};

document.getElementById("runAll").addEventListener("click", () => {
  console.log("=== Promise.all ===");

  const promises = [
    delayedPromise("A", 1000),
    delayedPromise("B", 2000),
    delayedPromise("C", 1500),
    delayedPromise("D", 3000),
    delayedPromise("E", 500),
  ];

  Promise.all(promises)
    .then((results) => {
      console.log("Всі проміси виконані:");
      console.log(results);
    })
    .catch((error) => console.log("Помилка:", error));
});

// ===== Завдання 2 =====
const randomDelay = (value) => {
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);

  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
};

document.getElementById("runRace").addEventListener("click", () => {
  console.log("=== Promise.race ===");

  const promises = [
    randomDelay("One"),
    randomDelay("Two"),
    randomDelay("Three"),
    randomDelay("Four"),
    randomDelay("Five"),
  ];

  Promise.race(promises)
    .then((result) => {
      console.log("Найшвидший проміс:", result);
    })
    .catch((error) => console.log("Помилка:", error));
});
