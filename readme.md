# jQuery web application

### Overview

This assignment, was to create another interactive game for web browsers. The app dynamically updates the HTML pages with the jQuery library.

.

- Inside the `assets` directory, there are three additional folders: `javascript`, `css` and `images`.
  - In the `javascript` folder, the file called `game.js` contains the game logic in jquery.
  - In the `css` folder, the file called `style.css` constains the sheet used to style the `HTML` file'.

#CrystalsCollector Game

- Here's how the app works:

- There are four crystals displayed as buttons on the page.

- The player will be shown a random number at the start of the game.

- When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

  - The game will hide this amount until the player clicks a crystal.
  - When the player clicks one crystal, it will dynamically update the player's score counter.

- The player wins if their total score matches the random number from the beginning of the game.

- The player loses if their score goes above the random number.

- The game restarts whenever the player wins or loses.

  - When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

- The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
