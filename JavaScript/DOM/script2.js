function displayArray() {
    const table = document.getElementById('arrayTable');
    // Clear previous table rows
    table.innerHTML = '';
  
    // Loop through the array and create table rows
    myArray.forEach(function(element, index) {
      const row = table.insertRow();
      const cellIndex = row.insertCell(0);
      const cellValue = row.insertCell(1);
  
      cellIndex.textContent = index + 1; // Display index (starting from 1)
      cellValue.textContent = element;   // Display array element
    });
  }
  