namespace Farm {

    export let counter: number = 0;
    export let pDOM: HTMLElement;

    export interface Stocks {
        name: string;
        amount: number;
    }

    export let amountStock: Stocks[] = [{
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


console.log

    function farmDay(): void {
        

        let cow: Cow = new Cow("Berta", "Cow", "Mooo");
        let chicken: Chicken = new Chicken("Frieda", "Chicken", "Bowk");
        let pig: Pig = new Pig ("Willhelm", "Pig", "Oink");
        let horse: Animal = new Animal("Sam", "Horse", "Wieher");
        let sheep: Animal = new Animal("Shaun", "Sheep", "Määh");

        let dayCounter: HTMLElement = <HTMLElement>document.querySelector("#dayCounter");

        cow.eat(50, 0);
        cow.sing(50);
        cow.doSpecialAction();

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

