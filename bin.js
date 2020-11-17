class Bin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':true
  
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
    
      
      World.add(world, this.body);
      this.image = loadImage("dustbingreen.png")
     
    }
    display(){
      var pos =this.body.position;
      push ();
      rectMode(CENTER);
      stroke ("lightblue")
      fill("lightblue");
      rect(pos.x, pos.y, this.width, this.height);
     imageMode (CENTER)
      image (this.image,750,405,100,140)
      pop();
  }
    }    