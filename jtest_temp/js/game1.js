var mycanvas1 = document.getElementById("mycanvas");
var ctx = mycanvas1.getContext("2d");

ctx.beginPath();
ctx.rect(20,20,600,100);
ctx.fillStyle = "#009900";
ctx.fill();

ctx.beginPath();
ctx.arc(320,240, 50, 0,3.14*2);
ctx.fillStyle = "#000099";
ctx.fill();
ctx.closePath();


//https://developer.mozilla.org/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball