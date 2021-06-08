namespace Test {

export class Moveable {

    name: string = "test";
    vorname: string = "blub";

    constructor(_name: string, _vorname: string) {
        this.name = _name;
        this.vorname = _vorname;
    }

    ichSeheEinSchaf(): void {
        console.log("wau wau " + this.name + this.vorname); 
    }

}



}