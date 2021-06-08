namespace Test {

    export class Bulldogge extends Moveable {

        constructor(_name: string, _vorname: string) {
            super(_name, _vorname);
        }

        ichSeheEinSchaf(): void {
            console.log("wau wau ich baller die WEG AMK " + this.name + this.vorname); 
        }

    }



}