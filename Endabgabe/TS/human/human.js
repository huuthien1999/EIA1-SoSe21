"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Human {
        velocity;
        position;
        jerseyColor;
        origin;
        constructor(_position, _jerseyColor) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }
        // private origin: Vector;
        get playerOrigin() {
            return this.origin;
        }
        setorigin(_position2) {
            console.log("hahahahahahahahaahahahahahahahhahahahaahhaahahahahahahhaah");
            this.origin = _position2;
            console.log(this.origin);
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
    }
    Endabgabe.Human = Human;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=human.js.map