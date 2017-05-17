
function World(){
    //0 = empty, 1 = coin, 2 = wall, 3 = cherry
    this.map = [
            [2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2],
            [2,0,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2],
            [2,3,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,3,2],
            [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
            [1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2],
            [1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1],
            [2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
            [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
            [2,3,2,2,2,2,1,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,2,2,2,2,3,2],
            [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
            [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2]
            ];

    this.pacman = new Pacman();
    this.ghost = new Ghost();
    this.score = 0;
}

World.prototype.displayWorld = function(){
    var output = '';

    // console.log("dipslaying world");
    // console.log(document.getElementById('world'));
    for (var i=0; i < this.map.length; i++){
        output += "<div class='row'>";
        for (var j=0; j < this.map[i].length; j++){
            if (this.map[i][j] == 3)
                output += "<div class='cherry'></div>";
            else if (this.map[i][j] == 2)
                output += "<div class='brick'></div>";
            else if (this.map[i][j] == 1)
                output += "<div class='coin'></div>";
            if (this.map[i][j] === 0)
                output += "<div class='empty'></div>";
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}

World.prototype.displayPacman = function(){
    document.getElementById('pacman').style.top = this.pacman.y*20+"px";
    document.getElementById('pacman').style.left = this.pacman.x*20+"px";
}

World.prototype.displayScore = function(){
    document.getElementById('score').innerHTML = this.score;
}

World.prototype.displayGhost = function(){
    document.getElementById('ghost').style.top = this.ghost.y*20+"px";
    document.getElementById('ghost').style.left = this.ghost.x*20+"px";
}

World.prototype.checkCollision = function(){
    if (this.pacman.x === this.ghost.x && this.ghost.y === this.pacman.y){
        alert("You got eaten!");
        clearInterval(pacmanmove);
        clearInterval(ghostmove);
        //throw new Error('Game over man!');
    }
}

