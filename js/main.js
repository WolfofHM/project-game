class Player {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.height = 20;
        this.width = 20;
    }
    moveUp(){   
        this.positionY++;
        console.log(`jumping... ${this.positionY}`)
    }
    moveRight(){
        this.positionX++;
        console.log(`moving to the right... ${this.positionX}`)
    }
    moveLeft() {
        this.positionX--;
        console.log(`moving to the left... ${this.positionX}`)
    }
}

const player = new Player();
player.moveLeft();
player.moveRight();
player.moveUp();
