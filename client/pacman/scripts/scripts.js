
var pacmanmove;
var ghostmove;
var ourWorld = null;
//var socket = io("http://172.22.101.197:8000/");
var socket = io();
   
socket.on('pacmanmove', function(msg){
//    console.log('message: ' + msg);
    clearInterval(pacmanmove);
    ourWorld.pacman.movePacman({keyCode:msg});
    pacmanmove = setInterval(function(){
    ourWorld.pacman.movePacman({keyCode:msg});
    },300); 
    });

socket.on('ghostmove', function(msg){
    clearInterval(ghostmove)     // 0 = up, 1 = right, 2 = down, 3 = left
    ourWorld.ghost.moveGhost({keyCode:msg})
    ghostmove = setInterval(function(){
    ourWorld.ghost.moveGhost({keyCode:msg})
    },400); 


  //  console.log('message: ' + msg);
    });


// document.onkeydown = function(e){
//     clearInterval(pacmanmove);
//     ourWorld.pacman.movePacman(e);
//     pacmanmove = setInterval(function(){
//     ourWorld.pacman.movePacman(e);
//     },400);
// };

function newGame(){
    clearInterval(pacmanmove);
    clearInterval(ghostmove);
    $('#pacman').css("transform","rotate(0deg)");
    ourWorld = new World();
    ourWorld.displayWorld();
    ourWorld.displayPacman();
    ourWorld.displayGhost();
    //ghostmove = setInterval(function(){
        //ourWorld.ghost.moveGhost();
    //}, 400);
    ourWorld.displayScore();
};



$(document).ready(function(){
    newGame();

    $('button').click(function(){
        newGame();
    });
});