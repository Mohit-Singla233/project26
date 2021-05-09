class Rope
{
    constructor(body1, body2, offSetX, offSetY){
        this.offsetX = offSetX
        this.offsetY = offSetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:offSetX, y:offSetY},
            

        }
        this.chain=Matter.Constraint.create( options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(5);
        line (pointA.x,pointA.y,pointB.x+this.offsetX, pointB.y+this.offsetY);
    }
        
}