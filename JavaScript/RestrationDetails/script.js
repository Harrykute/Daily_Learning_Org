document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get values from input fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    // Store registration details in local storage
    var registrationDetails = {
      name: name,
      email: email
    };
    localStorage.setItem('registrationDetails', JSON.stringify(registrationDetails));
  
    // Redirect to the view page
    window.location.href = 'view.html';
  });
  