let ball = [];
let num_of_balls = 15
let bg_color;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg_color = color(27, 157, 96);

    for (let i = 0; i < num_of_balls; i++) {
        ball.push( new MovingBall() );
    }
}

function draw() {
    background(bg_color);

    for (var i = 0; i < ball.length; i++) {
        ball[i].frame();
    }
}

class MovingBall {

    constructor() {
        this.w = 50
        this.h = 50
        this.w = this.w;
        this.h = this.h;
        this.loc_x = random(width);
        this.loc_y = random(height);
        this.move_x = random(-2, 2);
        this.move_y = random(-2, 2);
        this.ball_color = color(random(255), random(255), random(255));


    }

    frame() {
        this.display();
        this.move();
    }

    display() {

        push();

        translate(this.loc_x, this.loc_y);
        fill(this.ball_color);

        ellipse(0, 0, this.w, this.h);


        pop();
    }

    move() {
        this.loc_x += this.move_x;
        this.loc_y += this.move_y;

        if (this.loc_x >= width) {
            this.move_x *= -1;
            this.loc_x = width - abs(this.move_x);
        } else if (this.loc_x <= 0) {
            this.move_x *= -1;
            this.loc_x = abs(this.move_x);
        } else if (this.loc_y >= height) {
            this.move_y *= -1;
            this.loc_y = height - abs(this.move_y);
        } else if (this.loc_y <= 0) {
            this.move_y *= -1;
            this.loc_y = abs(this.move_y);
        }
    }
}
