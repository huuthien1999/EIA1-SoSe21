"use strict";
var Bienen;
(function (Bienen) {
    window.addEventListener("load", handleLoad);
    Bienen.golden = 0.62;
    let bienen = [];
    let flowers = [];
    let imageData;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Bienen.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createFlowers();
        imageData = Bienen.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        // window.setInterval(animate, 20);
    }
    function createBackground() {
        Bienen.drawBackground();
        let sunPos = new Bienen.Vector(Bienen.crc2.canvas.width / 2, Bienen.crc2.canvas.height * 0.15);
        Bienen.drawSun(sunPos);
        let mountainPos = new Bienen.Vector(0, Bienen.crc2.canvas.height * 0.62);
        Bienen.drawMountains(mountainPos, 200, 300, "grey");
        Bienen.drawMountains(mountainPos, 150, 200, "lightgrey");
        Bienen.drawTree(0, 15, 50, 20, 50);
    }
    function createFlowers() {
        let xPos = 0;
        do {
            flowers.push(new Bienen.Flowers(Math.floor(Math.random() * 2) + 1, xPos));
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < Bienen.crc2.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            bienen.push(new Bienen.Biene(500, 500, randomVelocityX, randomVelocityY, randomScale));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        Bienen.crc2.clearRect(0, 0, Bienen.crc2.canvas.width, Bienen.crc2.canvas.height);
        Bienen.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < bienen.length; index++) {
            bienen[index].update();
        }
    }
})(Bienen || (Bienen = {}));
//# sourceMappingURL=main.js.map