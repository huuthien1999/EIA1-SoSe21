"use strict";
var Memory;
(function (Memory) {
    let pairSelected;
    let pairsFound = 0;
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];
    let gameArray = [];
    let savedCards = [];
    let valuesGlobal = [];
    let form;
    let okButton;
    let cardArea;
    let body;
    let html;
    let second = 0;
    let minute = 0;
    let interval;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        html = document.querySelector("html");
        body = document.querySelector("body");
        cardArea = document.querySelector("#playingField");
        okButton = document.querySelector("button#okButton");
        form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
        okButton.addEventListener("click", cardGenerator);
    }
    function handleChange() {
        let formData = new FormData(document.forms[0]);
        valuesGlobal = [];
        for (let entry of formData) {
            console.log(entry[1]);
            valuesGlobal.push(String(entry[1]));
        }
    }
    function cardGenerator() {
        html.style.fontFamily = valuesGlobal[5];
        body.style.background = valuesGlobal[2];
        okButton.classList.add("hidden2");
        form.classList.add("hidden2");
        pairSelected = Number(valuesGlobal[0]);
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < pairSelected; j++) {
                gameArray.push(alphabet[j]);
            }
        }
        gameArray.sort(() => 0.5 - Math.random());
        cardArea.innerHTML = "";
        for (let index = 0; index < gameArray.length; index++) {
            let memoryCard = document.createElement("div");
            memoryCard.style.background = valuesGlobal[3];
            memoryCard.style.width = valuesGlobal[1] + "px";
            memoryCard.style.height = valuesGlobal[1] + "px";
            memoryCard.style.color = valuesGlobal[4];
            memoryCard.innerHTML = "<span>" + gameArray[index] + "</span>";
            cardArea.appendChild(memoryCard);
            memoryCard.addEventListener("click", turnCard);
            let span = document.querySelectorAll("span");
            span[index].classList.add("hidden");
        }
        interval = window.setInterval(timer, 1000);
        console.log(gameArray.length);
        console.log(gameArray);
    }
    function timer() {
        second++;
        if (second == 60) {
            second = 0;
            minute++;
        }
        console.log(second + minute);
    }
    function turnCard(_event) {
        let target = _event.target;
        savedCards.push(target);
        savedCards[0].style.background = "white";
        savedCards[0].querySelector("span")?.classList.remove("hidden");
        // if (savedCards[0] != savedCards[1]) {
        //     console.log("FUNZT");
        // }
        if (savedCards.length == 2) {
            savedCards[1].style.background = "white";
            savedCards[1].querySelector("span")?.classList.remove("hidden");
            setTimeout(compareCards, 2000);
        }
    }
    function compareCards() {
        let spanValue0 = savedCards[0].querySelector("span")?.innerHTML;
        let spanValue1 = savedCards[1].querySelector("span")?.innerHTML;
        if (spanValue0 == spanValue1) {
            savedCards[0].classList.add("hidden");
            savedCards[1].classList.add("hidden");
            savedCards = [];
            pairsFound++;
            win();
        }
        else {
            savedCards[0].style.background = valuesGlobal[3];
            savedCards[1].style.background = valuesGlobal[3];
            savedCards[0].querySelector("span")?.classList.add("hidden");
            savedCards[1].querySelector("span")?.classList.add("hidden");
            savedCards = [];
        }
    }
    function win() {
        if (pairSelected == pairsFound) {
            window.clearInterval(interval);
            alert("GLÜCKWUNSCH Du hast " + minute + ":" + second + " Minuten gebraucht.");
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=script.js.map