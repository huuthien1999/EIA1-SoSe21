namespace Endabgabe {

    export class Player extends Human {
        private task: Task;
        private origin: Vector;
        private minSpeed: number;
        private maxSpeed: number;
        private minPrecision: number;
        private maxPrecision: number;
        private radius: number = 100;
        private jerseyNumber: number;

        constructor(_position: Vector, _jerseyColor: string, _minSpeed: number, _maxSpeed: number, _minPrecision: number, _maxPrecision: number) {
            super(_position, _jerseyColor);
            this.setProperties(_minSpeed, _maxSpeed, _minPrecision, _maxPrecision);
            this.origin = _position;
            this.velocity =  this.minSpeed + Math.random() * (this.maxSpeed -  this.minSpeed);
        }

        setProperties(_minSpeed: number, _maxSpeed: number, _minPrecision: number, _maxPrecision: number): void {
            this.minSpeed = _minSpeed;
            this.maxSpeed = _maxSpeed;
            this.minPrecision = _minPrecision;
            this.maxPrecision = _maxPrecision;
        }
        
        public draw(): void {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = this.jerseyColor;
            crc2.fill();
            crc2.closePath();
        }
        
        // public drawRadius(): void {
        //     // crc2.beginPath();
        //     // crc2.arc(this.posX, this.posY, 100, 0, 2 * Math.PI);
        //     // crc2.stroke();
        //     // crc2.closePath();
        // }

        public update(): void {
            console.log(this.origin);
            let distance: number = this.getDistance();
            console.log(distance);
            if (distance < this.radius) {
                this.task = Task.walkToBall;
            }
            else {
                if (this.position == this.origin) {
                    // console.log(this.position, this.origin);
                    this.task = Task.lookForBall;
                    console.log("icj bin jier");
                }
                else {
                    this.task = Task.walkToOrigin;
                    console.log("ich lauf nach hause");
                }
            }
            switch (this.task) {

                case Task.lookForBall:
                    console.log("lookforVBall");
                    break;

                case Task.walkToBall:
                    if (distance < 10) {
                        console.log("ichbinnah");
                        this.task = Task.shootBall;
                    }
                    else {
                        console.log("moveToBall");
                        this.movePlayer(ball.ballPos);
                    } 
                    break;


                case Task.shootBall:
                    animationKey = true;
                    this.task = Task.walkToOrigin;
                    break;


                case Task.walkToOrigin:
                    this.movePlayer(this.origin);
            }
        }

        private getDistance(): number {
            let ballPos: Vector = ball.ballPos;
            let distanceX: number = ballPos.x - this.position.x;
            let distanceY: number = ballPos.y - this.position.y;
            return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        }

        private movePlayer(_positon: Vector): void {
            let playerDistance: Vector = {x: _positon.x - this.position.x, y: _positon.y - this.position.y};
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
                animationKey = true;
            }

        }
    }


 
}