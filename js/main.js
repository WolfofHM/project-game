class Player {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.height = 50;
        this.width = 30;


        const playerElm = document.getElementById("player");
        playerElm.style.width = this.width + "px";
        playerElm.style.height = this.height + "px";

        playerElm.style.bottom = this.positionY + "px";
        playerElm.style.left = this.positionX + "px";

    }

    moveUp() {
        this.positionY+=50;

        const elm = document.getElementById("player");
        elm.style.bottom = this.positionY + "px";

        console.log(`jumping... ${this.positionY}`)
        
        setTimeout(() => {
            this.moveDown();
        }, 2000); 
    }
    moveRight() {
        this.positionX+=10;

        const elm = document.getElementById("player");
        elm.style.left = this.positionX + "px";
    }
    moveLeft() {
        this.positionX-=10;
       
        const elm = document.getElementById("player");
        elm.style.left = this.positionX + "px";
    }
    moveDown() {
        this.positionY-= 50;

        const elm = document.getElementById("player");
        elm.style.bottom = this.positionY +"px";
        
    }
}


const player = new Player();


document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "a":
            console.log("pressed left");
            player.moveLeft();
            break;
        case "d":
            console.log("pressed right");
            player.moveRight();
            break;
        case "w":
            console.log("pressed up");
            player.moveUp();
            break;
    }
});

