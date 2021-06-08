namespace Test {

    window.addEventListener("load", handleLoad);


    function handleLoad(): void {
        let hund1: Moveable = new Moveable("killua", "zoldyck");

        hund1.ichSeheEinSchaf();
    
        let hund2: Moveable = new Pudel("Gon", "Freeces");
        hund2.ichSeheEinSchaf();
    
        let hund3: Moveable = new Bulldogge("Ging", "Freeces");
        hund3.ichSeheEinSchaf();
    
    }



   

}