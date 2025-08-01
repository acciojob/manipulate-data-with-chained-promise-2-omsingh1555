//your JS code here. If required.
//your JS code here. If required.
// Function that returns a promise resolving with an array after 3 seconds
function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // 3 seconds delay
  });
}

// Function that filters out odd numbers (after 1 second delay)
function filterEvenNumbers(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = array.filter(num => num % 2 === 0);
      document.getElementById('output').textContent = evenNumbers.join(',');
      resolve(evenNumbers);
    }, 1000); // 1 second delay
  });
}

// Function that multiplies even numbers by 2 (after 2 seconds delay)
function multiplyByTwo(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = array.map(num => num * 2);
      document.getElementById('output').textContent = multiplied.join(',');
      resolve(multiplied);
    }, 2000); // 2 seconds delay
  });
}

// Chain the promises
getInitialArray()
  .then(filterEvenNumbers)
  .then(multiplyByTwo)
  .catch(error => {
    console.error('Error:', error);
  });