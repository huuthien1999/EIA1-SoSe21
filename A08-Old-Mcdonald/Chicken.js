"use strict";
var Farm;
(function (Farm) {
    let counter = 0;
    let pDOM;
    let amountStock = [{
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
    function handleLoad() {
        document.querySelector("#nextDay")?.addEventListener("click", farmDay);
        document.querySelector("#stockUp")?.addEventListener("click", stockUp);
        farmDay();
    }
    class Animal {
        constructor(_name, _breed, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        sing(_foodStock) {
            let animalNameDOM = document.querySelector("#animalName");
            let songDOM = document.querySelector("#songText");
            let munchingDOMElement = document.querySelector("#munchingAnimal");
            animalNameDOM.innerHTML = this.name;
            songDOM.innerHTML = "Old MacDonald had a Farm " + (this.sound + " ").repeat(5) + "<br>" + "And on his Farms he had some " + this.breed + "s," + (this.sound + " ").repeat(5) + "<br>";
            munchingDOMElement.innerHTML = this.name + " eats " + _foodStock + " kg. <br>";
        }
        eat(_foodStock, _foodPos) {
            amountStock[_foodPos].amount -= _foodStock;
            pDOM = document.querySelector("#animal" + _foodPos);
            pDOM.innerHTML = "You have " + amountStock[_foodPos].amount + " kg " + amountStock[_foodPos].name + " left";
        }
    }
    function farmDay() {
        let cow = new Animal("Berta", "Cow", "Mooo");
        let chicken = new Animal("Frieda", "Chicken", "Bowk");
        let pig = new Animal("Willhelm", "Pig", "Oink");
        let horse = new Animal("Sam", "Horse", "Wieher");
        let sheep = new Animal("Shaun", "Sheep", "Määh");
        let dayCounter = document.querySelector("#dayCounter");
        cow.eat(50, 0);
        cow.sing(50);
        setTimeout(function () {
            chicken.eat(2, 1);
            chicken.sing(2);
        }, 5000);
        setTimeout(function () {
            pig.eat(40, 2);
            pig.sing(40);
        }, 10000);
        setTimeout(function () {
            horse.eat(40, 3);
            horse.sing(40);
        }, 15000);
        setTimeout(function () {
            sheep.eat(20, 4);
            sheep.sing(20);
        }, 20000);
        counter++;
        dayCounter.innerHTML = "Day: " + counter;
    }
    function stockUp() {
        let defaultStock = [500, 20, 400, 400, 200];
        for (let index = 0; index < defaultStock.length; index++) {
            amountStock[index].amount = defaultStock[index];
            pDOM = document.querySelector("#animal" + index);
            pDOM.innerHTML = "You have " + amountStock[index].amount + " kg " + amountStock[index].name + " left";
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=Chicken.js.map