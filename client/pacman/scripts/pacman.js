function Pacman(){
    this.x = 1;
    this.y = 1;
}

Pacman.prototype.movePacman = function(e){
    if (e.keyCode == 37){
        //left
        $('#pacman').css("transform","rotate(180deg)");
        if(ourWorld.map[this.y][this.x-1] != 2){
            this.x--;
            // console.log(this.x);
            if(this.x==-1){
                this.x = ourWorld.map[this.y].length-1;
            }
        }
    }
    else if(e.keyCode == 39){
        //right
        $('#pacman').css("transform","rotate(0deg)");
        if(ourWorld.map[this.y][this.x+1] != 2){
            this.x++;
            if(this.x==ourWorld.map[this.y].length){
                this.x = 0;
            }
        }
    }
    else if(e.keyCode == 38){
        //up
        $('#pacman').css("transform","rotate(270deg)");
        if(this.y==0){
            this.y = ourWorld.map.length-1;
        }else if(ourWorld.map[this.y-1][this.x] != 2){
            this.y--;
        }
    }
    else if(e.keyCode == 40){
        //down
        $('#pacman').css("transform","rotate(90deg)");
        if(this.y==ourWorld.map.length-1){
            this.y = 0;
        }else if(ourWorld.map[this.y+1][this.x] != 2){
            this.y++;
        }
    }
    
    if (ourWorld.map[this.y][this.x] == 1){
        ourWorld.map[this.y][this.x] = 0;
        score+=10;
        ourWorld.displayWorld();
        ourWorld.displayScore();
    }else if(ourWorld.map[this.y][this.x] == 3){
        ourWorld.map[this.y][this.x] = 0;
        score+=100;
        ourWorld.displayWorld();
        ourWorld.displayScore();
    }else if(ourWorld.map[this.y][this.x] == 4){
        ourWorld.map[this.y][this.x] = 0;
        ourWorld.displayWorld();
        //change ghost image
        //set eat ghost flag
    }

    ourWorld.displayPacman();
    ourWorld.checkCollision();
}