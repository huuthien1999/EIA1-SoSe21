"use strict";
var Events;
(function (Events) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let searchDIV = document.querySelectorAll("div");
        for (let i = 0; i < searchDIV.length; i++) {
            searchDIV[i].addEventListener("click", logInfo);
            searchDIV[i].addEventListener("keyip", logInfo);
        }
    }
    function setInfoBox(_event) {
        let spanDOMElement = document.querySelector("span");
        let mouseX = _event.clientX; // Gets Mouse X
        let mouseY = _event.clientY; // Gets Mouse Y
        let coor = "X coords: " + mouseX + ", Y coords: " + mouseY;
        let targetDOM = _event.target;
        spanDOMElement.innerHTML = coor + "<br>" + targetDOM;
        spanDOMElement.style.left = mouseX + 20 + "px";
        spanDOMElement.style.top = mouseY + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
})(Events || (Events = {}));
//# sourceMappingURL=script.js.map