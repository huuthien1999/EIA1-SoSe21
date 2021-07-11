namespace Endabgabe {
    
    

    export let valuesGlobal: string[] = [];
    let playerIndex: number;
    export function handleChange(): void {

        console.log("jo");
        let formData: FormData = new FormData(document.forms[0]);
        valuesGlobal = [];

        formData.append("maxSpeed", "10");
        // for (let entry of formData) {
        //     console.log(entry[1]);
        //     valuesGlobal.push(String(entry[1]));
        // }
    }

    export function updateForm(_event: MouseEvent): void {
        let mouse: Vector = {x: _event.clientX, y: _event.clientY};
       
        for (let index: number = 0; index < players.length; index++) {
            console.log(players[index].playerPosition.x - mouse.x);
            if ((players[index].playerPosition.x - mouse.x) < 5 && (players[index].playerPosition.y - mouse.y) < 5) {

                playerIndex = index;
                console.log("hit", playerIndex);
                break;
            }
        }
        
        let formData: FormData = new FormData(document.forms[0]);

        // formData.append("")
    
    
    }
    // export function test(): void {
    //     for (let index: number = 0; index < valuesGlobal.length; index ++){
    //         console.log(valuesGlobal[index]);
    //     }
    // }


}