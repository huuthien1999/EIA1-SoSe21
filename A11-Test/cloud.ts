namespace Test {

    export class Pudel extends Moveable {

        constructor(_name: string, _vorname: string) {
            super(_name, _vorname);
        }

        ichSeheEinSchaf(): void {
            console.log("wau wau ich belle wie ein kind " + this.name + this.vorname); 
        }

    }



}