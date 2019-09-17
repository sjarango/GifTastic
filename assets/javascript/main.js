var animals = ["Dogs", "Cat", "Rabbit", "Hamster", "Bird", "Chincilla", "Hedgehog", "Skunk", "Capybara", "Frog", "Goat"];

$(document).ready(function() {
    renderButtons();
});

function renderButtons() {

    $('#buttons-view').empty();

    for ( var i=0 ; i<animals.length ; i++ ) {
        $('#buttons-view')
        .append('<button value="' + animals[i] + '">' + animals[i] + '</button');
    }
}