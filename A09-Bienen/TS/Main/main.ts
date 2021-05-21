namespace Bienen {
    window.addEventListener("load", handleLoad);
    
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    let bienen: Biene[] = [];
    let flowers: Flowers[] = [];
    let imageData: ImageData;

    function handleLoad(): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        createBees(10);
        createBackground();
        createFlowers();
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        // window.setInterval(animate, 20);
    }   


    function createBackground(): void {
        drawBackground();
        let sunPos: Vector = new Vector(crc2.canvas.width / 2, crc2.canvas.height * 0.15);
        drawSun(sunPos);
        let mountainPos: Vector = new Vector(0, crc2.canvas.height * 0.62);
        drawMountains(mountainPos, 200, 300, "grey");
        drawMountains(mountainPos, 150, 200, "lightgrey");
        drawTree(0, 15, 50, 20, 50);
    }


    function createFlowers(): void {
        let xPos: number = 0;
        do {
            flowers.push(new Flowers(Math.floor(Math.random() * 2) + 1, xPos));
            xPos += 10 + Math.random() * (50 - 10);
        }
        while (xPos < crc2.canvas.width);
       
    }




    function createBees (_nBee: number): void {
        for (let index: number = 0; index < _nBee; index++) {
            let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);

            let randomVelocityX: number = (Math.random() - 0.5) * 5;
            let randomVelocityY: number = (Math.random() - 0.5) * 5;

            bienen.push(new Biene(500, 500, randomVelocityX, randomVelocityY, randomScale));
        }
    }
    
    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        for (let index: number = 0; index < bienen.length; index ++) {
            bienen[index].update();
        }
    }
}