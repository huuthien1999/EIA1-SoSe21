"use strict";
var Farm;
(function (Farm) {
    class Animal {
        name;
        breed;
        sound;
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
            Farm.amountStock[_foodPos].amount -= _foodStock;
            Farm.pDOM = document.querySelector("#animal" + _foodPos);
            Farm.pDOM.innerHTML = "You have " + Farm.amountStock[_foodPos].amount + " kg " + Farm.amountStock[_foodPos].name + " left";
        }
    }
    Farm.Animal = Animal;
    class Cow extends Animal {
        ability = "big";
        produceMilk() {
            console.log("I produce milk");
        }
    }
    Farm.Cow = Cow;
    class Chicken extends Animal {
        ability = " produce milk";
        layEggs() {
            console.log("I " + this.ability);
        }
    }
    Farm.Chicken = Chicken;
    class Pig extends Animal {
        ability = " produce milk";
        eatDirt() {
            console.log("I " + this.ability);
        }
    }
    Farm.Pig = Pig;
    class Horse extends Animal {
        ability = " produce milk";
        jumpHigh() {
            console.log("jo ich geh mal reiten");
        }
    }
    Farm.Horse = Horse;
    class Sheep extends Animal {
        ability = "";
        produceWool() {
            console.log(" I'm producing wool ");
        }
    }
    Farm.Sheep = Sheep;
})(Farm || (Farm = {}));
//# sourceMappingURL=animal.js.map