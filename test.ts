enum Jobs {
    flyToFlower,
    drinkNectar,
    flyBack,
    storeNectar,
    flyAround
}


let job: Jobs = Jobs.flyToFlower;


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


let xFlowerDiff: number = this.xFlowerTarget - this.posX;
let yFlowerDiff: number = this.yFlowerTarget - this.posY;

if (xFlowerDiff < 1 && yFlowerDiff < 1)
    this.setTask(Task.drinkNectar);
else {
    this.posX += xFlowerDiff * 0.005;
    this.posY += yFlowerDiff * 0.005;
}



class Katzen {
 private alter: number;

 constructor(_age: number){
     this.alter = 16;
 }

 
 get alterKatze(): number{
     return this.alter;
 }
 

 setAlter(_age: number): void{
     this.alter = _age;
 }


}



let katze1: Katzen = new Katzen();

katze1.setAlter(76);


if (15 == 100){
    console.log("junge du bist alt");
}

