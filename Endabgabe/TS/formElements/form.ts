namespace Endabgabe {
    
    

    export let valuesGlobal: string[] = [];
    let playerIndex: number;
    export function handleChange(): void {

        console.log("jo");
        let formData: FormData = new FormData(document.forms[0]);
        valuesGlobal = [];
        // let entries: FormData = 

        formData.set("maxSpeed", "0.1");
        formData.set("team1Color", "#ffffff")
        // for (let entry of formData) {
        //     console.log(entry[1]);
        //     valuesGlobal.push(String(entry[1]));
        // }
    }

    export function updateForm(_event: MouseEvent): void {
        let mouse: Vector = {x: _event.clientX, y: _event.clientY};
     
        for (let index: number = 0; index < players.length; index++) {
            console.log(distance(mouse, players[index].playerPosition));
            if (distance(mouse, players[index].playerPosition) < 10) {
                console.log
                let chosenPlayer: Player = <Player> players[index];
                
                playerIndex = index;
                console.log(chosenPlayer.playerProperties);
                // console.log("hit", playerIndex);
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

    function distance(_mousePos: Vector, _playerPosition: Vector): number {
        let rect: DOMRect = canvas.getBoundingClientRect();
        let distanceX: number = (_mousePos.x - rect.left) - _playerPosition.x;
        let distanceY: number = (_mousePos.y - rect.top) - _playerPosition.y;
        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    }

}