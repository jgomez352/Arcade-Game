// Enemies our player must avoid
var Enemy = function Enemy(x, y, s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = s;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 707) {
        this.x = -100;
        var newSpeed = Math.floor(Math.random() * 4 + 1);
        this.speed = 80 * newSpeed;
    }
    let enemyMaxLeftX = this.x - 70;
    let enemyMaxRightX = this.x + 70;
    let enemyMaxTopY = this.y - 60;
    let enemyMaxBottomY = this.y + 60;

    if (player.x > enemyMaxLeftX && player.x < enemyMaxRightX && player.y > enemyMaxTopY && player.y < enemyMaxBottomY) {
        console.log("you have died!!!")
        player.resetPostion();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function Player() {

    this.sprite = "images/char-boy.png";
    this.x = 202;
    this.y = 404;
    this.x_step = 101;
    this.y_step = 83;
}

Player.prototype.resetPostion = function () {
    this.x = 202;
    this.y = 404;
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (direction) {

    if (document.getElementById("WinModal").className != "modal fade show") {
        switch (direction) {
            case 'left':
                this.x >= this.x_step ? this.x -= this.x_step : this.x -= 0;
                break;
            case 'right':
                this.x <= (this.x_step * 3) ? this.x += this.x_step : this.x += 0;
                break;
            case 'up':
                this.y -= this.y_step;
                if (this.y === -11) {
                    player.resetPostion();
                    console.log('reset postion')
                    winner();
                }
                break;
            case 'down':
                this.y <= (this.y_step * 4) ? this.y += this.y_step : this.y += 0;

                break;
        }
    }
    
};

// Now instantiate your objects.

let enemy0 = new Enemy(-80, 60 + 80 * 0, (Math.floor(Math.random() * 4 + 1) * 60));
let enemy1 = new Enemy(-80, 60 + 80 * 1, (Math.floor(Math.random() * 4 + 1) * 60));
let enemy2 = new Enemy(-80, 60 + 80 * 2, (Math.floor(Math.random() * 4 + 1) * 60));

// Place all enemy objects in an array called allEnemies
window.allEnemies = [enemy0, enemy1, enemy2];

// Place the player object in a variable called player
window.player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    if (allowedKeys[e.keyCode]) {
        player.handleInput(allowedKeys[e.keyCode]);
    }
});

//Handles winning
function winner() {
    let modalItem = document.querySelector('.modal-body');
    $('#WinModal').modal('toggle');
};
