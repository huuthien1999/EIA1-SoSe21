"use strict";
var FlowersV2;
(function (FlowersV2) {
    window.addEventListener("load", handleLoad);
    FlowersV2.golden = 0.62;
    let movables = [];
    let flowers = [];
    // let clouds: Cloud[] = [];
    let imageData;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        FlowersV2.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createFlowers();
        createCloud();
        imageData = FlowersV2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        FlowersV2.drawBackground();
        FlowersV2.drawSun({ x: FlowersV2.crc2.canvas.width / 2, y: FlowersV2.crc2.canvas.height * 0.15 });
        FlowersV2.drawMountains({ x: 0, y: FlowersV2.crc2.canvas.height * FlowersV2.golden }, 200, 300, "grey");
        FlowersV2.drawMountains({ x: 0, y: FlowersV2.crc2.canvas.height * FlowersV2.golden }, 150, 200, "lightgrey");
        FlowersV2.drawTree(0, 15, 50, 20, 50);
        FlowersV2.drawBeeHive();
    }
    function createFlowers() {
        let xPos = 0;
        do {
            flowers.push(new FlowersV2.Flowers(Math.floor(Math.random() * 2) + 1, xPos, 50 + (FlowersV2.crc2.canvas.height * FlowersV2.golden), FlowersV2.crc2.canvas.height * 0.9));
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < FlowersV2.crc2.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            movables.push(new FlowersV2.Bee({ x: FlowersV2.crc2.canvas.width / 2, y: FlowersV2.crc2.canvas.height * FlowersV2.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        movables.push(new FlowersV2.Cloud({ x: FlowersV2.crc2.canvas.width * .10, y: FlowersV2.crc2.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        movables.push(new FlowersV2.Cloud({ x: FlowersV2.crc2.canvas.width * .5, y: FlowersV2.crc2.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        FlowersV2.crc2.clearRect(0, 0, FlowersV2.crc2.canvas.width, FlowersV2.crc2.canvas.height);
        FlowersV2.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < movables.length; index++) {
            movables[index].update();
            movables[index].draw();
        }
    }
    class Hund {
        constructor(_name, _vorname) {
            this.name = "test";
            this.vorname = "blub";
            this.name = _name;
            this.vorname = _vorname;
        }
        ichSeheEinSchaf() {
            console.log("wau wau " + this.name + this.vorname);
        }
    }
    class Pudel extends Hund {
        constructor(_name, _vorname) {
            super(_name, _vorname);
        }
        ichSeheEinSchaf() {
            console.log("wau wau ich belle wie ein kind " + this.name + this.vorname);
        }
    }
    class Bulldogge extends Hund {
        // constructor(_name: string, _vorname: string) {
        //     super(_name, _vorname);
        // }
        ichSeheEinSchaf() {
            console.log("wau wau ich baller die WEG AMK " + this.name + this.vorname);
        }
    }
    let hund1 = new Hund("killua", "zoldyck");
    hund1.ichSeheEinSchaf();
    let hund2 = new Pudel("Gon", "Freeces");
    hund2.ichSeheEinSchaf();
    let hund3 = new Bulldogge("Ging", "Freeces");
    hund3.ichSeheEinSchaf();
    // let hund2: Hund = new Pudel("Gon", "Freeces");
    // hund2.ichSeheEinSchaf();
    // let hund3: Hund = new Bulldogge("Ging", "Freeces");
    // hund3.ichSeheEinSchaf();
})(FlowersV2 || (FlowersV2 = {}));
//# sourceMappingURL=main.js.map