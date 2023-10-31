class Player {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.height = 50;
        this.width = 30;


        const playerElm = document.getElementById("player");
        playerElm.style.width = this.width +"px";
        playerElm.style.height = this.height +"px";

        playerElm.style.bottom = this.positionY + "px"
        playerElm.style.left = this.positionX + "px"
        
    }

    moveUp(){   
        this.positionY++;
        console.log(`jumping... ${this.positionY}`)
        setTimeout(() => {
            this.moveDown();
        }, 1000);
    }
    moveRight(){
        this.positionX++;
        console.log(`moving to the right... ${this.positionX}`)
    }
    moveLeft() {
        this.positionX--;
        console.log(`moving to the left... ${this.positionX}`)
    }
    moveDown() {
        this.positionY--;
        console.log(`Moving down... ${this.positionY}`);
    }
}


const player = new Player();
player.moveLeft();
player.moveRight();
player.moveUp();


class Block {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.height = 40;
        this.width = 40;
    }

}