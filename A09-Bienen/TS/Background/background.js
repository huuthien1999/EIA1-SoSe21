"use strict";
var Bienen;
(function (Bienen) {
    function drawBackground() {
        let gradient = Bienen.crc2.createLinearGradient(0, 0, 0, Bienen.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Bienen.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        Bienen.crc2.fillStyle = gradient;
        Bienen.crc2.fillRect(0, 0, Bienen.crc2.canvas.width, Bienen.crc2.canvas.height);
    }
    Bienen.drawBackground = drawBackground;
    function drawSun(_position) {
        Bienen.crc2.save();
        Bienen.crc2.translate(_position.x, _position.y);
        Bienen.crc2.fillStyle = "yellow";
        Bienen.crc2.arc(0, 0, 100, 0, 2 * Math.PI);
        Bienen.crc2.fill();
        Bienen.crc2.beginPath();
        Bienen.crc2.moveTo(-50, 30);
        Bienen.crc2.quadraticCurveTo(0, 100, 50, 30);
        Bienen.crc2.stroke();
        Bienen.crc2.beginPath();
        Bienen.crc2.arc(-25, -25, 15, 0, 2 * Math.PI);
        Bienen.crc2.stroke();
        Bienen.crc2.beginPath();
        Bienen.crc2.arc(25, -25, 15, 0, 2 * Math.PI);
        Bienen.crc2.stroke();
        Bienen.crc2.restore();
    }
    Bienen.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _color) {
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        Bienen.crc2.save();
        Bienen.crc2.translate(_position.x, _position.y);
        Bienen.crc2.beginPath();
        Bienen.crc2.moveTo(0, 0);
        Bienen.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_min - Math.random() * (_max - _min);
            Bienen.crc2.lineTo(x, y);
        } while (x < Bienen.crc2.canvas.width);
        Bienen.crc2.lineTo(x, 0);
        Bienen.crc2.closePath();
        Bienen.crc2.fillStyle = _color;
        Bienen.crc2.fill();
        Bienen.crc2.restore();
    }
    Bienen.drawMountains = drawMountains;
    function drawTree(_xPos, _xRandomMin, _xRandomMax, _yRandomMin, _yRandomMax) {
        do {
            let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
            let yTree1 = -50;
            let yTree2 = -150;
            let y = _yRandomMin + Math.random() * (_yRandomMax - _yRandomMin);
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            Bienen.crc2.save();
            Bienen.crc2.translate(_xPos, y + Bienen.crc2.canvas.height * 0.62);
            Bienen.crc2.scale(randomScale, randomScale);
            Bienen.crc2.fillStyle = "brown";
            Bienen.crc2.fillRect(0, 0, 10, -200);
            for (let index = 0; index < 3; index++) {
                Bienen.crc2.beginPath();
                Bienen.crc2.moveTo(-25, yTree1);
                Bienen.crc2.lineTo(35, yTree1);
                Bienen.crc2.lineTo(5, yTree2);
                Bienen.crc2.closePath();
                Bienen.crc2.fillStyle = treeColor[index];
                Bienen.crc2.fill();
                yTree1 -= 50;
                yTree2 -= 30;
            }
            _xPos += _xRandomMin + Math.random() * (_xRandomMax - _xRandomMin);
            Bienen.crc2.restore();
        } while (_xPos < Bienen.crc2.canvas.width);
    }
    Bienen.drawTree = drawTree;
    function drawBeeHive() {
        Bienen.crc2.save();
        Bienen.crc2.translate(Bienen.crc2.canvas.width / 2, Bienen.crc2.canvas.height * 0.7);
        Bienen.crc2.scale(8, 8);
        Bienen.crc2.lineWidth = 0.5;
        Bienen.crc2.strokeStyle = "black";
        Bienen.crc2.beginPath();
        Bienen.crc2.moveTo(0, 0);
        Bienen.crc2.lineTo(-5.5, -1);
        Bienen.crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        Bienen.crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        Bienen.crc2.quadraticCurveTo(0, -12, 1.5, -11);
        Bienen.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Bienen.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Bienen.crc2.quadraticCurveTo(6, -6, 5.5, -1);
        Bienen.crc2.fillStyle = "yellow";
        Bienen.crc2.fill();
        Bienen.crc2.closePath();
        Bienen.crc2.stroke();
        Bienen.crc2.beginPath();
        Bienen.crc2.arc(0, -8, 1.5, 0, 2 * Math.PI);
        Bienen.crc2.fillStyle = "black";
        Bienen.crc2.fill();
        Bienen.crc2.closePath();
        Bienen.crc2.restore();
    }
    Bienen.drawBeeHive = drawBeeHive;
})(Bienen || (Bienen = {}));
//# sourceMappingURL=background.js.map