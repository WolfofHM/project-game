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

class bigBlock {
    constructor() {
        this.positionX = 500;
        this.positionY = 0;
        this.height = 100;
        this.width = 50;
        this.bigBlockElm = null;

        this.createDomElement();



    }
    createDomElement() {
        this.bigBlockElm = document.createElement("div");

        this.bigBlockElm.classList.add("bigBlock");
        this.bigBlockElm.style.width = this.width + "px";
        this.bigBlockElm.style.height = this.height + "px";
        this.bigBlockElm.style.left = this.positionX + "px";
        this.bigBlockElm.style.bottom = this.positionY + "px";


        const parentElm = document.getElementById("game");
        parentElm.appendChild(this.bigBlockElm);
    }
    moveLeft() {
        this.positionX -= 10;
        this.bigBlockElm.style.left = this.positionX + "px"

    }
}

const player = new Player();

const bigBlockArr = [];

setInterval(() => {
    const newBigBlock = new bigBlock();
    bigBlockArr.push(newBigBlock);
}, 7000);

setInterval(() => {
    bigBlockArr.forEach((bigBlockInstance) => {
       
        bigBlockInstance.moveLeft();

        if(bigBlockInstance.positionX + bigBlockInstance.width < 0 ) {
            bigBlockInstance.bigBlockElm.remove();
            bigBlockArr.shift();
        }


        if (
            player.positionX < bigBlockInstance.positionX + bigBlockInstance.width &&
            player.positionX + player.width > bigBlockInstance.positionX &&
            player.positionY < bigBlockInstance.positionY + bigBlockInstance.height &&
            player.positionY + player.height > bigBlockInstance.positionY
         ) {
            console.log("game over")
            location.href = "./gameover.html";
        }
        
    });
}, 50);

const blockArr = [];


setInterval(() => {
    const newBlock = new Block();
    blockArr.push(newBlock);
}, 3000);

setInterval(() => {
    blockArr.forEach((blockInstance) => {
       
        blockInstance.moveLeft();
       
        if (
            player.positionX < blockInstance.positionX + blockInstance.width &&
            player.positionX + player.width > blockInstance.positionX &&
            player.positionY < blockInstance.positionY + blockInstance.height &&
            player.positionY + player.height > blockInstance.positionY
         ) {
            console.log("game over")
            location.href = "./gameover.html";
        }
        
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

