"use strict";
var Farm;
(function (Farm) {
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
            Farm.amountStock[_foodPos].amount -= _foodStock;
            Farm.pDOM = document.querySelector("#animal" + _foodPos);
            Farm.pDOM.innerHTML = "You have " + Farm.amountStock[_foodPos].amount + " kg " + Farm.amountStock[_foodPos].name + " left";
        }
    }
    Farm.Animal = Animal;
    class Cow extends Animal {
        milkinTheCow() {
            console.log("I " + this.ability);
        }
    }
    Farm.Cow = Cow;
    class Chicken extends Animal {
        constructor() {
            super(...arguments);
            this.ability = " produce milk";
        }
        layFuckingEggs() {
            console.log("I " + this.ability);
        }
    }
    Farm.Chicken = Chicken;
    class Pig extends Animal {
        constructor() {
            super(...arguments);
            this.ability = " produce milk";
        }
        HITONTHEFLOOR() {
            console.log("I " + this.ability);
        }
    }
    Farm.Pig = Pig;
    class Horse extends Animal {
        constructor() {
            super(...arguments);
            this.ability = " produce milk";
        }
        KICKSomeOneinTHENUTS() {
            console.log("jo ich geh mal reiten");
        }
    }
    Farm.Horse = Horse;
    class Sheep extends Animal {
        constructor() {
            super(...arguments);
            this.ability = " produce milk";
        }
        möhhhh() {
            console.log("JUNGE WAS GEHT HIER EIG: ");
        }
    }
    Farm.Sheep = Sheep;
})(Farm || (Farm = {}));
//# sourceMappingURL=animal.js.map