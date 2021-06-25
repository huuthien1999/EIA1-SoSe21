"use strict";
var Nektar;
(function (Nektar) {
    class Movable {
        job = Nektar.Jobs.flyAround;
        doingJob = false;
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
        get doingJobBee() {
            return this.doingJob;
        }
        // setdoingJob(_value: boolean): void{
        //     this.doingJob = _value;
        // }
        setIndex(_index) {
            this.indexFlower = _index;
        }
        setJobTask(_job) {
            this.job = _job;
            if (this.job == Nektar.Jobs.flyAround) {
                this.doingJob = false;
            }
            else {
                this.doingJob = true;
            }
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