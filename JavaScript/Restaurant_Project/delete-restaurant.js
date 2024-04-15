document.getElementById('deleteRestaurantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const restaurantToDelete = document.getElementById('restaurantToDelete').value;
    // Here you can perform further actions like deleting the restaurant from a database or array
    console.log('Deleting restaurant:', restaurantToDelete);
    // Optionally, you can redirect to another page after deleting the restaurant
    // window.location.href = 'view-restaurants.html';
  });
  