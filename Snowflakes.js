class Snowflakes{
    constructor(x,y){
        var options = {
            'friction': 0.001,
            'restitution': 0.1
        }
         this.fall = Bodies.circle(x,y,5,options);
         this.radius = 5;
          this.image =loadImage("snow4.webp");
         World.add(world,this.fall);  
        }

          updateY() {
              
              if (this.fall.position.y > height) {
                  Matter.Body.setPosition(this.fall,{x: random(0,displayWidth), y:random(0,displayHeight)});
              }
          }

          showDrop() {
            imageMode(CENTER);
            image(this.image,this.fall.position.x,this.fall.position.y,this.radius+40,this.radius+40);
          }
    
}