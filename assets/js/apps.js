
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

            var imgDiv = $('<div class="image">');
            $('<img src=' + recipeData.meals[j].strMealThumb + '>').appendTo(imgDiv);
            imgDiv.appendTo(recipeCard);

            var cardBody = $('<div class ="content">')
            $('<h4>').text(recipeData.meals[j].strMeal).appendTo(cardBody);
            $('<h4>').text(recipeData.meals[j].strArea).appendTo(cardBody);
            $('<a class="link" href="recipeData.meals[j].strYoutube">').text(recipeData.meals[j].strYoutube).appendTo(cardBody);


            console.log(recipeData.meals[j].strMeal);
            console.log(recipeData.meals[j].strArea);
            console.log(recipeData.meals[j].strYoutube);


            cardBody.appendTo(recipeCard);
            recipeCard.appendTo(resultSection);


        }

    });
}



    
   function yelpCall() {
    
    var queryTerm = "";
    
    var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nashville&term=" + queryTerm;



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
          
            for (var i = 0; i < 6; i++) {
                console.log(response.businesses[i].name);
                console.log(response.businesses[i].url);
                console.log(response.businesses[i].rating);
                console.log(response.businesses[i].display_phone);
                console.log(response.businesses[i].location.display_address[0] + response.businesses[0].location.display_address[1]);
                console.log(response.businesses[i].location.display_address[1]);

                var card = $("<div>");
                card.addClass("ui card");
                card.append("<h4>" + response.businesses[i].name + "<h4>");
                $("#results").append(card);
                }
        })
    }

$( document ).ready(function() {
    $('#recipeBtn').on('click', function(e){
        e.preventDefault();
        getRecipes();
    })
    $("#restaurantBtn").on("click", function(e) {
        e.preventDefault();
      yelpCall();
    })

//dont delete this dummy
});

