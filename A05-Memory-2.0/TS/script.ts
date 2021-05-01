namespace Memory {


    let pairSelected: number;
    let pairsFound: number = 0;
    let alphabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];
    let gameArray: string[] = [];
    let savedCards: HTMLElement[] = [];
    let valuesGlobal: string[] = [];
    let form: HTMLDivElement;
    let okButton: HTMLElement;
    let cardArea: HTMLElement;
    let body: HTMLElement;
    let html: HTMLElement;
    let second: number = 0;
    let minute: number = 0;
    let interval: number;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        html = <HTMLElement>document.querySelector("html");
        body = <HTMLElement>document.querySelector("body");
        cardArea = <HTMLElement>document.querySelector("#playingField");
        okButton = <HTMLElement>document.querySelector("button#okButton");
        form = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);
        okButton.addEventListener("click", cardGenerator);
    }

    function handleChange(): void {
        let formData: FormData = new FormData(document.forms[0]);
        valuesGlobal = [];

        for (let entry of formData) {
            console.log(entry[1]);
            valuesGlobal.push(String(entry[1]));
        }
    }

    function cardGenerator(): void {
        html.style.fontFamily = valuesGlobal[5];
        body.style.background = valuesGlobal[2];
        okButton.classList.add("hidden2");
        form.classList.add("hidden2");
        pairSelected = Number(valuesGlobal[0]);

        for (let i: number = 0; i < 2; i++) {
            for (let j: number = 0; j < pairSelected; j++) {
                gameArray.push(alphabet[j]);
            }
        }

        gameArray.sort(() => 0.5 - Math.random());
        cardArea.innerHTML = "";

        for (let index: number = 0; index < gameArray.length; index++) {
            let memoryCard: HTMLElement = <HTMLElement>document.createElement("div");
            memoryCard.style.background = valuesGlobal[3];
            memoryCard.style.width = valuesGlobal[1] + "px";
            memoryCard.style.height = valuesGlobal[1] + "px";
            memoryCard.style.color = valuesGlobal[4];
            memoryCard.innerHTML = "<span>" + gameArray[index] + "</span>";
            cardArea.appendChild(memoryCard);
            memoryCard.addEventListener("click", turnCard);

            let span: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            span[index].classList.add("hidden");
        }

        interval = window.setInterval(timer, 1000);
        console.log(gameArray.length);
        console.log(gameArray);
    }

    function timer(): void {
        second++;
        if (second == 60) {
            second = 0;
            minute++;
        }
        console.log(second + minute);
    }

    function turnCard(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
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

    function compareCards(): void {
        let spanValue0: string = <string>savedCards[0].querySelector("span")?.innerHTML;
        let spanValue1: string = <string>savedCards[1].querySelector("span")?.innerHTML;

        if (spanValue0 == spanValue1) {
            savedCards[0].classList.add("hidden");
            savedCards[1].classList.add("hidden");
            savedCards = [];
            pairsFound++;
            win();

        } else {
            savedCards[0].style.background = valuesGlobal[3];
            savedCards[1].style.background = valuesGlobal[3];
            savedCards[0].querySelector("span")?.classList.add("hidden");
            savedCards[1].querySelector("span")?.classList.add("hidden");
            savedCards = [];
        }
    }


    function win(): void {
        if (pairSelected == pairsFound) {
            window.clearInterval(interval);
            alert("GLÜCKWUNSCH Du hast " + minute + ":" + second + " Minuten gebraucht.");
        }
    }
}


