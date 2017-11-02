var x = 0
var y = 0
var ball_color
function setup() {
  createCanvas(windowWidth,windowHeight)
  background('black')
  ball_color = color(200, 200, 200, 5)
  textSize(100)
  frameRate(10)
}
function draw() {
  ball_color = color(
    random(255),
    random(255),
    random(255),
    5
  );

for(var i =0; i < 1000; i++){
  noStroke()
  fill(ball_color)
  x = width * i/10;
  ellipse(x, y, 30, 30)
}
y++
if(y > height){
  y = 0
}

for (let w = 0; w < height+25; w += 50) {
		fill(ball_color);
		ellipse(0, w, 50, 50);
	}
	for (let t = 0; t < width+25; t += 50) {
		fill(ball_color);
		ellipse(t, 0, 50, 50);
  }
    for (let q = 0; q < width+25; q += 50 ) {
      fill(ball_color);
      ellipse(q, 950, 50, 50)
    }
      for (let v = 0; v < height+25; v+= 50) {
        fill(ball_color);
        ellipse(1900, v, 50, 50)
      }
    }
