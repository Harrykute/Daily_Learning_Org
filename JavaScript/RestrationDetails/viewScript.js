// Retrieve registration details from local storage
var storedRegistrationDetails = localStorage.getItem('registrationDetails');
if (storedRegistrationDetails) {
  var registrationDetails = JSON.parse(storedRegistrationDetails);

  // Display registration details on the view page
  var registrationDetailsContainer = document.getElementById('registrationDetails');
  registrationDetailsContainer.innerHTML = 'Name: ' + registrationDetails.name + '<br>Email: ' + registrationDetails.email;
} else {
  registrationDetailsContainer.innerHTML = 'No registration details found.';
}
