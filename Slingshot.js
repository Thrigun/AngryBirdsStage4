class SlingShot{
    //
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    //we just changed the bodyA to null or nothing
    fly(){ 
        this.sling.bodyA = null;
    }
   //if the function provided inside the if is false then
   // it will not follow the instructions provided in the if function,
   // if it is true then only it will follow the instruction given in the if 
   
    display(){
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}