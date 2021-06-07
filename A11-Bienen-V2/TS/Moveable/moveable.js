"use strict";
var FlowersV2;
(function (FlowersV2) {
    class Movable {
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            //Draw
        }
        update() {
            //Update
        }
    }
    FlowersV2.Movable = Movable;
})(FlowersV2 || (FlowersV2 = {}));
//# sourceMappingURL=moveable.js.map