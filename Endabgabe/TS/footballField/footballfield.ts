namespace Endabgabe {

    export function drawField(): void {
        crc2.beginPath();
        crc2.fillStyle = "#619651";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill();
        crc2.closePath();

        //Anstoßkreis
        crc2.beginPath();
        crc2.arc(650, 350, 80, 0, 2 * Math.PI, true);
        crc2.strokeStyle = "white";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        //Seitenlinie
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(100, 50, 1100, 600);
        crc2.stroke();

        //Torraum links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(100, 250, 100, 200);
        crc2.stroke();

        //Tor links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(50, 300, 50, 100);
        crc2.stroke();

        //Strafraum links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(100, 200, 150, 300);
        crc2.stroke();

        //Strafraumhalbkreis links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.arc(250, 350, 60, 1.5 * Math.PI, 0.5 * Math.PI, false);
        crc2.stroke();

        //Torraum rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(1100, 250, 100, 200);
        crc2.stroke();

        //Strafraum rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(1050, 200, 150, 300);
        crc2.stroke();

        //Tor rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(1200, 300, 50, 100);
        crc2.stroke();

        //Strafraumhalbkreis rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.arc(1050, 350, 60, 1.5 * Math.PI, 0.5 * Math.PI, true);
        crc2.stroke();

        //Mittellinie
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.moveTo(650, 50);
        crc2.lineTo(650, 650);
        crc2.closePath();
        crc2.stroke();
    }
}
