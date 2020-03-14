$( document ).ready(function() {
console.log("ready!");

// function getRecipes() {
//     var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     // We store all of the retrieved data inside of an object called "response"
//     .then(function(response) {
        
//         console.log(response);
//         console.log(queryURL);

//     });
// }

// getRecipes();
// function getRestaurants() {
//     var queryURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC_zrOsFx0s4YZLCAiI5i1cp_6J7z0Did8&q=burger";
// $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     // We store all of the retrieved data inside of an object called "response"
//     .then(function(response) {
        
//         console.log(response);
//         console.log(queryURL);

//     });
// }
// getRestaurants();



    var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nashville";
   function yelpCall() {
    $.ajax({
        url: yelpURL,
        method: "GET",
        headers: {
            "Authorization": "Bearer FX7G_LW66z7oBdEKO1pNijgUXQbOknj073l6OGxkmIZ1XWT7J2isalDcZmqv0UC0CM0yj3Mgqkqs-STQDSeOtL-C_RWLhzMbFdV1xdFV5RCmWXPWZz81cMkThT1tXnYx",
        }
    })

        .then(function(response){
            console.log(response);
        })
    }
    yelpCall();
//dont delete this dummy
});