class Boy{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:false,
            'restitution':0.0001,
            'friction':3.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 100;
        this.height = 150;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

    }


