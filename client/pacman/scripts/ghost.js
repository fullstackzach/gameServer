function Ghost(){
    this.x = 14;
    this.y = 14;
}

Ghost.prototype.moveGhost = function(direction){
    //var direction = Math.floor(Math.random() * 4);
    // 0 = up, 1 = right, 2 = down, 3 = left
    
    if (direction.keyCode == 37){
        //left
        // $('#ghost').css("transform","rotate(0deg)");
        
        if(ourWorld.map[this.y][this.x-1] != 2){
            this.x--;
            if(this.x==-1){
                this.x = ourWorld.map[this.y].length-1;
            }
        }
        else {
            //this.moveGhost();
        }
    }
    else if(direction.keyCode == 39){
        //right
        // $('#ghost').css("transform","rotate(deg)");
        if(ourWorld.map[this.y][this.x+1] != 2){
            this.x++;
            if(this.x==ourWorld.map[this.y].length){
                this.x = 0;
            }
        }
        else {
            //this.moveGhost();
        }
    }
    else if(direction.keyCode == 38){
        //up
        if(this.y==0){
            this.y = ourWorld.map.length-1;
        }else if(ourWorld.map[this.y-1][this.x] != 2){
            this.y--;
        }
        else {
            //this.moveGhost();
        }
    }
    else if(direction.keyCode == 40){
        //down
        if(this.y==ourWorld.map.length-1){
            this.y = 0;
        }else if(ourWorld.map[this.y+1][this.x] != 2){
            this.y++;
        }
        else {
            //this.moveGhost();
        }
    }

    ourWorld.displayGhost();
    ourWorld.checkCollision();
}