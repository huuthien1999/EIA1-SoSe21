"use strict";
var Test;
(function (Test) {
    class Moveable {
        constructor(_name, _vorname) {
            this.name = "test";
            this.vorname = "blub";
            this.name = _name;
            this.vorname = _vorname;
        }
        ichSeheEinSchaf() {
            console.log("wau wau " + this.name + this.vorname);
        }
    }
    Test.Moveable = Moveable;
})(Test || (Test = {}));
//# sourceMappingURL=moveable.js.map