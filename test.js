"use strict";
var Jobs;
(function (Jobs) {
    Jobs[Jobs["flyToFlower"] = 0] = "flyToFlower";
    Jobs[Jobs["drinkNectar"] = 1] = "drinkNectar";
    Jobs[Jobs["flyBack"] = 2] = "flyBack";
    Jobs[Jobs["storeNectar"] = 3] = "storeNectar";
    Jobs[Jobs["flyAround"] = 4] = "flyAround";
})(Jobs || (Jobs = {}));
let job = Jobs.flyToFlower;
switch (job) {
    case Jobs.flyToFlower:
        console.log("Fliege zur Blume");
        job = Jobs.drinkNectar;
        break;
    case Jobs.drinkNectar:
        console.log("Trinke den Nektar");
        job = Jobs.drinkNectar;
        break;
    case Jobs.flyBack:
        console.log("Fliege zurück");
        break;
    case Jobs.storeNectar:
        console.log("Nektar speichern");
        break;
    case Jobs.flyAround:
        console.log("Einfach Herumfliegen");
}
let xFlowerDiff = this.xFlowerTarget - this.posX;
let yFlowerDiff = this.yFlowerTarget - this.posY;
if (xFlowerDiff < 1 && yFlowerDiff < 1)
    this.setTask(Task.drinkNectar);
else {
    this.posX += xFlowerDiff * 0.005;
    this.posY += yFlowerDiff * 0.005;
}
class Katzen {
    alter;
    constructor(_age) {
        this.alter = 16;
    }
    get alterKatze() {
        return this.alter;
    }
    setAlter(_age) {
        this.alter = _age;
    }
}
let katze1 = new Katzen();
katze1.setAlter(76);
if (15 == 100) {
    console.log("junge du bist alt");
}
//# sourceMappingURL=test.js.map