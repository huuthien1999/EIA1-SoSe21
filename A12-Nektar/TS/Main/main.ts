namespace Nektar {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    export enum Jobs {
        flyToFlower,
        drinkNectar,
        flyBack,
        storeNectar,
        flyAround
    }

    let movables: Movable[] = [];
    export let bees: Movable[] = [];
    export let flowers: Flower[] = [];
    let imageData: ImageData;
    // let indexBee: number;

    function handleLoad(): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.addEventListener("click", clickBee);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createFlowers();
        createCloud();
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }

    function createBackground(): void {
        drawBackground();
        drawSun({ x: crc2.canvas.width / 2, y: crc2.canvas.height * 0.15 });
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 200, 300, "grey");
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 150, 200, "lightgrey");
        drawTree(0, 15, 50, 20, 50);
        drawBeeHive();
    }

    function createFlowers(): void {
        let xPos: number = 0;

        do {
            let flowerType: number = Math.floor(Math.random() * 2) + 1;

            if (flowerType == 1) {
                flowers.push(new Tulip(xPos, 50 + (crc2.canvas.height * golden), crc2.canvas.height * 0.9));
            }
            else {
                flowers.push(new CornFlower(xPos, 50 + (crc2.canvas.height * golden), crc2.canvas.height * 0.9));
            }

            xPos += 10 + Math.random() * (50 - 10);
        }
        while (xPos < crc2.canvas.width);

        console.log(flowers);
    }

    function createBees(_nBee: number): void {
        for (let index: number = 0; index < _nBee; index++) {
            let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX: number = (Math.random() - 0.5) * 5;
            let randomVelocityY: number = (Math.random() - 0.5) * 5;
            bees.push(new Bee({ x: crc2.canvas.width / 2, y: crc2.canvas.height * golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }

    function clickBee(_event: MouseEvent): void {
        let mouseX: number = _event.clientX;
        let mouseY: number = _event.clientY;
        let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);
        let randomVelocityX: number = (Math.random() - 0.5) * 5;
        let randomVelocityY: number = (Math.random() - 0.5) * 5;
        bees.push(new Bee({ x: mouseX, y: mouseY }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
    }

    function createCloud(): void {
        movables.push(new Cloud({ x: crc2.canvas.width * .10, y: crc2.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        movables.push(new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }

    function animate(): void {
        requestAnimationFrame(animate);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let index: number = 0; index < flowers.length; index++) {
            
            flowers[index].updateNectar();
            
        }

        for (let index: number = 0; index < movables.length; index++) {
            movables[index].update();
            movables[index].draw();
        }

        for (let indexFlower: number = 0; indexFlower < flowers.length; indexFlower++) {
            if (flowers[indexFlower].assignFlower == false) {
                if (flowers[indexFlower].nectar > 7) {
                    // indexFlower = index;
                    for (let index: number = 0; index < bees.length; index++) {
                        if (bees[index].doingJobBee == false) {
                            // indexBee = index;
                            flowers[indexFlower].setAssign(true);
                            bees[index].setIndex(indexFlower);
                            bees[index].setJobTask(Jobs.flyToFlower);
                            break;
                        }
                    }
                }
            }
        }

        for (let index: number = 0; index < bees.length; index++) {
            bees[index].update();
            bees[index].draw();
        }
    } 
}