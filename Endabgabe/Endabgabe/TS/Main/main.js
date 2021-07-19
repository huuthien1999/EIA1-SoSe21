"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    let Task;
    (function (Task) {
        Task[Task["lookForBall"] = 0] = "lookForBall";
        Task[Task["walkToBall"] = 1] = "walkToBall";
        Task[Task["shootBall"] = 2] = "shootBall";
        Task[Task["walkToOrigin"] = 3] = "walkToOrigin";
        Task[Task["changePlayer"] = 4] = "changePlayer";
    })(Task = Endabgabe.Task || (Endabgabe.Task = {}));
    Endabgabe.animationKey = true;
    Endabgabe.shootKey = false;
    Endabgabe.players = [];
    Endabgabe.scoreA = 0;
    Endabgabe.scoreB = 0;
    function handleLoad() {
        //HTML PARAGRPAHEN
        Endabgabe.speedPlayer = document.querySelector("#speedPlayer");
        Endabgabe.precPlayer = document.querySelector("#precPlayer");
        Endabgabe.numberPlayer = document.querySelector("#numberPlayer");
        Endabgabe.teamPlayer = document.querySelector("#teamPlayer");
        Endabgabe.posession = document.querySelector("#posession");
        Endabgabe.speedSub = document.querySelector("#speedSubstitute");
        Endabgabe.precSub = document.querySelector("#precSubstitute");
        Endabgabe.numberSub = document.querySelector("#numberSubstitute");
        Endabgabe.teamSub = document.querySelector("#teamSubstitute");
        //HTML ELEMENTE
        Endabgabe.form = document.querySelector("#formLeft");
        Endabgabe.subPlayerDOMElement = document.querySelector("#subPlayer");
        Endabgabe.scoreADOMElement = document.querySelector("#scoreA");
        Endabgabe.scoreBDOMElement = document.querySelector("#scoreB");
        Endabgabe.changeBtn = document.querySelector("#changeBtn");
        //EVENT LISTENER
        Endabgabe.subPlayerDOMElement.addEventListener("change", Endabgabe.subChange);
        Endabgabe.changeBtn.addEventListener("click", Endabgabe.exchangePlayer);
        document.addEventListener("keydown", Endabgabe.switchForm);
        Endabgabe.form.addEventListener("change", Endabgabe.handleChange);
        //CANVAS
        Endabgabe.canvas = document.querySelector("canvas");
        Endabgabe.canvas.addEventListener("click", shootBall);
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        Endabgabe.canvas.width = 900;
        Endabgabe.canvas.height = 500;
        //CALL ALL FUNCTIONS
        Endabgabe.drawField();
        Endabgabe.imageData = Endabgabe.crc2.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        Endabgabe.ball = new Endabgabe.Ball(new Endabgabe.Vector(Endabgabe.canvas.width * 0.5, Endabgabe.canvas.height * 0.5));
        createPlayer();
        createReferees();
        Endabgabe.handleChange();
        Endabgabe.formIntoHTML(0);
        animate();
    }
    function createPlayer() {
        for (let indexA = 0; indexA < 2; indexA++) {
            for (let indexB = 0; indexB < 11; indexB++) {
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    Endabgabe.players.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam1[indexB].x, Endabgabe.positionsTeam1[indexB].y), "red", true, randomNumber, "A"));
                }
                else {
                    Endabgabe.players.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam2[indexB].x, Endabgabe.positionsTeam2[indexB].y), "blue", true, randomNumber, "B"));
                }
            }
        }
        for (let indexA = 0; indexA < 2; indexA++) {
            for (let indexB = 11; indexB < 14; indexB++) {
                console.log(indexB);
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    Endabgabe.players.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam1[indexB].x, Endabgabe.positionsTeam1[indexB].y), "red", false, randomNumber, "A"));
                }
                else {
                    Endabgabe.players.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam2[indexB].x, Endabgabe.positionsTeam2[indexB].y), "blue", false, randomNumber, "B"));
                }
            }
        }
    }
    function createReferees() {
        Endabgabe.players.push(new Endabgabe.Referee(new Endabgabe.Vector(450, 150), "white"));
        Endabgabe.players.push(new Endabgabe.Linereferee(new Endabgabe.Vector(680, 15), "pink"));
        Endabgabe.players.push(new Endabgabe.Linereferee(new Endabgabe.Vector(230, 485), "pink"));
    }
    function shootBall(_event) {
        console.log(Endabgabe.shootKey);
        if (Endabgabe.shootKey == true) {
            let rect = Endabgabe.canvas.getBoundingClientRect();
            let mouse = new Endabgabe.Vector(_event.clientX - rect.left, _event.clientY - rect.top);
            Endabgabe.key = true;
            Endabgabe.ball.setnewPosition(mouse);
            Endabgabe.animationKey = true;
            Endabgabe.shootKey = false;
            animate();
        }
    }
    function animate() {
        if (Endabgabe.animationKey == true) {
            requestAnimationFrame(animate);
            Endabgabe.crc2.clearRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
            Endabgabe.crc2.putImageData(Endabgabe.imageData, 0, 0);
            for (let index = 0; index < Endabgabe.players.length; index++) {
                Endabgabe.players[index].update();
                Endabgabe.players[index].draw();
            }
            Endabgabe.ball.update();
            Endabgabe.ball.draw();
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map