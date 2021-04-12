class slingshot{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling=Constraint.create(option)
        this.pointB=pointB
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if (this.sling.bodyA){
        strokeWeight(7)
        line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}}