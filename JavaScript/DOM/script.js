// Array to hold elements
let myArray = [];

// Function to display array elements
function displayArray() {
  const list = document.getElementById('arrayList');
  // Clear previous elements
  list.innerHTML = '';
  // Loop through the array and create list items
  myArray.forEach(function(element) {
    const listItem = document.createElement('li');
    listItem.textContent = element;
    list.appendChild(listItem);
  });
}

// Function to handle form submission
document.getElementById('addElementForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const elementInput = document.getElementById('elementInput').value;
  // Add the input element to the array
  myArray.push(elementInput);
  // Display the updated array
  displayArray();
});
