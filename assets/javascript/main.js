var animals = ["Dogs", "Cat", "Rabbit", "Hamster", "Bird", "Chincilla", "Hedgehog", "Skunk", "Capybara", "Frog", "Goat"];

// $(document).ready(function() {
//     renderButtons();
// });
renderButtons();

//var gif_div = $('<div class="gif">');

$(".gif-btn").on("click", function(){
    var gifName = $(this).attr("data-name");
    console.log(gifName);
    displayGifs(gifName);
});

function renderButtons() {

    $('#buttons-view').empty();

    for ( var i=0 ; i<animals.length ; i++ ) {
        
        var btn = $("<button>");
        btn.addClass("gif-btn");
        btn.attr("data-name", animals[i]);
        btn.text(animals[i]);
        $("#buttons-view").append(btn);
        
    }
}

function displayGifs(gifName) {

    $("#gif-appear-here").empty();
    //gif_div.remove();

    var gifName ; //= $(this).attr("data-name");
    console.log(gifName);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=66doWKuArXOukr6i7JHVMmgDUmb2ommR";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        
        
        var results = response.data;
        console.log(results);
        
        for (var i = 0; i < results.length; i++) {
            
            if (results[i].rating !== "r" && results[i] !== "pg-13") {

                // var gif_div = $('<div class="gif">');
                gif_div = $('<div class="gif">');
                var rating = results[i].rating;
                var p_rating = $("<p>").text("Rating: " + rating);
                gif_div.append(p_rating);
                
                var gif_image = $("<img>");
                gif_image.attr("src", results[i].images.fixed_height.url);
                gif_div.append(gif_image);

                $("#gifs-appear-here").append(gif_div);
                

                // var gifDiv = $("<div>");ookolo

                // var rating = results[i].rating;
                // var p = $("<p>").text("Rating: " + rating);

                // var gif_image = $("<img>");
                // gif_image.attr("src", results[i].images.fixed_height.url);

                // gifDiv.prepend(p);
                // gifDiv.prepend(gif_image);

                // $("#gifs-appear-here").prepend(gifDiv);

            }
        }
        
    });
}