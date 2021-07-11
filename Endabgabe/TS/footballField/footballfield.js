"use strict";
var Endabgabe;
(function (Endabgabe) {
    function drawField() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.fillStyle = "#619651";
        Endabgabe.crc2.fillRect(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        Endabgabe.crc2.fill();
        Endabgabe.crc2.closePath();
        //Anstoßkreis
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(650, 350, 80, 0, 2 * Math.PI, true);
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.closePath();
        //Seitenlinie
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(100, 50, 1100, 600);
        Endabgabe.crc2.stroke();
        //Torraum links
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(100, 250, 100, 200);
        Endabgabe.crc2.stroke();
        //Tor links
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(50, 300, 50, 100);
        Endabgabe.crc2.stroke();
        //Strafraum links
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(100, 200, 150, 300);
        Endabgabe.crc2.stroke();
        //Strafraumhalbkreis links
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.arc(250, 350, 60, 1.5 * Math.PI, 0.5 * Math.PI, false);
        Endabgabe.crc2.stroke();
        //Torraum rechts
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(1100, 250, 100, 200);
        Endabgabe.crc2.stroke();
        //Strafraum rechts
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(1050, 200, 150, 300);
        Endabgabe.crc2.stroke();
        //Tor rechts
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(1200, 300, 50, 100);
        Endabgabe.crc2.stroke();
        //Strafraumhalbkreis rechts
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.arc(1050, 350, 60, 1.5 * Math.PI, 0.5 * Math.PI, true);
        Endabgabe.crc2.stroke();
        //Mittellinie
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.moveTo(650, 50);
        Endabgabe.crc2.lineTo(650, 650);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.stroke();
    }
    Endabgabe.drawField = drawField;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=footballfield.js.map