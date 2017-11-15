var nums = [130, 135, 140, 145, 150, 155, 160, 165, 170, 661, 670, 675,
680, 685, 1750, 1755, 1760, 1765, 1770, 1775, 1780, 1785, 1790]

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
  make();
  move();
}
function make() {
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
  line(nums[14], nums[9], nums[19], nums[13]);
  line(nums[16], nums[9], nums[20], nums[12]);
  line(nums[18], nums[9], nums[21], nums[11]);
  line(nums[20], nums[9], nums[22], nums[10]);
  line(nums[22], nums[9], nums[18], nums[13]);
  line(nums[20], nums[9], nums[17], nums[12]);
  line(nums[18], nums[9], nums[16], nums[11]);
  line(nums[16], nums[9], nums[15], nums[10]);
  line(nums[0], nums[9], nums[5], nums[13]);
  line(nums[2], nums[9], nums[6], nums[12]);
  line(nums[4], nums[9], nums[7], nums[11]);
  line(nums[6], nums[9], nums[8], nums[10]);
  line(nums[8], nums[9], nums[4], nums[13]);
  line(nums[6], nums[9], nums[3], nums[12]);
  line(nums[4], nums[9], nums[2], nums[11]);
  line(nums[2], nums[9], nums[1], nums[10]);

  //Making the scoreboard background
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
}

function move() {
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
