"use strict";
var Farm;
(function (Farm) {
    Farm.counter = 0;
    Farm.amountStock = [{
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
    console.log;
    function farmDay() {
        let cow = new Farm.Cow("Berta", "Cow", "Mooo");
        let chicken = new Farm.Chicken("Frieda", "Chicken", "Bowk");
        let pig = new Farm.Pig("Willhelm", "Pig", "Oink");
        let horse = new Farm.Animal("Sam", "Horse", "Wieher");
        let sheep = new Farm.Animal("Shaun", "Sheep", "Määh");
        let dayCounter = document.querySelector("#dayCounter");
        cow.eat(50, 0);
        cow.sing(50);
        cow.produceMilk();
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
        Farm.counter++;
        dayCounter.innerHTML = "Day: " + Farm.counter;
    }
    function stockUp() {
        let defaultStock = [500, 20, 400, 400, 200];
        for (let index = 0; index < defaultStock.length; index++) {
            Farm.amountStock[index].amount = defaultStock[index];
            Farm.pDOM = document.querySelector("#animal" + index);
            Farm.pDOM.innerHTML = "You have " + Farm.amountStock[index].amount + " kg " + Farm.amountStock[index].name + " left";
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=main.js.map