"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.valuesGlobal = [];
    let playerIndex;
    function handleChange() {
        console.log("jo");
        let formData = new FormData(document.forms[0]);
        Endabgabe.valuesGlobal = [];
        formData.append("maxSpeed", "10");
        // for (let entry of formData) {
        //     console.log(entry[1]);
        //     valuesGlobal.push(String(entry[1]));
        // }
    }
    Endabgabe.handleChange = handleChange;
    function updateForm(_event) {
        let mouse = { x: _event.clientX, y: _event.clientY };
        for (let index = 0; index < Endabgabe.players.length; index++) {
            console.log(Endabgabe.players[index].playerPosition.x - mouse.x);
            if ((Endabgabe.players[index].playerPosition.x - mouse.x) < 5 && (Endabgabe.players[index].playerPosition.y - mouse.y) < 5) {
                playerIndex = index;
                console.log("hit", playerIndex);
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
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=form.js.map