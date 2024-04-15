// Assume restaurants is an array of restaurant names
const restaurants = ['Restaurant 1', 'Restaurant 2', 'Restaurant 3'];
let restaurantList = '<ul>';
restaurants.forEach(function(restaurant) {
  restaurantList += `<li>${restaurant}</li>`;
});
restaurantList += '</ul>';
document.getElementById('restaurantList').innerHTML = restaurantList;
