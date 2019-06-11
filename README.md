# Arcade-Game
Udacity Front-End Web Developer Nanodegree Assignment

----

## Objective
The objective of the game is to make it to the water.

## Rules
1. The game runs on the arrow keys, no other key inputs will be accepted.  Make it to the water and win!

## Future updates
1.  Add score keeper
2.  Add increased difficulty as score increases
3. Add lives

## Code Notes

### JS Files
1. The resources.js file loads all images being used and keeps them in the cash for easy access.
2. The app.js file handles all aspects of player and enemies in the game.
3. The engine.js file calls for everything to be rendered and causes the app to refresh as needed to show enemy motion and player location changes.
### Important Functions
1. Enemy.prototype.update:  This function handles not only enemy location but it handles impact with player.
2. Player.prototype.handleInput:  This function handles inputs and resets player when needed.  Great place to add additional behaviors.
3. This game can be ran on your favorite browser.  First download the entire file then right click on index.html and select "Open with", followed by your choice of browser.



