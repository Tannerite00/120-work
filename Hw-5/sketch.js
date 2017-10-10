function setup() {
  createCanvas(windowWidth, windowHeight);
}
//A few positioning variables that will come in handy later
var posT = 1500
var posV = 1200
var posW = 500
var posX = 0
var posY = 0
var posZ = 1000

//Making my basketball court
function draw() {
  background('tan');
  stroke('black');
  fill('red');
  rect(0, 900, 2000, 20);
  fill('gray');
  rect(1800, 600, 20, 300);
  rect(100, 600, 20, 300);
  fill('white');
  rect(1790, 600, 10, 70);
  rect(120, 600, 10, 70);
  fill('red');
  rect(1750, 650, 40, 10);
  rect(130, 650, 40, 10);

  //Making the nets for the hoops
  stroke('white');
  line(1750, 661, 1775, 685);
  line(1760, 661, 1780, 680);
  line(1770, 661, 1785, 675);
  line(1780, 661, 1790, 670);
  line(1790, 661, 1770, 685);
  line(1780, 661, 1765, 680);
  line(1770, 661, 1760, 675);
  line(1760, 661, 1755, 670);
  line(130, 661, 155, 685);
  line(140, 661, 160, 680);
  line(150, 661, 165, 675);
  line(160, 661, 170, 670);
  line(170, 661, 150, 685);
  line(160, 661, 145, 680);
  line(150, 661, 140, 675);
  line(140, 661, 135, 670);


  //Making the scoreboard backgroud
  push();
  stroke('black');
  fill('purple');
  rect(725, 250, 400, 300);

  //Home score
  fill('black');
  rect(750, 275, 100, 75);
  fill('white');
  textFont("Arial");
  textSize(48);
  text("71" , 775, 340);

  //Away score
  fill('black');
  rect(1000, 275, 100, 75);
  fill('white');
  textFont("Arial");
  textSize(48);
  text("69", 1025, 340);

  //Period, or Quarter box
  fill('black');
  rect(900, 280, 50, 37);
  fill('white');
  textFont('Arial');
  textSize(32);
  text('4' , 915, 315);

  //Home and Away boxes
  fill('black');
  rect(750, 360, 100, 50);
  fill('white');
  textFont('Arial');
  textSize(32);
  text('HOME', 752, 400);
  fill('black');
  rect(1000, 360, 100, 50);
  fill('white');
  textFont('Arial');
  textSize(32);
  text('AWAY' , 1002, 400);

  //Box stating Period
  fill('black');
  rect(887, 325, 80, 40);
  fill('white');
  textFont('Arial');
  textSize(20);
  text('PERIOD' , 889, 355);

  //Time box
  fill('black')
  rect(865, 425, 120, 60)
  fill('white')
  textFont('Arial')
  textSize(48)
  text('0:00' , 875, 475)
  pop();

//Making the basketball and linking it to the mouse
  push();
  noCursor();
  translate(mouseX, mouseY);
  stroke('black');
  fill('orange');
  ellipse(100, 100, 30, 30);
  line(90, 90, 110, 110);
  line(110, 90, 90, 110);
  pop();

//Time to celebrate
fill('blue');
ellipse(posX, posY, 30, 30);
posX = posX + 1
posY = posY + 1
ellipse(posW, posY, 30, 30);
posW = posW + 1
posY = posY + 1
ellipse(posZ, posY, 30, 30);
posZ = posZ - 1
posY = posY + 1
fill('yellow')
ellipse(posV, posY, 30, 30);
posV = posV + 1
posY = posY + 1
ellipse(posT, posY, 30, 30);
posT = posT - 1
posY = posY + 1

//Now lets not let them go anywhere
posT = constrain(posT, 0, width);
posV = constrain(posV, 0, width);
posW = constrain(posW, 0, width);
posX = constrain(posX, 0, width);
posY = constrain(posY, 0, 900);
posZ = constrain(posZ, 0, width);

//END





  }
