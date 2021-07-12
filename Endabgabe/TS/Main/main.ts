namespace Endabgabe {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    // export let golden: number = 0.62;
    
    export enum Task {
        lookForBall,
        walkToBall,
        shootBall,
        walkToOrigin
    }
 
    let imageData: ImageData;
    export let ball: Ball;
    export let key: boolean;
    export let animationKey: boolean = false;
    export let players: Human[] = [];

    //HTML ELEMENTE & FORM ELEMENTE//
    //Form Left
    export let form: HTMLDivElement;
    export let playerNumberDOMElement: HTMLParagraphElement;
    export let teamDOMElement: HTMLParagraphElement;
    //Form Right
    export let teamADOMElement: HTMLButtonElement;
    export let teamBDOMElement: HTMLButtonElement;

    function handleLoad(): void {

        form = <HTMLDivElement> document.querySelector("#formLeft");
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        form.addEventListener("change", handleChange);
        canvas.addEventListener("click", shootBall);
        canvas.addEventListener("click", updateForm);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = 1300;
        canvas.height = 700;
        drawField();
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        ball = new Ball({x: canvas.width * 0.5, y: canvas.height * 0.5});
        // player = new Player(500, 500, 0.5);
        // player2 = new Player(550, 450, 1);
        createPlayer();
        // test();
        animate();
    }

    

    function createPlayer(): void {
        for (let index: number = 0; index < 12; index++) {
            if (index < 11) {
                players.push(new Player(positionsTeam1[index], "red", 0.3, 0.5, 50, 50));
                players[index].setorigin(positionsTeam1[index]);
            }
            else {
                players.push(new Player(positionsTeam1[index], "red", 0.3, 0.5, 50, 50));
            }
        }
        for (let index: number = 0; index < 12; index++) {
            if (index < 11) {
                players.push(new Player(positionsTeam2[index], "blue", 0.2, 0.5, 50, 50));
            }
            else {
                players.push(new Player(positionsTeam2[index], "blue", 0.3, 0.5, 50, 50));
            }
        }      
    }

    function shootBall(_event: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        let mouseX: number = _event.clientX - rect.left;
        let mouseY: number = _event.clientY - rect.top  ;
        key = true;
        ball.setnewPosition({x: mouseX, y: mouseY});
        animationKey = false;
        // animate();
        console.log(mouseX, mouseY);
    }

    function animate(): void {
        if (animationKey == false) {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        
        for (let index: number = 0; index < players.length; index++) {
            players[index].update();
            players[index].draw();
        }
        ball.update();
        ball.draw();
    }
       
        
    }
}