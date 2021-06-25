"use strict";
var Nektar;
(function (Nektar) {
    class Movable {
        posX;
        posY;
        velocityX;
        velocityY;
        nectarStorage;
        indexFlower;
        //Bienen
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        setIndex(_index) {
            this.indexFlower = _index;
        }
        draw() {
            //Draw
        }
        update() {
            //Update
        }
    }
    Nektar.Movable = Movable;
})(Nektar || (Nektar = {}));
//# sourceMappingURL=moveable.js.map