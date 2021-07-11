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
    })(Task = Endabgabe.Task || (Endabgabe.Task = {}));
    let imageData;
    Endabgabe.animationKey = false;
    Endabgabe.players = [];
    function handleLoad() {
        Endabgabe.form = document.querySelector("#formLeft");
        Endabgabe.canvas = document.querySelector("canvas");
        Endabgabe.form.addEventListener("change", Endabgabe.handleChange);
        Endabgabe.canvas.addEventListener("click", shootBall);
        Endabgabe.canvas.addEventListener("click", Endabgabe.updateForm);
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        Endabgabe.canvas.width = 1300;
        Endabgabe.canvas.height = 700;
        Endabgabe.drawField();
        imageData = Endabgabe.crc2.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        Endabgabe.ball = new Endabgabe.Ball({ x: Endabgabe.canvas.width * 0.5, y: Endabgabe.canvas.height * 0.5 });
        // player = new Player(500, 500, 0.5);
        // player2 = new Player(550, 450, 1);
        createPlayer();
        // test();
        // animate();
    }
    function createPlayer() {
        for (let index = 0; index < 14; index++) {
            if (index < 11) {
                Endabgabe.players.push(new Endabgabe.Player(Endabgabe.positionsTeam1[index], "red", 0.3, 0.5, 50, 50));
            }
            else {
                Endabgabe.players.push(new Endabgabe.Player(Endabgabe.positionsTeam1[index], "red", 0.3, 0.5, 50, 50));
            }
        }
        for (let index = 0; index < 14; index++) {
            if (index < 11) {
                Endabgabe.players.push(new Endabgabe.Player(Endabgabe.positionsTeam2[index], "blue", 0.3, 0.5, 50, 50));
            }
            else {
                Endabgabe.players.push(new Endabgabe.Player(Endabgabe.positionsTeam2[index], "blue", 0.3, 0.5, 50, 50));
            }
        }
        // for (let index: number = 0; index < 11; index++) {
        // }
    }
    function shootBall(_event) {
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        Endabgabe.key = true;
        Endabgabe.ball.setnewPosition({ x: mouseX, y: mouseY });
        Endabgabe.animationKey = false;
        // animate();
        console.log(mouseX, mouseY);
    }
    function animate() {
        if (Endabgabe.animationKey == false) {
            requestAnimationFrame(animate);
            Endabgabe.crc2.clearRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
            Endabgabe.crc2.putImageData(imageData, 0, 0);
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