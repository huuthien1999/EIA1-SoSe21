namespace Endabgabe {

    export class Human {
        protected velocity: number;
        protected position: Vector;
        protected jerseyColor: string;
        protected origin: Vector;
        

        constructor(_position: Vector, _jerseyColor: string) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }   
        // private origin: Vector;


        
        public get playerOrigin() : Vector {
            return this.origin
        }
        

        public setorigin(_position2: Vector): void{
            console.log("hahahahahahahahaahahahahahahahhahahahaahhaahahahahahahhaah")
            
            this.origin = _position2;
            console.log(this.origin);
        }

        public get playerPosition(): Vector {
            return this.position;
        }

        public draw(): void {
            //polymorphie
        }

        public update(): void {
            //polymorphie
        }


    }
}