
const SCREEN_W = 640;
const SCREEN_H = 480;

var canv = document.getElementById("mycanvas");
var con = canv.getContext("2d");
canv.width = SCREEN_W;
canv.height = SCREEN_H;
let rocket_x = 10;
let rocket_y = 350; 

var img_rocket = new Image();
img_rocket.src = "rocket.jpg";

img_rocket.onload = function()
{
    con.drawImage(img_rocket, rocket_x, rocket_y);
}


function drawRocket(x,y)
{
    con.drawImage(img_rocket, x,y)    
}

// when a key is pressed
document.onkeydown = function(e)
{
    switch(e.key)
    {
        case "ArrowLeft": //left
            rocket_x -= 10;
            break;
        case "ArrowRight": //right
            rocket_x += 10;
            break;
        case " ": //space
        //document.getElementById("test").tex
            let newtetro = rotate();
            if(checkMove(0,0, newtetro)) tetro = newtetro;
            break;

    }
    con.clearRect(0,0,SCREEN_W,SCREEN_H);
    drawRocket(rocket_x, rocket_y)
}