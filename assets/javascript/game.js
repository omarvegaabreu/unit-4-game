//The player will be shown a random number at the start of the game. This number should be
// between 19 - 120. random_results variable will have the values.
var random_results = Math.floor(Math.random() * (120 - 19) + 19);
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStartGame = function() {
  $("#result").html("Random Result: " + random_results);
  //Loop creates four crystals displayed as buttons on the page
  for (var i = 0; i < 4; i++) {
    //Each crystal should have a random hidden value between 1 - 12.
    var random = Math.floor(Math.random() * 12) + 1;

    var crystal = $("<div>");
    crystal.attr({
      class: "crystal",
      "data-random": random
    });
    $(".crystals").append(crystal);
  }
};

resetAndStartGame();

$(".crystal").on("click", function() {
  var num = parseInt($(this).attr("data-random"));

  previous += num;

  console.log(previous);

  if (previous > random_results) {
    lost--;
    $("#lost").html(win);
  } else if (previous === random_results) {
    win++;

    resetAndStartGame();

    $("#win").html(win);
  }
});

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

//The game will hide this amount until the player clicks a crystal.
//When the player clicks one crystal, it will dynamically update the player's score counter.

//The player wins if their total score matches the random number from the beginning of the game.

//The player loses if their score goes above the random number.

//The game restarts whenever the player wins or loses.

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
