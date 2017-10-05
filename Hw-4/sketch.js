function setup() {
  createCanvas( 1200, 1800)
}
function draw() {
  // this is my background
  background('rgb(194, 210, 223)')
  //This is the chest/body of my robot
  fill('gray')
  rect(400, 400, 400, 500)
  //And this is the skull, or head
  rect(500, 200, 200, 200)
  //These two arcs are the shoulders
  rotate( radians(320))
arc( 30, 690, 300, 300, radians(260), radians(280) )
rotate( radians(80))
arc(890, -75, 300, 300, radians(260), radians(280) )
//These next two rectangles are the left and right arms
rotate( radians(320))
noStroke()
rotate( radians(330))
//left arm
rect(-280, 530, 400, 100)
rotate( radians(60))
//right arm
rect(900, -60, 400, 100)
rotate( radians(300))
//This is the code for my robotic cyclops eye
stroke('black')
fill('yellow')
  ellipse(365, 570, 100, 100)
fill('gray')
rotate( radians(30))
//These are the left and right legs, complete with knee bend action
rect(200, 900, 300, 100)
noStroke()
rect(200, 900, 100, 300)
stroke('black')
rect(700, 900, 100, 600)
rect(425, 450, 350, 350)
  fill('black')
  //This is how I made the pupil for the eye
rect(565, 308, 50, 50, 130)
noStroke()
//This is the grass
fill('green')
rect(0, 1500, 1200, 800)
//This is the city he is going to step on
fill('purple')
rect(200, 1300, 66, 200)
fill('orange')
rect(267, 1400, 50, 100)
fill('red')
rect(139, 1400, 60, 100)
//Here is a sun to brighten the mood
fill('yellow')
ellipse(0, 0, 250, 250)
//I think he needs an antenna
fill('gray')
triangle(600, 150, 625, 200, 550, 250)
ellipse(600, 150, 30, 30)
//Now for the cloud
fill('white')
ellipse(1000, 200, 60, 60)
ellipse(1050, 200, 60, 60)
ellipse(1025, 175, 60, 60) 
}
