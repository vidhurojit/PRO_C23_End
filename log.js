class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //The next four lines help to rorate the body at an angle
      /*var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);*/
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
    //  rect(0, 0, this.width, this.height); //Use this with translate. Comment the line above
      pop();
    }
  };
  