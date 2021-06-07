"use strict";
var FlowersV2;
(function (FlowersV2) {
    function drawBackground() {
        let gradient = FlowersV2.crc2.createLinearGradient(0, 0, 0, FlowersV2.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(FlowersV2.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        FlowersV2.crc2.fillStyle = gradient;
        FlowersV2.crc2.fillRect(0, 0, FlowersV2.crc2.canvas.width, FlowersV2.crc2.canvas.height);
    }
    FlowersV2.drawBackground = drawBackground;
    function drawSun(_position) {
        FlowersV2.crc2.save();
        FlowersV2.crc2.translate(_position.x, _position.y);
        FlowersV2.crc2.fillStyle = "yellow";
        FlowersV2.crc2.arc(0, 0, 100, 0, 2 * Math.PI);
        FlowersV2.crc2.fill();
        FlowersV2.crc2.beginPath();
        FlowersV2.crc2.moveTo(-50, 30);
        FlowersV2.crc2.quadraticCurveTo(0, 100, 50, 30);
        FlowersV2.crc2.stroke();
        FlowersV2.crc2.beginPath();
        FlowersV2.crc2.arc(-25, -25, 15, 0, 2 * Math.PI);
        FlowersV2.crc2.stroke();
        FlowersV2.crc2.beginPath();
        FlowersV2.crc2.arc(25, -25, 15, 0, 2 * Math.PI);
        FlowersV2.crc2.stroke();
        FlowersV2.crc2.restore();
    }
    FlowersV2.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _color) {
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        FlowersV2.crc2.save();
        FlowersV2.crc2.translate(_position.x, _position.y);
        FlowersV2.crc2.beginPath();
        FlowersV2.crc2.moveTo(0, 0);
        FlowersV2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_min - Math.random() * (_max - _min);
            FlowersV2.crc2.lineTo(x, y);
        } while (x < FlowersV2.crc2.canvas.width);
        FlowersV2.crc2.lineTo(x, 0);
        FlowersV2.crc2.closePath();
        FlowersV2.crc2.fillStyle = _color;
        FlowersV2.crc2.fill();
        FlowersV2.crc2.restore();
    }
    FlowersV2.drawMountains = drawMountains;
    function drawTree(_xPos, _xRandomMin, _xRandomMax, _yRandomMin, _yRandomMax) {
        do {
            let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
            let yTree1 = -50;
            let yTree2 = -150;
            let y = _yRandomMin + Math.random() * (_yRandomMax - _yRandomMin);
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            FlowersV2.crc2.save();
            FlowersV2.crc2.translate(_xPos, y + FlowersV2.crc2.canvas.height * 0.62);
            FlowersV2.crc2.scale(randomScale, randomScale);
            FlowersV2.crc2.fillStyle = "brown";
            FlowersV2.crc2.fillRect(0, 0, 10, -200);
            for (let index = 0; index < 3; index++) {
                FlowersV2.crc2.beginPath();
                FlowersV2.crc2.moveTo(-25, yTree1);
                FlowersV2.crc2.lineTo(35, yTree1);
                FlowersV2.crc2.lineTo(5, yTree2);
                FlowersV2.crc2.closePath();
                FlowersV2.crc2.fillStyle = treeColor[index];
                FlowersV2.crc2.fill();
                yTree1 -= 50;
                yTree2 -= 30;
            }
            _xPos += _xRandomMin + Math.random() * (_xRandomMax - _xRandomMin);
            FlowersV2.crc2.restore();
        } while (_xPos < FlowersV2.crc2.canvas.width);
    }
    FlowersV2.drawTree = drawTree;
    function drawBeeHive() {
        FlowersV2.crc2.save();
        FlowersV2.crc2.translate(FlowersV2.crc2.canvas.width / 2, FlowersV2.crc2.canvas.height * 0.7);
        FlowersV2.crc2.scale(8, 8);
        FlowersV2.crc2.lineWidth = 0.5;
        FlowersV2.crc2.strokeStyle = "black";
        FlowersV2.crc2.beginPath();
        FlowersV2.crc2.moveTo(0, 0);
        FlowersV2.crc2.lineTo(-5.5, -1);
        FlowersV2.crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        FlowersV2.crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        FlowersV2.crc2.quadraticCurveTo(0, -12, 1.5, -11);
        FlowersV2.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        FlowersV2.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        FlowersV2.crc2.quadraticCurveTo(6, -6, 5.5, -1);
        FlowersV2.crc2.fillStyle = "yellow";
        FlowersV2.crc2.fill();
        FlowersV2.crc2.closePath();
        FlowersV2.crc2.stroke();
        FlowersV2.crc2.beginPath();
        FlowersV2.crc2.arc(0, -8, 1.5, 0, 2 * Math.PI);
        FlowersV2.crc2.fillStyle = "black";
        FlowersV2.crc2.fill();
        FlowersV2.crc2.closePath();
        FlowersV2.crc2.restore();
    }
    FlowersV2.drawBeeHive = drawBeeHive;
})(FlowersV2 || (FlowersV2 = {}));
//# sourceMappingURL=background.js.map