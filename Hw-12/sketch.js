let balls = [];
const numOfBalls = 10;
function setup() {
    createCanvas(windowWidth, windowHeight);
    let init_x = 950;
    let init_y = 60;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));
            init_y += 100;
        if (init_x > height) {
            init_x = 60;
            init_y += 125;
        }
    }

      }

function draw() {
    background('black');
    fill('white')

    //dotted middle line and surrounding lines for the "field"
    rect(1890, 0, 10, 1000)
    rect(0, 0, 10, 1000)
    rect(945, 0, 10, 30)
    rect(945, 60, 10, 30)
    rect(945, 120, 10, 30)
    rect(945, 180, 10, 30)
    rect(945, 240, 10, 30)
    rect(945, 300, 10, 30)
    rect(945, 360, 10, 30)
    rect(945, 420, 10, 30)
    rect(945, 480, 10, 30)
    rect(945, 540, 10, 30)
    rect(945, 600, 10, 30)
    rect(945, 660, 10, 30)
    rect(945, 720, 10, 30)
    rect(945, 780, 10, 30)
    rect(945, 840, 10, 30)
    rect(945, 900, 10, 30)
    rect(945, 960, 10, 30)
    noStroke()
    rect(1840, 400, 50, 10)
    rect(1840, 500, 50, 10)
    rect(1840, 400, 10, 100)
    rect(0, 400, 50, 10)
    rect(0, 500, 50, 10)
    rect(50, 400, 10, 110)

    for (let i = 0; i < balls.length; i++) {
        balls[i].display();
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();

      }
}


class Ball {
    constructor(x, y, size) {
        this.color = 'red';
        this.size = random(20, 80);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
    }

    display() {
        push();
        noStroke();
        fill(this.color);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }


    ballCheck(otherBalls, myId) {
        for (let n = 0; n < otherBalls.length; n++) {
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;
                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                   }
                }
            }
        }
    }
