namespace A01 {
    let subjekte: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledor"];

    let praedikate: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];

    let objekte: string [] = ["Zaubertränke", "Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];




    for (let index: number = 6; index > 0; index--) {
        let x: string = getVerse(subjekte, praedikate, objekte);
        console.log(x);
    }


    function getVerse(_subjekte: string[], _praedikate: string[], _objekte: string[]): string {
        let text: string = "";
        let randomNumber1: number = Math.floor(Math.random() * Math.floor(_subjekte.length));
        let randomNumber2: number = Math.floor(Math.random() * Math.floor(_subjekte.length));
        let randomNumber3: number = Math.floor(Math.random() * Math.floor(_subjekte.length));
        text = _subjekte[randomNumber1] + " " + _praedikate[randomNumber2] + " " + _objekte[randomNumber3];
        _subjekte.splice(randomNumber1, 1);
        _praedikate.splice(randomNumber2, 1);
        _objekte.splice(randomNumber3, 1);
        return text;
    }


    let y = 170 % 400;

    console.log(y);




}

