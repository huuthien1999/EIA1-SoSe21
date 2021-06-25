namespace Nektar {
    
export abstract class Movable {
    protected job: Jobs = Jobs.flyAround;
    protected doingJob: boolean = false;
    
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

    get doingJobBee(): boolean {
        return this.doingJob;
    }

    // setdoingJob(_value: boolean): void{
    //     this.doingJob = _value;
    // }

    setIndex(_index: number): void {
        this.indexFlower = _index;
    }

    setJobTask(_job: Jobs): void {
        this.job = _job;
        if (this.job == Jobs.flyAround) {
            this.doingJob = false;
        }
        else {
            this.doingJob = true;
        }
    }

    public draw(): void {
        //Draw
    }

    public update(): void {
        //Update
    }
}

}