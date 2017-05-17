
var pacmanmove;
var ghostmove;
var ourWorld = null;

document.onkeydown = function(e){
    clearInterval(pacmanmove);
    ourWorld.pacman.movePacman(e);
    pacmanmove = setInterval(function(){
        ourWorld.pacman.movePacman(e);
    },400);
};



$(document).ready(function(){

    function newGame(){
        ourWorld = new World();
        ourWorld.displayWorld();
        ourWorld.displayPacman();
        ourWorld.displayGhost();
        ghostmove = setInterval(function(){
            ourWorld.ghost.moveGhost();
        }, 400);
        ourWorld.displayScore();
    }

    newGame();
});