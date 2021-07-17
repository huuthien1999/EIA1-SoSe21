"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Player extends Endabgabe.Human {
        task;
        origin;
        minSpeed;
        maxSpeed;
        minPrecision;
        maxPrecision;
        radius = 100;
        jerseyNumber;
        constructor(_position, _jerseyColor, _minSpeed, _maxSpeed, _minPrecision, _maxPrecision) {
            super(_position, _jerseyColor);
            this.setProperties(_minSpeed, _maxSpeed, _minPrecision, _maxPrecision);
            this.velocity = this.minSpeed + Math.random() * (this.maxSpeed - this.minSpeed);
            this.origin = { x: _position.x, y: _position.y };
        }
        setProperties(_minSpeed, _maxSpeed, _minPrecision, _maxPrecision) {
            this.minSpeed = _minSpeed;
            this.maxSpeed = _maxSpeed;
            this.minPrecision = _minPrecision;
            this.maxPrecision = _maxPrecision;
        }
        get playerProperties() {
            return this.minSpeed;
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fillStyle = this.jerseyColor;
            Endabgabe.crc2.fill();
            Endabgabe.crc2.closePath();
        }
        // public drawRadius(): void {
        //     // crc2.beginPath();
        //     // crc2.arc(this.posX, this.posY, 100, 0, 2 * Math.PI);
        //     // crc2.stroke();
        //     // crc2.closePath();
        // }
        update() {
            let distance = this.getDistance();
            if (distance < this.radius) {
                this.task = Endabgabe.Task.walkToBall;
            }
            else {
                if (this.position == this.origin) {
                    console.log(this.origin);
                    this.task = Endabgabe.Task.lookForBall;
                    console.log("icj bin jier");
                }
                else {
                    this.task = Endabgabe.Task.walkToOrigin;
                    // console.log(super.origin);
                    console.log("ich lauf nach hause");
                    this.movePlayer(this.origin);
                }
            }
            switch (this.task) {
                case Endabgabe.Task.lookForBall:
                    console.log("lookforVBall");
                    break;
                case Endabgabe.Task.walkToBall:
                    if (distance < 10) {
                        console.log("ichbinnah");
                        this.task = Endabgabe.Task.shootBall;
                    }
                    else {
                        console.log("moveToBall");
                        this.movePlayer(Endabgabe.ball.ballPos);
                    }
                    break;
                case Endabgabe.Task.shootBall:
                    Endabgabe.animationKey = true;
                    this.task = Endabgabe.Task.walkToOrigin;
                    break;
                case Endabgabe.Task.walkToOrigin:
                    this.movePlayer(this.origin);
            }
        }
        getDistance() {
            let ballPos = Endabgabe.ball.ballPos;
            let distanceX = ballPos.x - this.position.x;
            let distanceY = ballPos.y - this.position.y;
            return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        }
        movePlayer(_positon) {
            let playerDistance = { x: _positon.x - this.position.x, y: _positon.y - this.position.y };
            if (this.getDistance() > 5) {
                if (playerDistance.x == 0 && playerDistance.y > 0) {
                    this.position.y += this.velocity;
                }
                if (playerDistance.x == 0 && playerDistance.y < 0) {
                    this.position.y += -this.velocity;
                }
                if (playerDistance.x > 0 && playerDistance.y == 0) {
                    this.position.x += this.velocity;
                }
                if (playerDistance.x < 0 && playerDistance.y == 0) {
                    this.position.x += -this.velocity;
                }
                if (playerDistance.x > 0 && playerDistance.y > 0) {
                    this.position.x += this.velocity;
                    this.position.y += this.velocity;
                }
                if (playerDistance.x < 0 && playerDistance.y < 0) {
                    this.position.x += -this.velocity;
                    this.position.y += -this.velocity;
                }
                if (playerDistance.x > 0 && playerDistance.y < 0) {
                    this.position.x += this.velocity;
                    this.position.y += -this.velocity;
                }
                if (playerDistance.x < 0 && playerDistance.y > 0) {
                    this.position.x += -this.velocity;
                    this.position.y += this.velocity;
                }
                this.draw();
            }
            else {
                Endabgabe.animationKey = true;
            }
        }
    }
    Endabgabe.Player = Player;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=player.js.map