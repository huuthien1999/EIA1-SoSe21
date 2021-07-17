"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Human {
        velocity;
        position;
        jerseyColor;
        constructor(_position, _jerseyColor) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }
        // private origin: Vector;
        get playerPosition() {
            return this.position;
        }
        draw() {
            //polymorphie
        }
        update() {
            //polymorphie
        }
    }
    Endabgabe.Human = Human;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=human.js.map