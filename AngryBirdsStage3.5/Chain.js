class Chain{
    constructor(x, y){
        var options = {
            bodyA: x,
            pointB: y,
            stiffness: 0.4,
            length: 10
        }
        this.pointB = y;

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;       
    }

    display(){

        if(this.chain.bodyA!=null){

        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
    }
    
}