"use strict";
var Test;
(function (Test) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let hund1 = new Test.Moveable("killua", "zoldyck");
        hund1.ichSeheEinSchaf();
        let hund2 = new Test.Pudel("Gon", "Freeces");
        hund2.ichSeheEinSchaf();
        let hund3 = new Test.Bulldogge("Ging", "Freeces");
        hund3.ichSeheEinSchaf();
    }
})(Test || (Test = {}));
//# sourceMappingURL=main.js.map