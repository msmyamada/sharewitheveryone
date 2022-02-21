var mycanvas1 = document.getElementById("mycanvas");
var ctx = mycanvas1.getContext("2d");

var x = mycanvas1.width/2;
var y = 0;
var dx = 0;
var dy = 2;

var myx = mycanvas1.width/2;
var myy = mycanvas1.height -20;
var right_pressed = false;
var left_pressed = false;
document.addEventListener("keydown", mykeydown, false);
document.addEventListener("keyup", mykeyup, false);

function mykeydown(e)
{
    if(e.key == "ArrowRight" )
        right_pressed = true;
    else if(e.key == "ArrowLeft")
        left_pressed = true;
}

function mykeyup(e)
{
    if(e.key == "ArrowRight")
    {
        right_pressed = false;
    }
    else if(e.key == "ArrowLeft")
    {
        left_pressed = false; 
    }
}

function draw_myself()
{
    ctx.beginPath();
    ctx.rect(myx, myy, 50, 20);
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.closePath();
}


function draw_myball()
{
    ctx.beginPath();
    ctx.arc(x, y, 10, 0 , 3.14*2);
    ctx.fillStyle = "#FFFF00";
    ctx.fill();
    ctx.closePath();

}

function mydraw()
{
    ctx.clearRect(0,0,mycanvas1.width,mycanvas1.height);
    draw_myball();
    draw_myself();
    x += dx;
    y += dy;

    if(right_pressed==true)
    {
        myx += 5;
   }
    else if (left_pressed == true)
    {
        myx -= 5;
    }
    


}

setInterval(mydraw,10);
