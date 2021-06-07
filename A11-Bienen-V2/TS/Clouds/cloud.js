"use strict";
var FlowersV2;
(function (FlowersV2) {
    class Cloud extends FlowersV2.Movable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            FlowersV2.crc2.save();
            FlowersV2.crc2.translate(this.posX, this.posY);
            FlowersV2.crc2.beginPath();
            FlowersV2.crc2.moveTo(-115, -20);
            FlowersV2.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            FlowersV2.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            FlowersV2.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            FlowersV2.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            FlowersV2.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            FlowersV2.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            FlowersV2.crc2.lineWidth = 2;
            FlowersV2.crc2.fillStyle = "white";
            FlowersV2.crc2.fill();
            FlowersV2.crc2.strokeStyle = "white";
            FlowersV2.crc2.closePath();
            FlowersV2.crc2.stroke();
            FlowersV2.crc2.restore();
        }
        update() {
            if (this.posX > FlowersV2.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > FlowersV2.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    FlowersV2.Cloud = Cloud;
})(FlowersV2 || (FlowersV2 = {}));
//# sourceMappingURL=cloud.js.map