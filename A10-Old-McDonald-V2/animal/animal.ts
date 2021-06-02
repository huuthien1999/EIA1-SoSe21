namespace Farm {

    export class Animal {
        public name: string;
        public breed: string;
        public sound: string;
        


        public constructor(_name: string, _breed: string, _sound: string) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }

        public sing(_foodStock: number): void {
            let animalNameDOM: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            let songDOM: HTMLElement = <HTMLElement>document.querySelector("#songText");
            let munchingDOMElement: HTMLElement = <HTMLElement>document.querySelector("#munchingAnimal");

            animalNameDOM.innerHTML = this.name;
            songDOM.innerHTML = "Old MacDonald had a Farm " + (this.sound + " ").repeat(5) + "<br>" + "And on his Farms he had some " + this.breed + "s," + (this.sound + " ").repeat(5) + "<br>";
            munchingDOMElement.innerHTML = this.name + " eats " + _foodStock + " kg. <br>";
        }

        public eat(_foodStock: number, _foodPos: number): void {
            amountStock[_foodPos].amount -= _foodStock;
            pDOM = <HTMLElement>document.querySelector("#animal" + _foodPos);
            pDOM.innerHTML = "You have " + amountStock[_foodPos].amount + " kg " + amountStock[_foodPos].name + " left";
        }

    }




    export class Cow extends Animal {
        produceMilk: string;

        milkinTheCow(): void {
            console.log("I " + this.ability);
        }

    }

    export class Chicken extends Animal {
        ability: string = " produce milk";

        layFuckingEggs(): void {
            console.log("I " + this.ability);
        }

    }

    export class Pig extends Animal {
        ability: string = " produce milk";

        HITONTHEFLOOR(): void {
            console.log("I " + this.ability);
        }

    }

    export class Horse extends Animal {
        ability: string = " produce milk";

        KICKSomeOneinTHENUTS(): void {
            console.log("jo ich geh mal reiten");
        }

    }

    export class Sheep extends Animal {
        ability: string = " produce milk";

        möhhhh(): void {
            console.log("JUNGE WAS GEHT HIER EIG: ");
        }

    }
}