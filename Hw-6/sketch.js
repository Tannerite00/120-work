var y = 100;
var x = 200;
var z = 300;
var t = 400;
var v = 500;
var q = 600;

var a = 100;
var b = 200;
var c = 300;
var d = 400;
var e = 500;
var f = 600;

var col = 0;

var speed = 11%7

var eye = {}
var eyeSize = 100
var eyePosX = 0
var eyePosY = 0
var eyeColor = 'white'


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  eyePosX = width/2
  eyePosY = height/2

}

function draw() {
  col = map(mouseX, 0, windowWidth, 0, 255)

  background(col);

  stroke(255)
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
  stroke(225)
  x = x - 2;
  if (x < 0) {
    x = height
  }
line(0, x, width, x)
stroke(200)
z = z - 3;
if (z < 0) {
  z = height
}
line(0, z, width, z)
stroke(175)
t = t - 4;
if (t < 0) {
  t = height;
}
line( 0, t, width, t)
stroke(150)
v = v - 5;
if (v < 0) {
  v = height;
}
line(0, v, width, v)

stroke(125)
q = q - 6;
if (q < 0) {
  q = height;
}
line(0, q, width, q)


stroke(255)
a = a - 1;
if (a < 0) {
  a = width;
}
line(a, 0, a, height)

stroke(225)
b = b - 2;
if (b < 0) {
  b = width;
}
line(b, 0, b, height)
stroke(200)
c = c - 3;
if (c < 0) {
  c = width;
}
line(c, 0, c, height)

stroke(175)
d = d - 4;
if (d < 0) {
  d = width;
}
line(d, 0, d, height)

stroke(150)
e = e - 5;
if (e < 0) {
  e = width
}
line(e, 0, e, height)

stroke(125)
f = f - 6
if (f < 0) {
  f = width
}
line(f, 0, f, height)


translate(eyePosX, eyePosY)
fill(eyeColor)
ellipse(0, 0, eyeSize)
fill('blue')
ellipse(0, 0, eyeSize * .8)
fill('black')
ellipse(0, 0, eyeSize * 0.5)
eyePosX += random(-speed, speed)
eyePosY += random(-speed, speed)
constrain(eyePosX, 0, width)
constrain(eyePosY, 0, height)





















}
