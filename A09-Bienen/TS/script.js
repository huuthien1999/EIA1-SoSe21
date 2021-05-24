"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    let canvas;
    let crc2;
    let golden = 0.62;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground();
        drawSun({ x: canvas.width / 2, y: canvas.height * 0.15 });
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 200, 300, "grey");
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 150, 200, "lightgrey");
        drawTree(0, 15, 50, 20, 50);
        cornFlower(20, 10, 50, 50 + (crc2.canvas.height * golden), crc2.canvas.height * 0.9);
        tulip(crc2.canvas.width * 0.6, 10, 50, 50 + (crc2.canvas.height * golden), crc2.canvas.height * 0.9);
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        crc2.save();
        // Sonne
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "yellow";
        crc2.arc(0, 0, 100, 0, 2 * Math.PI);
        crc2.fill();
        // Mund
        crc2.beginPath();
        crc2.moveTo(-50, 30);
        crc2.quadraticCurveTo(0, 100, 50, 30);
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(-25, -25, 15, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(25, -25, 15, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _color) {
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.restore();
    }
    function drawTree(_xPos, _xRandomMin, _xRandomMax, _yRandomMin, _yRandomMax) {
        do {
            let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
            let yTree1 = -50;
            let yTree2 = -150;
            let y = _yRandomMin + Math.random() * (_yRandomMax - _yRandomMin);
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            crc2.save();
            crc2.translate(_xPos, y + crc2.canvas.height * golden);
            crc2.scale(randomScale, randomScale);
            crc2.fillStyle = "brown";
            crc2.fillRect(0, 0, 10, -200);
            for (let index = 0; index < 3; index++) {
                crc2.beginPath();
                crc2.moveTo(-25, yTree1);
                crc2.lineTo(35, yTree1);
                crc2.lineTo(5, yTree2);
                crc2.closePath();
                crc2.fillStyle = treeColor[index];
                crc2.fill();
                yTree1 -= 50;
                yTree2 -= 30;
            }
            _xPos += _xRandomMin + Math.random() * (_xRandomMax - _xRandomMin);
            crc2.restore();
        } while (_xPos < crc2.canvas.width);
    }
    function cornFlower(_xPos, _xRandomMin, _xRandomMax, _yRandomMin, _yRandomMax) {
        do {
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = _yRandomMin + Math.random() * (_yRandomMax - _yRandomMin);
            crc2.save();
            crc2.translate(_xPos, y);
            crc2.scale(randomScale, randomScale);
            crc2.fillStyle = "green";
            crc2.fillRect(0, 0, 5, 40);
            for (let index = 0; index < 4; index++) {
                crc2.beginPath();
                crc2.rotate(Math.PI / 2);
                crc2.moveTo(0, 0);
                crc2.lineTo(-15, -15);
                crc2.lineTo(-5, -10);
                crc2.lineTo(0, -15);
                crc2.lineTo(5, -10);
                crc2.lineTo(15, -15);
                crc2.closePath();
                crc2.fillStyle = "blue";
                crc2.fill();
            }
            _xPos += _xRandomMin + Math.random() * (_xRandomMax - _xRandomMin);
            crc2.restore();
        } while (_xPos < crc2.canvas.width * 0.3);
    }
    function tulip(_xPos, _xRandomMin, _xRandomMax, _yRandomMin, _yRandomMax) {
        do {
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = _yRandomMin + Math.random() * (_yRandomMax - _yRandomMin);
            crc2.save();
            crc2.translate(_xPos, y);
            crc2.scale(randomScale, randomScale);
            crc2.fillStyle = "green";
            crc2.fillRect(0, 0, 5, 40);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-15, -5);
            crc2.lineTo(-25, -30);
            crc2.lineTo(-10, -20);
            crc2.lineTo(0, -40);
            crc2.lineTo(10, -20);
            crc2.lineTo(25, -30);
            crc2.lineTo(15, -5);
            crc2.closePath();
            crc2.fillStyle = "pink";
            crc2.fill();
            _xPos += _xRandomMin + Math.random() * (_xRandomMax - _xRandomMin);
            crc2.restore();
        } while (_xPos < crc2.canvas.width);
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=script.js.map