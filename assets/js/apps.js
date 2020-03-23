
var resultSection = $('#results');


function getRecipes() {
    var userInput = $('#inputField').val();
    console.log(userInput);
    resultSection.empty();
    if (userInput !== "") {

        var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput;

        $.ajax({
        url: queryURL,
        method: "GET"
        })
    // We store all of the retrieved data inside of an object called "response"
        .then(function(recipeData) {

            for(var j=0; j < recipeData.meals.length; j++) {

                var recipeCard = $('<div class ="ui card">')

                var imgDiv = $('<div class="image">');
                $('<img src=' + recipeData.meals[j].strMealThumb + '>').appendTo(imgDiv);
                imgDiv.appendTo(recipeCard);

                var cardBody = $('<div class ="content">')
                $('<h4>').text(recipeData.meals[j].strMeal).appendTo(cardBody);
                $('<h4>').text(recipeData.meals[j].strArea).appendTo(cardBody);
                $('<a class="link" href="recipeData.meals[j].strYoutube">').text(recipeData.meals[j].strYoutube).appendTo(cardBody);

                cardBody.appendTo(recipeCard);
                recipeCard.appendTo(resultSection);


            }
        });
    }

}



    
   function yelpCall() {
    
    var queryTerm = $("#inputField").val().trim();
    
    resultSection.empty();
    
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
                console.log(response.businesses[i].image_url);
                console.log(response.businesses[i].url);
                console.log(response.businesses[i].rating);
                console.log(response.businesses[i].display_phone);
                console.log(response.businesses[i].location.display_address[0]);
                console.log(response.businesses[i].location.display_address[1]);
            // ======================================================================================================

            //    TESTING CARD LAYOUT

               var card = $("<div class='ui card'>");
               

               var imageLink = $("<a class='image'>");
               imageLink.attr("href", response.businesses[i].url);
            //    link.text(response.businesses[i].url).appendTo(description);



            //    var imageDiv = $("<div class='image'>")
               var image = $("<img />").appendTo(imageLink);
               image.attr("src", response.businesses[i].image_url);
            //    imageDiv.append(image);

               var content = $("<div class='content'>");
               var header = $("<div class='header'>");
               $("<h4>").text(response.businesses[i].name).appendTo(header);

               var description = $("<div class='description'>");
               $("<p>").text(response.businesses[i].display_phone).appendTo(description);
               $("<p>").text(response.businesses[i].location.display_address[0]).appendTo(description);
               $("<p>").text(response.businesses[i].location.display_address[1]).appendTo(description);

               
              
               content.append(header, description);
               card.append(imageLink, content);
               resultSection.append(card);
            
            // ==================================================================================================
            //    TESTING ITEM LAYOUT

                // var card = $("<div class='ui card'>");
                // var uiItemsDiv = $("<div class='ui items'>");
                // var itemsDiv = $("<div class='item'>");

                // var imageDiv = $("<div class='image'>");
                // var image = $("<img />").appendTo(imageDiv);
                // image.attr("src", response.businesses[i].image_url);

                // var content = $("<div class='content'>");
                // var header = $("<div class='header'>").appendTo(content);
                // $("<h4>").text(response.businesses[i].name).appendTo(header);

                // var description = $("<div class='description'>").appendTo(content);
                // $("<p>").text(response.businesses[i].rating + " stars").appendTo(description);
                // $("<p>").text(response.businesses[i].display_phone).appendTo(description);
                // $("<p>").text(response.businesses[i].location.display_address[0]).appendTo(description);
                // $("<p>").text(response.businesses[i].location.display_address[1]).appendTo(description);

                // var link = $("<a>");
                // link.attr("href", response.businesses[i].url);
                // link.text(response.businesses[i].url).appendTo(description);

               
               
                // itemsDiv.append(imageDiv, content);
                // uiItemsDiv.append(itemsDiv);
                // card.append(uiItemsDiv);
                // resultSection.append(card);
        
                
                
                
                
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

