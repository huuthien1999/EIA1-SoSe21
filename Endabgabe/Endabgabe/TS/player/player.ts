namespace Endabgabe {

    export class Player extends Human {
        private task: Task = Task.lookForBall;
        private origin: Vector;
        private precision: number;
        private radius: number = 80;
        private jerseyNumber: number;
        private distancePlayerBall: number;
        private onField: boolean;
        private team: string;
        private newPosition: Vector;

        constructor(_position: Vector, _jerseyColor: string, _onField: boolean, _jerseyNumber: number, _team: string) {
            super(_position, _jerseyColor);
            this.onField = _onField;
            this.velocity = 0.5;
            this.jerseyNumber = _jerseyNumber;
            this.origin = this.position.copy();
            this.team = _team;
        }
        public get playerOrigin(): Vector {
            return this.origin;
        }

        public get jerseyNumberPlayer(): number {
            return this.jerseyNumber;
        }

        public get playerSpeed(): number {
            return this.velocity;
        }

        public get distance(): number {
            return this.distancePlayerBall;
        }

        public get playerPrecision(): number {
            return this.precision;
        }

        public get playerOnField(): boolean {
            return this.onField;
        }

        public get playerTeam(): string {
            return this.team;
        }

        public setOnField(_onField: boolean): void {
            this.onField = _onField;
        }

        public setOrigin(_position: Vector): void {
            this.origin = _position;
        }

        public setProperties(_minSpeed: number, _maxSpeed: number, _minPrecision: number, _maxPrecision: number): void {
            this.precision = _minPrecision + Math.random() * (_maxPrecision - _minPrecision);
            this.velocity = _minSpeed + Math.random() * (_maxSpeed - _minSpeed);
        }

        public setDistance(): void {
            let ballPos: Vector = ball.ballPos;
            this.distancePlayerBall = Vector.getdistance(ballPos, this.position);
        }

        public draw(): void {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.jerseyColor;
            crc2.fill();
            crc2.textAlign = "center";
            crc2.fillStyle = "black";
            crc2.fillText(String(this.jerseyNumber), this.position.x, this.position.y);
            crc2.closePath();
           
        }

        public changePlayer(_position: Vector): void {
            this.newPosition = _position;
            this.task = Task.changePlayer;
        }

        public update(): void {
            if (this.onField == true) {
                this.setDistance();
                switch (this.task) {
                    case Task.lookForBall:
                        if (this.distancePlayerBall < this.radius) {
                            this.task = Task.walkToBall;
                        }
                        break;
                    case Task.walkToBall:
                        if (this.distancePlayerBall > this.radius) {
                            this.task = Task.walkToOrigin;
                        }
                        else {
                            if (this.distancePlayerBall < 10) {
                                this.task = Task.shootBall;
                            }
                            this.movePlayer(ball.ballPos);
                        }
                        break;
                    case Task.shootBall:
                        if (this.distancePlayerBall > 20 || (ball.getKey) == false) {
                            ball.setKey(true);
                            this.task = Task.walkToOrigin;
                        }
                        break;
                    case Task.walkToOrigin:
                        this.movePlayer(this.origin);
                        if (Vector.getdistance(this.origin, this.position) < 1) {
                            this.task = Task.lookForBall;
                        }
                        break;

                    case Task.changePlayer:
                        this.movePlayer(this.newPosition);
                        if (Vector.getdistance(this.newPosition, this.position) < 1) {
                            if (this.position.y > 470 || this.position.y < 30) {
                                this.setOnField(false);
                                this.task = Task.lookForBall;
                            }
                            else {
                                this.setOnField(true);
                                this.task = Task.lookForBall;
                            }
                        }
                        break;
                }
            }
        }

        private movePlayer(_positon: Vector): void {
            let playerDistance: number = Vector.getdistance(_positon, this.position);
            let playerDiffernce: Vector = Vector.getDifference(_positon, this.position);
            let ratio: number  = this.velocity / playerDistance;
            playerDiffernce.scale(ratio);  
            this.position.add(playerDiffernce);
            this.draw();
        }
    }
}