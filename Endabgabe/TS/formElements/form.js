"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.valuesGlobal = [];
    let playerIndex;
    function handleChange() {
        console.log("jo");
        let formData = new FormData(document.forms[0]);
        Endabgabe.valuesGlobal = [];
        // let entries: FormData = 
        formData.set("maxSpeed", "0.1");
        formData.set("team1Color", "#ffffff");
        // for (let entry of formData) {
        //     console.log(entry[1]);
        //     valuesGlobal.push(String(entry[1]));
        // }
    }
    Endabgabe.handleChange = handleChange;
    function updateForm(_event) {
        let mouse = { x: _event.clientX, y: _event.clientY };
        for (let index = 0; index < Endabgabe.players.length; index++) {
            console.log(distance(mouse, Endabgabe.players[index].playerPosition));
            if (distance(mouse, Endabgabe.players[index].playerPosition) < 10) {
                console.log;
                let chosenPlayer = Endabgabe.players[index];
                playerIndex = index;
                console.log(chosenPlayer.playerProperties);
                // console.log("hit", playerIndex);
                break;
            }
        }
        let formData = new FormData(document.forms[0]);
        // formData.append("")
    }
    Endabgabe.updateForm = updateForm;
    // export function test(): void {
    //     for (let index: number = 0; index < valuesGlobal.length; index ++){
    //         console.log(valuesGlobal[index]);
    //     }
    // }
    function distance(_mousePos, _playerPosition) {
        let rect = Endabgabe.canvas.getBoundingClientRect();
        let distanceX = (_mousePos.x - rect.left) - _playerPosition.x;
        let distanceY = (_mousePos.y - rect.top) - _playerPosition.y;
        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=form.js.map