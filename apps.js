
var resultSection = $('#results');


function getRecipes() {
    var userInput = $('#inputField').val();
    console.log(userInput);

    resultSection.empty();

    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput;

    $.ajax({
    url: queryURL,
    method: "GET"
     })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(recipeData) {
        
        console.log(recipeData);
        console.log(queryURL);

        for(var j=0; j < recipeData.meals.length; j++) {

            var recipeCard = $('<div class ="ui card">')
            var cardBody = $('<div class ="content">')

            $('<p>').text(recipeData.meals[j].strMeal).appendTo(cardBody);
            console.log(recipeData.meals[j].strMeal);
            console.log(recipeData.meals[j].strArea);
            console.log(recipeData.meals[j].strYoutube);


            cardBody.appendTo(recipeCard);
            recipeCard.appendto(resultSection);


        }

    });
}



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
            console.log(yelpURL);
            console.log(response.businesses[0].name);
            console.log(response.businesses[0].url);
            console.log(response.businesses[0].rating);
            console.log(response.businesses[0].display_phone);
            console.log(response.businesses[0].location.display_address[0] + response.businesses[0].location.display_address[1]);
            console.log(response.businesses[0].location.display_address[1]);
        })
    }


// $('#recipeBtn').on('click', function(e){
//     e.preventDefault();
//     getRecipes();
// })
// $("#restaurantBtn").on("click", function(e) {
//     e.preventDefault();
// })

$( document ).ready(function() {
    $('#recipeBtn').on('click', function(e){
        e.preventDefault();
        getRecipes();
    })
    $("#restaurantBtn").on("click", function(e) {
        e.preventDefault();
    })

//dont delete this dummy
});

