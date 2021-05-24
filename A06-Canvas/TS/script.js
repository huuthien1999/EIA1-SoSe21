"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    let buttonDOM1;
    let buttonDOM2;
    let buttonDOM3;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d"); // wir kreieren eine super Objekt und übergeben ihm methoden
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        buttonDOM1 = document.querySelector("#random");
        buttonDOM2 = document.querySelector("#mandelbrot");
        buttonDOM3 = document.querySelector("#supriseCanvas");
        buttonDOM1.addEventListener("click", random);
        buttonDOM2.addEventListener("click", mandelBrot);
        buttonDOM3.addEventListener("click", suprise);
    }
    function random() {
        canvas.classList.remove("hidden");
        buttonDOM2.classList.add("hidden");
        buttonDOM3.classList.add("hidden");
        // let color: string[] = ["red", "blue", "green", "yellow"];
        let x1 = 50;
        let y1 = 50;
        let x1Intervall = canvas.width - 50;
        // let y1Intervall: number = 0;
        for (let x = 0; x < 20; x++) {
            let yRandom = y1;
            let xRandom = x1;
            crc2.beginPath();
            crc2.moveTo(x1, y1);
            for (let y = 0; y < 500; y++) {
                let random1 = Math.floor(Math.random() * 50);
                let random2 = Math.floor(Math.random() * 50);
                crc2.lineTo(xRandom += random1, yRandom + random2);
            }
            crc2.lineTo(x1Intervall, y1);
            crc2.arc(x1, y1, Math.random() * 100, 0, 2 * Math.PI, true);
            crc2.arc(x1Intervall, y1, Math.random() * 100, 0, 2 * Math.PI, true);
            crc2.stroke();
            y1 += 50;
        }
    }
    function mandelBrot() {
        //nicht mein Code 
        canvas.classList.remove("hidden");
        buttonDOM1.classList.add("hidden");
        buttonDOM2.classList.add("hidden");
        buttonDOM3.classList.add("hidden");
        for (let x = 0; x < 500; x++) {
            for (let y = 0; y < 500; y++) {
                let i = 0;
                let cx = -2 + x / 50;
                let cy = -2 + y / 50;
                let zx = 0;
                let zy = 0;
                do {
                    let xt = zx * zy;
                    zx = zx * zx - zy * zy + cx;
                    zy = 2 * xt + cy;
                    i++;
                } while (i < 255 && (zx * zx + zy * zy) < 4);
                let color = i.toString(16);
                crc2.beginPath();
                crc2.rect(x * 4, y * 4, 4, 4);
                crc2.fillStyle = "#" + color + color + color;
                crc2.fill();
            }
        }
    }
    function suprise() {
        buttonDOM1.classList.add("hidden");
        buttonDOM2.classList.add("hidden");
        buttonDOM3.classList.add("hidden");
        canvas.classList.remove("hidden");
        let color = ["red", "blue", "green", "yellow"];
        let x1;
        let x2;
        let y1;
        let y2;
        for (let x = 0; x < 4; x++) {
            if (x == 0) {
                x1 = 0;
                x2 = 500;
                y1 = 0;
                y2 = 0;
            }
            else if (x == 1) {
                x1 = 500;
                x2 = 0;
                y1 = 500;
                y2 = 500;
            }
            else if (x == 2) {
                x1 = 500;
                x2 = 0;
                y1 = 0;
                y2 = 0;
            }
            else {
                x1 = 500;
                x2 = 500;
                y1 = 0;
                y2 = 500;
            }
            for (let i = 0; i <= 500; i += 25) {
                crc2.beginPath();
                crc2.moveTo(x1, y1);
                crc2.lineTo(x2, y2);
                crc2.strokeStyle = color[x];
                crc2.stroke();
                if (x == 0) {
                    x1 += 25;
                    y2 += 25;
                }
                else if (x == 1) {
                    x1 -= 25;
                    y2 -= 25;
                }
                else if (x == 2) {
                    x1 -= 25;
                    y2 += 25;
                }
                else {
                    x2 -= 25;
                    y1 += 25;
                }
            }
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=script.js.map