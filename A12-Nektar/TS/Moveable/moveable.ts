namespace Nektar {
    
export abstract class Movable {
    
    protected posX: number;
    protected posY: number;

    protected velocityX: number;
    protected velocityY: number;

    protected nectarStorage: number;
    protected indexFlower: number;


    //Bienen



    constructor(_position: Vector, _velocity: Vector) {
          this.posX = _position.x; 
          this.posY = _position.y; 

          this.velocityX = _velocity.x;
          this.velocityY = _velocity.y;
    }

    setIndex(_index: number){
        this.indexFlower = _index;
    }


    public draw(): void {
        //Draw
    }

    public update(): void {
        //Update
    }
}

}