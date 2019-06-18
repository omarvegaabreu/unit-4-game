//The player will be shown a random number at the start of the game. This number should be
// between 19 - 120. random_results variable will have the values.
// random numbers are attached the the global variables in order for all functions to have access.
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStartGame = function() {
  $(".crystals").empty(); //Will hide this amount until the player clicks a crystal.

  var images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIf50aKBfIAEOTiN6USnYlI5Sa1Dwp4kgPsDEy9ZZEXsPuUeKBw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIf50aKBfIAEOTiN6USnYlI5Sa1Dwp4kgPsDEy9ZZEXsPuUeKBw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIf50aKBfIAEOTiN6USnYlI5Sa1Dwp4kgPsDEy9ZZEXsPuUeKBw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIf50aKBfIAEOTiN6USnYlI5Sa1Dwp4kgPsDEy9ZZEXsPuUeKBw"
  ];
  random_result = Math.floor(Math.random() * (120 - 19) + 19);
  $("#result").html("Match the number: " + random_result);
  //Loop creates four crystals displayed as buttons on the page.
  for (var i = 0; i < 4; i++) {
    //Each crystal should have a random hidden value between 1 - 12.
    var random = Math.floor(Math.random() * 12) + 1;
    //variable to add div to the crystals loop.
    var crystal = $("<div>");

    //This object adds attributes in the html taking the random variable.
    crystal.attr({
      class: "crystal",
      "data-random": random
    });
    crystal.css({
      "background-image": "url(" + images[i] + ") "
    });

    //This method assignees a random number to the in the html to view results from random variable.
    //crystal.html(random);

    //jquery functions to append the crystal variable which contains the <divs> to the html.
    $(".crystals").append(crystal);
  }

  $("#previous").html("Total Score: " + previous);
};

//function call which restarts game.
resetAndStartGame();

//When the player clicks on a crystal,
//When the player clicks one crystal, it will dynamically update the player's score counter.
//it will add a specific amount of points to the player's total score.
$(document).on("click", ".crystal", function() {
  var num = parseInt($(this).attr("data-random"));

  previous += num;

  $("#previous").html("Total Score: " + previous);

  console.log(previous);

  if (previous > random_result) {
    lost++;

    $("#lost").html("You have lost: " + lost + " times.");
    //The player loses if their score goes above the random number.
    previous = 0;

    // $("#previous").html(previous);

    resetAndStartGame(); //The game restarts whenever the player wins or loses.
  } else if (previous === random_result) {
    win++;

    $("#win").html("You've won: " + win + " times.");

    //$("#previous").html(previous);

    previous = 0;

    resetAndStartGame(); //The game restarts whenever the player wins or loses.
  }
});
