"use strict";
var Test;
(function (Test) {
    class Bulldogge extends Test.Moveable {
        constructor(_name, _vorname) {
            super(_name, _vorname);
        }
        ichSeheEinSchaf() {
            console.log("wau wau ich baller die WEG AMK " + this.name + this.vorname);
        }
    }
    Test.Bulldogge = Bulldogge;
})(Test || (Test = {}));
//# sourceMappingURL=flower.js.map