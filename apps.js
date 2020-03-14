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

//dont delete this dummy
});