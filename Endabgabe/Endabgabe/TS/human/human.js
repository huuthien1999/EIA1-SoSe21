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
        get playerPosition() {
            return this.position;
        }
        draw() {
            //polymorphie
        }
        update() {
            //polymorphie
        }
        setJersey(_color) {
            this.jerseyColor = _color;
        }
    }
    Endabgabe.Human = Human;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=human.js.map