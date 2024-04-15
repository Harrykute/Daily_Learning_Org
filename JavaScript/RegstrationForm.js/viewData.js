// Extract data from URL query parameter
var urlParams = new URLSearchParams(window.location.search);
var data = urlParams.get('data');

// Display data on the view page
var dataContainer = document.getElementById('dataContainer');
dataContainer.innerHTML = 'Data: ' + data;

// Delete data
document.getElementById('deleteButton').addEventListener('click', function() {
  // Logic to delete data goes here
  // For demonstration purposes, let's just redirect back to the addData page
  window.location.href = 'addData.html';
});
