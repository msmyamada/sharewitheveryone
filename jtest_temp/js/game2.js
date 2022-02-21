var mycanvas1 = document.getElementById("mycanvas");
var ctx = mycanvas1.getContext("2d");

var x = mycanvas1.width/2;
var y = 0;
var dx = 0;
var dy = 2;

function myball()
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
    myball();
    x += dx;
    y += dy;


}

setInterval(mydraw,10);
