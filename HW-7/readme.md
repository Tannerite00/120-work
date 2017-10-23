Tanner Dodd, 50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing
First, the object 'ball' is made, allowing the user to store
different variables about the 'ball', such as the starting point,
how big the ball is, its scope, etc.

Then the canvas is created, set to windowidth, with a white background.
The position of the ball (ball.x and ball.y) are then set to increase by 1
all the while being multiplied by 1. this allows the ball to move.

Then, with a pair of if() statements, the ball is constrained to bounce off
the edges of the canvas to stay on the screen.

the function MousePressed allows the user to click the mouse and alter
the speed and trajectory by the mapping function, thus over riding the
origional command of keeping it steadily increasing.

## How did you alter the sketch?
To alter the code to make it interesting to me,
I first changed the background to black.
then, I made the following variables: Ball_color, fill_counter (set to 0),
and x_pos (also set to 0).
Then, underneath createcanvas, I set Ball_color equal to color(200, 200, 200, 5)
after which I went down under the draw function and set x_pos to incementally
increse with ++ and then set the fill_counter equal to x_pos % 30, which should
always return a 0.
I then implemented an if statement that set the ball color to randomize if
the fill counter were to equal 0, which it alwaus will.
lastly, I put in a noStroke() and set the fill to ball_color right above the
ellipse.


After letting it draw for a while, it will run a pattern and trace it backwords and forewards forever, or until your computer crashes. this is what it looks like
![art](https://github.com/Tannerite00/120-work/blob/master/hw-7%20screenshot.JPG)
