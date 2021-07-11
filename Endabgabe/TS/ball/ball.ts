namespace Endabgabe {

    export class Ball {

       
        private position: Vector;
        private newPosition: Vector;
  

        constructor(_position: Vector) {
            this.position = _position;
            this.draw();
        }

        public get ballPos(): Vector {
            return {x: this.position.x, y: this.position.y};
        }
        
        public setnewPosition(_newPosition: Vector): void {
          this.newPosition = _newPosition;
        }

        public draw(): void {
            
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
        }
        

        public update(): void {
           if (key == true) {
            let diff: Vector = {x: this.newPosition.x - this.position.x, y: this.newPosition.y - this.position.y };
           

            if (Math.abs(diff.x) < 1 && Math.abs(diff.y) < 1) {
                console.log("yelp2");
                key = false;
            }
                
            else {
                this.position.x += diff.x * 0.005;
                this.position.y += diff.y * 0.005;
                console.log("yelp1");
            }
           }
           else {
               this.draw();
           }
         
        }
    }
}