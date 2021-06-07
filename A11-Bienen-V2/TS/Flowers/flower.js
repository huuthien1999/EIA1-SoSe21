"use strict";
var FlowersV2;
(function (FlowersV2) {
    class Flowers {
        constructor(_flowerType, _xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.flowerType = _flowerType;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            FlowersV2.crc2.save();
            FlowersV2.crc2.translate(this.xPos, y);
            FlowersV2.crc2.scale(randomScale, randomScale);
            FlowersV2.crc2.fillStyle = "green";
            FlowersV2.crc2.fillRect(0, 0, 5, 40);
            if (this.flowerType == 1) {
                for (let index = 0; index < 4; index++) {
                    FlowersV2.crc2.beginPath();
                    FlowersV2.crc2.rotate(Math.PI / 2);
                    FlowersV2.crc2.moveTo(0, 0);
                    FlowersV2.crc2.lineTo(-15, -15);
                    FlowersV2.crc2.lineTo(-5, -10);
                    FlowersV2.crc2.lineTo(0, -15);
                    FlowersV2.crc2.lineTo(5, -10);
                    FlowersV2.crc2.lineTo(15, -15);
                    FlowersV2.crc2.closePath();
                    FlowersV2.crc2.fillStyle = "blue";
                    FlowersV2.crc2.fill();
                }
                FlowersV2.crc2.restore();
            }
            else {
                FlowersV2.crc2.beginPath();
                FlowersV2.crc2.moveTo(0, 0);
                FlowersV2.crc2.lineTo(-15, -5);
                FlowersV2.crc2.lineTo(-25, -30);
                FlowersV2.crc2.lineTo(-10, -20);
                FlowersV2.crc2.lineTo(0, -40);
                FlowersV2.crc2.lineTo(10, -20);
                FlowersV2.crc2.lineTo(25, -30);
                FlowersV2.crc2.lineTo(15, -5);
                FlowersV2.crc2.closePath();
                FlowersV2.crc2.fillStyle = "pink";
                FlowersV2.crc2.fill();
                FlowersV2.crc2.restore();
            }
        }
    }
    FlowersV2.Flowers = Flowers;
})(FlowersV2 || (FlowersV2 = {}));
//# sourceMappingURL=flower.js.map