"use strict";
var Nektar;
(function (Nektar) {
    class Bee extends Nektar.Movable {
        randomScale;
        randomNumber = (Math.floor(Math.random() * 2000) + 1000);
        counter = 0;
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomScale = _randomScale;
        }
        draw() {
            Nektar.crc2.save();
            Nektar.crc2.translate(this.posX, this.posY);
            Nektar.crc2.scale(this.randomScale, this.randomScale);
            Nektar.crc2.lineWidth = 2;
            Nektar.crc2.strokeStyle = "black";
            Nektar.crc2.fillStyle = "gold";
            Nektar.crc2.beginPath();
            Nektar.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Nektar.crc2.fill();
            Nektar.crc2.beginPath();
            Nektar.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Nektar.crc2.stroke();
            Nektar.crc2.beginPath();
            Nektar.crc2.fillStyle = "white";
            Nektar.crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            Nektar.crc2.fill();
            Nektar.crc2.stroke();
            Nektar.crc2.beginPath();
            Nektar.crc2.fillStyle = "white";
            Nektar.crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            Nektar.crc2.fill();
            Nektar.crc2.stroke();
            Nektar.crc2.beginPath();
            Nektar.crc2.arc(-2, -1, 2, 0, Math.PI * 2, false);
            Nektar.crc2.stroke();
            Nektar.crc2.beginPath();
            Nektar.crc2.arc(2, -1, 2, 0, Math.PI * 2, false);
            Nektar.crc2.stroke();
            Nektar.crc2.restore();
        }
        update() {
            if (this.posX > Nektar.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Nektar.crc2.canvas.height || this.posY < Nektar.crc2.canvas.height * 0.40) {
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
    Nektar.Bee = Bee;
})(Nektar || (Nektar = {}));
//# sourceMappingURL=bees.js.map