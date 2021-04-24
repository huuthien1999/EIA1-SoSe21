namespace Events {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);

        let searchDIV: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

        for (let i: number = 0; i < searchDIV.length; i++) {
            searchDIV[i].addEventListener("click", logInfo);
            searchDIV[i].addEventListener("keyip", logInfo);
        }
    }

    function setInfoBox(_event: MouseEvent): void {
        // let spanDOMElement: HTMLSpanElement = <HTMLSpanElement> document.querySelector("span");
        let mouseX: number = _event.clientX; // Gets Mouse X
        let mouseY: number = _event.clientY; // Gets Mouse Y
        // let coor: string = "X coords: " + mouseX + ", Y coords: " + mouseY;
        // let targetDOM: EventTarget = <EventTarget>_event.target;

        // spanDOMElement.innerHTML = coor + "<br>" + targetDOM;
        // spanDOMElement.style.left = mouseX + 20 + "px";
        // spanDOMElement.style.top = mouseY + "px";
    }

    function logInfo(_event: Event): void {
        // console.log(_event.type);
        // console.log(_event.target);
        // console.log(_event.currentTarget);
        // console.log(_event.composedPath());
        // console.log(_event.target);
        // console.log(_event.target);
        let newValue: HTMLElement = <HTMLElement> _event.target;
        // console.log(newValue);
        let newValue2: string = <string> newValue.querySelector("p").innerHTML;
        console.log(newValue2);
        newValue.style.backgroundColor = "#204474";
 

 
}