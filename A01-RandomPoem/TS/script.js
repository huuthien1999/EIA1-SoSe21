"use strict";
var A01;
(function (A01) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledor"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (let index = 6; index > 0; index--) {
        let x = getVerse(subjekte, praedikate, objekte);
        console.log(x);
    }
    function getVerse(_subjekte, _praedikate, _objekte) {
        let text = "";
        let randomNumber1 = Math.floor(Math.random() * Math.floor(_subjekte.length));
        let randomNumber2 = Math.floor(Math.random() * Math.floor(_subjekte.length));
        let randomNumber3 = Math.floor(Math.random() * Math.floor(_subjekte.length));
        text = _subjekte[randomNumber1] + " " + _praedikate[randomNumber2] + " " + _objekte[randomNumber3];
        _subjekte.splice(randomNumber1, 1);
        _praedikate.splice(randomNumber2, 1);
        _objekte.splice(randomNumber3, 1);
        return text;
    }
})(A01 || (A01 = {}));
//# sourceMappingURL=script.js.map