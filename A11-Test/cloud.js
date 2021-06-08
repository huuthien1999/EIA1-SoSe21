"use strict";
var Test;
(function (Test) {
    class Pudel extends Test.Moveable {
        constructor(_name, _vorname) {
            super(_name, _vorname);
        }
        ichSeheEinSchaf() {
            console.log("wau wau ich belle wie ein kind " + this.name + this.vorname);
        }
    }
    Test.Pudel = Pudel;
})(Test || (Test = {}));
//# sourceMappingURL=cloud.js.map