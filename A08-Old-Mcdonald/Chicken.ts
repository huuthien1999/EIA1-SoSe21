namespace Farm {
    let counter: number = 0;
    let pDOM: HTMLElement;

    interface Stocks {
        name: string;
        amount: number;
    }

    let amountStock: Stocks[] = [{
        name: "Hay",
        amount: 500
    },
    {
        name: "Seed",
        amount: 20
    },
    {
        name: "Corn",
        amount: 400
    },
    {
        name: "Oat",
        amount: 400
    },
    {
        name: "Grass",
        amount: 200
    }
    ];

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.querySelector("#nextDay")?.addEventListener("click", farmDay);
        document.querySelector("#stockUp")?.addEventListener("click", stockUp);
        farmDay();
    }

    class Animal {
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


    function farmDay(): void {
        

        let cow: Animal = new Animal("Berta", "Cow", "Mooo");
        let chicken: Animal = new Animal("Frieda", "Chicken", "Bowk");
        let pig: Animal = new Animal("Willhelm", "Pig", "Oink");
        let horse: Animal = new Animal("Sam", "Horse", "Wieher");
        let sheep: Animal = new Animal("Shaun", "Sheep", "Määh");
        let dayCounter: HTMLElement = <HTMLElement>document.querySelector("#dayCounter");

        cow.eat(50, 0);
        cow.sing(50);

        setTimeout(function (): void {
            chicken.eat(2, 1);
            chicken.sing(2);
        }, 5000);

        setTimeout(function (): void {
            pig.eat(40, 2);
            pig.sing(40);
        }, 10000);

        setTimeout(function (): void {
            horse.eat(40, 3);
            horse.sing(40);
        }, 15000);

        setTimeout(function (): void {
            sheep.eat(20, 4);
            sheep.sing(20);
        }, 20000);

        counter++;
        dayCounter.innerHTML = "Day: " + counter;

    }

    function stockUp(): void {
        let defaultStock: number[] = [500, 20, 400, 400, 200];
        for (let index: number = 0; index < defaultStock.length; index ++) {
            amountStock[index].amount = defaultStock[index];
            pDOM = <HTMLElement>document.querySelector("#animal" + index);
            pDOM.innerHTML = "You have " + amountStock[index].amount + " kg " + amountStock[index].name + " left";
        }
        
    }

}

