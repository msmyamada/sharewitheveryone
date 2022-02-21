var map = [
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],

    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],

    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,1,1,1,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],

    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,0,1,0,1, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 1,1,1,1,1,1,1,2,2,2],

    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],

    [2,2,2,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2],


];

const SCREEN_W = 400;
const SCREEN_H = 800;
const WALL_W = 40;
const WALL_H = 40;
const MAPSIZE_W = 40;
const MAPSIZE_H = 60;
const VMAPSIZE_W = 10;
const VMAPSIZE_H = 20;
const MOVING = 40;  // 1 step for any moving
const GAME_SPEED = 100; //1 sec
const MYCAR_X_START = 4;
const MYCAR_Y_START = 9;

const MINI_SCREEN_W = 200;
const MINI_SCREEN_H = 400;
const MINI_CHAR_SIZE = 10;
const MINI_SCALE_W = MINI_SCREEN_W  / MAPSIZE_W ;
const MINI_SCALE_H = MINI_SCREEN_H  / MAPSIZE_H ;

const ROAD_COLOR =  "#FE5"; //yellow
const WALL_COLOR =  "#6B6"; //green
const WATER_COLOR = "#7EF"; //aqua

var img_mycar = new Image();
img_mycar.src = "./js/mycar.jpg";


var vmap_x0_point = 0;
var vmap_y0_point = 0;
var mycar_x = MYCAR_X_START;
var mycar_y = MYCAR_Y_START;
var vector_x = 0;
var vector_y = 0;

var canv = document.getElementById("mycanvas");
var con = canv.getContext("2d");
var canv2 = document.getElementById("mysmallcanvas");
var con2 = canv2.getContext("2d");
con.width = SCREEN_W;
con.height = SCREEN_H;
let score = 0;

draw_vmap();
setInterval( main_loop, GAME_SPEED);  // call dropTetro per 1sec

function draw_vmap()
{
    con.clearRect(0,0,SCREEN_W,SCREEN_H);
    for(let x=0; x< VMAPSIZE_W ; x++)
    {
        for(let y=0; y< VMAPSIZE_H; y++)
        {
            let px = x * WALL_W;
            let py = y * WALL_H;

            if( map[y+vmap_y0_point][x+vmap_x0_point]==0  )  //0==road
            {
                con.fillStyle = ROAD_COLOR; 
                con.fillRect(px,py,WALL_W, WALL_H);
            }
            else if( map[y+vmap_y0_point][x+vmap_x0_point]==1  )  //1==wall
            {
                con.fillStyle = WALL_COLOR;
                con.fillRect(px,py,WALL_W, WALL_H);
            }
            else if( map[y+vmap_y0_point][x+vmap_x0_point]==2  )  //2==water
            {
                con.fillStyle = WATER_COLOR;
                con.fillRect(px,py,WALL_W, WALL_H);
            }

        }

    }

    // draw mycar
    con.drawImage(img_mycar, MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H);
    //con.fillStyle = "#F66"; //red   draw mycar
    //con.fillRect(MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H, WALL_W, WALL_H);

    draw_smallmap();

}

function draw_smallmap()
{
    con2.clearRect(0,0, MINI_SCREEN_W, MINI_SCREEN_H);
    var px = MINI_SCALE_W * mycar_x;
    var py = MINI_SCALE_H * mycar_y;
    con2.fillStyle = "#66F"; //red   draw mycar
    con2.fillRect(px,py, 5,5);
}

function main_loop()
{
    draw_vmap();
    if(vector_x==-1 && vmap_x0_point >0 && mycar_x-1>=0 && map[mycar_y][mycar_x-1] == 0)
    {
/*
        if(vmap_x0_point<=0) break;
        if(mycar_x-1<0) break;
        if(map[mycar_y][mycar_x-1] != 0) break;
*/        //con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
        vmap_x0_point--;
        mycar_x--;

    }
    
    else if(vector_x==+1 && vmap_x0_point + VMAPSIZE_W < MAPSIZE_W && mycar_x+1  <=MAPSIZE_W && map[mycar_y][mycar_x+1] == 0)
    {
/*        if(vmap_x0_point + VMAPSIZE_W >= MAPSIZE_W) break;
        if(mycar_x+1>MAPSIZE_W) break;
        if(map[mycar_y][mycar_x+1] != 0) break;
  */      //con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
        vmap_x0_point++;
        mycar_x++;

    }
    else if(vector_y==-1 && vmap_y0_point>0 && mycar_y-1 >=0 && map[mycar_y-1][mycar_x] == 0) 
    {
/*        if(vmap_y0_point<=0) break;
        if(mycar_y-1<0) break;
        if(map[mycar_y-1][mycar_x] != 0) break;
  */      //con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
        vmap_y0_point--;
        mycar_y--;

    }
    else if(vector_y==+1 && vmap_y0_point +  VMAPSIZE_H < MAPSIZE_H && mycar_y+1<=MAPSIZE_H && map[mycar_y+1][mycar_x] == 0)
    {
/*        if(vmap_y0_point +  VMAPSIZE_H >= MAPSIZE_H) break;
        if(mycar_y+1>MAPSIZE_H) break;
        if(map[mycar_y+1][mycar_x] != 0) break;
*/        //con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
        vmap_y0_point++;
        mycar_y++;
    
    }

    draw_vmap();
}


document.onkeydown = function(e)
{
    switch(e.key)
    {
        case "ArrowLeft": //left
            vector_x=-1;
            vector_y=0;
            break;
        case "ArrowRight": //right
            vector_x=+1;
            vector_y=0;
            break;
        case "ArrowUp": //up
            vector_x=0;
            vector_y=-1;
            break;
        case "ArrowDown": //down
            vector_x=0;
            vector_y=+1;
            break;

    }
    draw_vmap();
}



draw_vmap();
