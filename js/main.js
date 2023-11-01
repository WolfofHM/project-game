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
        this.blockElm = null;

        this.createDomElement();



    }
    createDomElement() {
        this.blockElm = document.createElement("div");

        this.blockElm.classList.add("block");
        this.blockElm.style.width = this.width + "px";
        this.blockElm.style.height = this.height + "px";
        this.blockElm.style.left = this.positionX + "px";
        this.blockElm.style.bottom = this.positionY + "px";


        const parentElm = document.getElementById("game");
        parentElm.appendChild(this.blockElm);
    }
    moveLeft() {
        this.positionX -= 10;
        this.blockElm.style.left = this.positionX + "px"

    }
}

const player = new Player();

const blockArr = [];

/*setInterval(() => {
    blo1.moveLeft();
}, 1000);*/
setInterval(() => {
    const newBlock = new Block();
    blockArr.push(newBlock);
}, 2000);

setInterval(() => {
    blockArr.forEach((blockInstance) => {
        blockInstance.moveLeft();
    });
}, 50);


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

