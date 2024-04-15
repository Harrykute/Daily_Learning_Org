document.getElementById('addRestaurantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const restaurantName = document.getElementById('restaurantName').value;
    // Here you can perform further actions like adding the restaurant to a database or array
    console.log('Adding restaurant:', restaurantName);
    // Optionally, you can redirect to another page after adding the restaurant
    // window.location.href = 'view-restaurants.html';
  });
  