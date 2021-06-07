"use strict";
var FlowersV2;
(function (FlowersV2) {
    class Bee extends FlowersV2.Movable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            FlowersV2.crc2.save();
            FlowersV2.crc2.translate(this.posX, this.posY);
            FlowersV2.crc2.scale(this.randomScale, this.randomScale);
            FlowersV2.crc2.lineWidth = 2;
            FlowersV2.crc2.strokeStyle = "black";
            FlowersV2.crc2.fillStyle = "gold";
            FlowersV2.crc2.beginPath();
            FlowersV2.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            FlowersV2.crc2.fill();
            FlowersV2.crc2.beginPath();
            FlowersV2.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            FlowersV2.crc2.stroke();
            FlowersV2.crc2.beginPath();
            FlowersV2.crc2.fillStyle = "white";
            FlowersV2.crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            FlowersV2.crc2.fill();
            FlowersV2.crc2.stroke();
            FlowersV2.crc2.beginPath();
            FlowersV2.crc2.fillStyle = "white";
            FlowersV2.crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            FlowersV2.crc2.fill();
            FlowersV2.crc2.stroke();
            FlowersV2.crc2.beginPath();
            FlowersV2.crc2.arc(-2, -1, 2, 0, Math.PI * 2, false);
            FlowersV2.crc2.stroke();
            FlowersV2.crc2.beginPath();
            FlowersV2.crc2.arc(2, -1, 2, 0, Math.PI * 2, false);
            FlowersV2.crc2.stroke();
            FlowersV2.crc2.restore();
        }
        update() {
            if (this.posX > FlowersV2.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > FlowersV2.crc2.canvas.height || this.posY < FlowersV2.crc2.canvas.height * 0.40) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
        }
    }
    FlowersV2.Bee = Bee;
})(FlowersV2 || (FlowersV2 = {}));
//# sourceMappingURL=bees.js.map