"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Ball {
        position;
        newPosition;
        constructor(_position) {
            this.position = _position;
            this.draw();
        }
        get ballPos() {
            return { x: this.position.x, y: this.position.y };
        }
        setnewPosition(_newPosition) {
            this.newPosition = _newPosition;
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.closePath();
        }
        update() {
            if (Endabgabe.key == true) {
                let diff = { x: this.newPosition.x - this.position.x, y: this.newPosition.y - this.position.y };
                if (Math.abs(diff.x) < 1 && Math.abs(diff.y) < 1) {
                    console.log("yelp2");
                    Endabgabe.key = false;
                }
                else {
                    this.position.x += diff.x * 0.005;
                    this.position.y += diff.y * 0.005;
                    console.log("yelp1");
                }
            }
            else {
                this.draw();
            }
        }
    }
    Endabgabe.Ball = Ball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=ball.js.map