/* TO MODIFY from Box
    Step 1: Birds have fixed size 50,50
    Step 2: Modify the contructor to make width  an height as 50
    STe 3: In display function set pos.x to mouseX and pos.y to mouseY
    Step 5: Set log color to purple
    *********sketch.js***********
    setup: Create new bird   100,100
    draw: Display the object

    Run your code and check if  "BIRD" is created

*/


class Bird {
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
  