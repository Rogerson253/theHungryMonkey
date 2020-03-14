$( document ).ready(function() {
console.log("ready!");

function getRecipes() {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"

$.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
        
        console.log(response);
        console.log(queryURL);

    });
}

getRecipes();
function getRestaurants() {
    var queryURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC_zrOsFx0s4YZLCAiI5i1cp_6J7z0Did8&q=burger";
$.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
        
        console.log(response);
        console.log(queryURL);

    });
}
getRestaurants();

//dont delete this dummy
});