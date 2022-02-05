
const SCREEN_W = 640;
const SCREEN_H = 480;
const BALL_W = 30;
const BALL_H = 30;
const MITT_W = 50;
const MITT_H = 50;
const MOVING = 10;  // 1 step for any moving
const GAME_SPEED = 100; //1 sec


var canv = document.getElementById("mycanvas");
var con = canv.getContext("2d");
con.width = SCREEN_W;
con.height = SCREEN_H;
let ball_x = 10;
let ball_y = 0; 
let mitt_x = 320;
let mitt_y = 430;
let game_count = 5;
let score = 0;

var img_ball = new Image();
img_ball.src = "./js/ball.jpg";
var img_mitt = new Image();
img_mitt.src = "./js/mitt.jpg"
img_ball.onload = function()
{
    //con.drawImage(img_ball,10,10);// ball_x, ball_y);
}
img_mitt.onload = function()
{
    con.drawImage(img_mitt, mitt_x, mitt_y);
}
setInterval( dropBall, GAME_SPEED);  // call dropTetro per 1sec

function dropBall()
{
    if(game_count <= 0)
        game_over();

    if(ball_y>SCREEN_H-MITT_H && game_count > 0)
    {
        ball_x = Math.floor(Math.random()*(SCREEN_W)/MOVING ) *MOVING ;
        ball_y = 0;
        game_count--;
    }
    ball_y += MOVING;
    con.clearRect(0,0,SCREEN_W,SCREEN_H);
    con.drawImage(img_ball, ball_x,ball_y);
    con.drawImage(img_mitt,mitt_x,mitt_y);

}

function drawMitt(x,y)
{
    con.drawImage(img_mitt, x,y)    
}

// when a key is pressed
document.onkeydown = function(e)
{
    switch(e.key)
    {
        case "ArrowLeft": //left
            con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
            mitt_x -= MOVING;
            break;
        case "ArrowRight": //right
            con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
            mitt_x += MOVING;
            break;

    }
    drawMitt(mitt_x, mitt_y)
}

function atari_hantei(x0,y0, w0,h0, x1,y1, w1,h1)
{
    

}

function game_over()
{
    
}
