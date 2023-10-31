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
        this.positionY += 50;

        const elm = document.getElementById("player");
        elm.style.bottom = this.positionY + "px";

        console.log(`jumping... ${this.positionY}`)

        setTimeout(() => {
            this.moveDown();
        }, 1000);
    }
    moveRight() {
        this.positionX += 10;

        const elm = document.getElementById("player");
        elm.style.left = this.positionX + "px";
    }
    moveLeft() {
        this.positionX -= 10;

        const elm = document.getElementById("player");
        elm.style.left = this.positionX + "px";
    }
    moveDown() {
        this.positionY -= 50;

        const elm = document.getElementById("player");
        elm.style.bottom = this.positionY + "px";

    }
}

class Block {
    constructor() {
        this.positionX = 500;
        this.positionY = 0;
        this.height = 30;
        this.width = 30;

        this.createDomElement();



    }
    createDomElement() {
        const newElm = document.createElement("div");

        newElm.classList.add("block");
        newElm.style.width = this.width + "px";
        newElm.style.height = this.height + "px";
        newElm.style.left = this.positionX + "px";
        newElm.style.bottom = this.positionY + "px";


        const parentElm = document.getElementById("game");
        parentElm.appendChild(newElm);
    }
    moveLeft() {
        this.positionX -= 10;
        console.log(`moving left ${this.positionX}`);

    }
}

const player = new Player();

const blo1 = new Block();
const blo2 = new Block();
const blo3 = new Block();
const blo4 = new Block();




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

