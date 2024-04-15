document.getElementById('addDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get data from input field
    var newData = document.getElementById('dataInput').value;
  
    // Redirect to view page with query parameter
    window.location.href = 'viewData.html?data=' + encodeURIComponent(newData);
  });
  