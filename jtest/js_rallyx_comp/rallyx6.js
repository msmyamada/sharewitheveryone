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
    [2,2,2,1,0,0,1,0,0,1, 0,0,1,0,0,1,0,0,1,0, 0,1,0,0,1,0,0,1,0,0, 1,0,0,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,0,0,1, 0,0,1,0,0,1,0,0,1,0, 0,1,0,0,1,0,0,1,0,0, 1,0,0,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,0,0,1, 0,0,1,0,0,1,0,0,1,0, 0,1,0,0,1,0,0,1,0,0, 1,0,0,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,0,0,1, 0,0,1,0,0,1,0,0,1,0, 0,1,0,0,1,0,0,1,0,0, 1,0,0,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,0,0,1, 0,0,1,0,0,1,0,0,1,0, 0,1,0,0,1,0,0,1,0,0, 1,0,0,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,0,0,1, 0,0,1,0,0,1,0,0,1,0, 0,1,0,0,1,0,0,1,0,0, 1,0,0,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,0,0,1, 0,0,1,0,0,1,0,0,1,0, 0,1,0,0,1,0,0,1,0,0, 1,0,0,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,0,0,1, 0,0,1,0,0,1,0,0,1,0, 0,1,0,0,1,0,0,1,0,0, 1,0,0,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,0,0,1, 0,0,1,0,0,1,0,0,1,0, 0,1,0,0,1,0,0,1,0,0, 1,0,0,1,0,1,1,2,2,2],

    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,1,1,1, 1,0,0,1,1,1,0,1,1,1, 0,1,1,0,1,1,0,1,1,1, 0,1,1,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,1,1,1, 1,0,0,1,1,1,0,1,1,1, 0,1,1,0,1,1,0,1,1,1, 0,1,1,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,1,1,1, 1,0,0,1,1,1,0,1,1,1, 0,1,1,0,1,1,0,1,1,1, 0,1,1,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],

    [2,2,2,1,0,0,0,1,0,0, 0,1,0,0,0,1,0,0,0,1, 0,0,0,1,0,0,0,1,0,0, 0,1,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,1,0,0, 0,1,0,0,0,1,0,0,0,1, 0,0,0,1,0,0,0,1,0,0, 0,1,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,1,0,0, 0,1,0,0,0,1,0,0,0,1, 0,0,0,1,0,0,0,1,0,0, 0,1,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,1,0,0, 0,1,0,0,0,1,0,0,0,1, 0,0,0,1,0,0,0,1,0,0, 0,1,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,1,0,0, 0,1,0,0,0,1,0,0,0,1, 0,0,0,1,0,0,0,1,0,0, 0,1,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,1,0,0, 0,1,0,0,0,1,0,0,0,1, 0,0,0,1,0,0,0,1,0,0, 0,1,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,1,0,0, 0,1,0,0,0,1,0,0,0,1, 0,0,0,1,0,0,0,1,0,0, 0,1,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,1,0,0, 0,1,0,0,0,1,0,0,0,1, 0,0,0,1,0,0,0,1,0,0, 0,1,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,1,0,0, 0,1,0,0,0,1,0,0,0,1, 0,0,0,1,0,0,0,1,0,0, 0,1,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],

    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,1,1,1, 1,0,0,1,1,1,1,1,1,1, 0,1,1,0,1,1,0,1,1,1, 0,1,1,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,1,1,1,1, 1,0,0,1,1,1,0,1,1,1, 0,1,1,0,1,1,1,1,1,1, 0,1,1,1,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,2,2,2],
    [2,2,2,1,0,1,1,1,1,1, 1,0,0,1,1,1,0,1,1,1, 0,1,1,0,1,1,0,1,1,1, 0,1,1,1,0,1,1,2,2,2],
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
const GAME_SPEED = 150; //1 sec
const MYCAR_X_START = 4;
const MYCAR_Y_START = 9;

const TEKI_X_START_0 = 8;
const TEKI_Y_START_0 = 18;
const TEKI_X_START_1 = 18;
const TEKI_Y_START_1 = 28;
const TEKI_X_START_2 = 18;
const TEKI_Y_START_2 = 38;

const MINI_SCREEN_W = 200;
const MINI_SCREEN_H = 400;
const MINI_CHAR_SIZE = 10;
const MINI_SCALE_W = MINI_SCREEN_W  / MAPSIZE_W ;
const MINI_SCALE_H = MINI_SCREEN_H  / MAPSIZE_H ;

const ROAD_COLOR =  "#FE5"; //yellow
const WALL_COLOR =  "#6B6"; //green
const WATER_COLOR = "#7EF"; //aqua

const DOT_TEKI_COLOR =  "#F66"; //Red   draw teki car
const DOT_MY_COLOR =  "#33F"; //Blue   draw mycar
const DOT_FLAG_COLOR =  "#FB3"; // yellow flag

const BOMB_SOUND = "./small_explosion2.mp3";
const GET_SOUND = "./shoot2.mp3";

var img_mycar = new Image();
img_mycar.src = "./mycar4.jpg";
var img_tekicar = new Image();
img_tekicar.src = "./tekicar4.jpg";
var img_flag = new Image();
img_flag.src =  "./flag.jpg";
var img_burst = new Image();
img_burst.src = "./burst.jpg";

var vmap_x0_point = 0;
var vmap_y0_point = 0;
var mycar_x = MYCAR_X_START;
var mycar_y = MYCAR_Y_START;
var vector_x = 0;
var vector_y = 0;
var mycar_num = 0;
var teki_x = [0,0,0];
var teki_y = [0,0,0];
var teki_num = [0,0,0];
var teki_vx = [0,0,0];
var teki_vy = [0,0,0];


var canv = document.getElementById("mycanvas");
var con = canv.getContext("2d");
var canv2 = document.getElementById("mysmallcanvas");
var con2 = canv2.getContext("2d");
var text_score_area = document.getElementById("score_area");
var text_remaining_car_area = document.getElementById("remaining_car_area");

con.width = SCREEN_W;
con.height = SCREEN_H;
let score = 0;
var nannido = 15;   // 0: easy 99: hard
var remaining_car = 3;

set_newflag();
set_newflag();
set_newflag();

initialize();
draw_vmap();
let myinterval = setInterval( main_loop, GAME_SPEED);  // call dropTetro per 1sec


function initialize()
{
    teki_x[0]=TEKI_X_START_0;
    teki_y[0]=TEKI_Y_START_0;
    teki_x[1]=TEKI_X_START_1;
    teki_y[1]=TEKI_Y_START_1;
    teki_x[2]=TEKI_X_START_2;
    teki_y[2]=TEKI_Y_START_2;
    mycar_x = MYCAR_X_START;
    mycar_y = MYCAR_Y_START;
    vmap_x0_point = 0;
    vmap_y0_point = 0;
    vector_x = 0;
    vector_y = 0;
    mycar_num = 0;
    for(var i=0; i<3; i++)
    {
        teki_vx[i] = 0;
        teki_vy[i] = 0;
    }
        
}

function semi_initialize()
{
    teki_x[0]=TEKI_X_START_2;
    teki_y[0]=TEKI_Y_START_2;
    teki_x[1]=TEKI_X_START_2;
    teki_y[1]=TEKI_Y_START_2;
    teki_x[2]=TEKI_X_START_2;
    teki_y[2]=TEKI_Y_START_2;
    mycar_x = MYCAR_X_START;
    mycar_y = MYCAR_Y_START;
    vector_x = 0;
    vector_y = 0;
    mycar_num = 0;
    for(var i=0; i<3; i++)
    {
        teki_vx[i] = 0;
        teki_vy[i] = 0;
    }

}

function set_newflag()
{
    while(true)
    {
        var myrandy = Math.floor(Math.random()*40) + 9;
        var myrandx = Math.floor(Math.random()*30) + 4;
        if(map[myrandy][myrandx]==0 && (mycar_x!=myrandx || mycar_y!=myrandy) )
        {
            map[myrandy][myrandx]=3;
            break;
        }
    
    }
    
}

async function atatta()
{
    clearInterval(myinterval);
    var music = new Audio(BOMB_SOUND);
    music.play();  // 再生
    semi_initialize();
    //mysleep(200);
    con.drawImage(img_burst,0,0,WALL_W,WALL_H, MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H,WALL_W, WALL_H);
    await _sleep(200);
    //mysleep(200);
    con.drawImage(img_burst,40,0,WALL_W,WALL_H, MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H,WALL_W, WALL_H);
    await _sleep(500);
    //mysleep(1000);
    //alert("atatta");

    remaining_car --;
    if(remaining_car <= 0)
    {
        gameover();
        try{
            throw new Error("Exit");
        }
        catch(e)
        {
            console.log(e.message);
        }
    
    }
    initialize();
    myinterval = setInterval( main_loop, GAME_SPEED);  // call dropTetro per 1sec
    //break;
    return true;

}

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
            else if(map[y+vmap_y0_point][x+vmap_x0_point]==3   )    //3== flag
            {
                con.drawImage(img_flag, px,py, WALL_W, WALL_H);
            }

        }

    }

    // atari_hantei
    if(atari_hantei() == false) //not hit
    {
        // draw mycar
        draw_mycar(mycar_num);
        // draw tekicar
        draw_tekicar();
    }
    else
    {
        atatta();
    }

    draw_smallmap();

    //draw score
    //con.fillStyle = "#222";
    //con.font = "20px cursive";
    //con.fillText("Score " + score, 10, 25);
    text_score_area.innerText="Score " + score;
    text_remaining_car_area.innerText="Car " + remaining_car;
    

}

function draw_tekicar()
{
    for(var i=0; i<3; i++)
    {
        if(    teki_x[i] >= vmap_x0_point
            && teki_x[i] <  vmap_x0_point + VMAPSIZE_W
            && teki_y[i] >= vmap_y0_point
            && teki_y[i] <  vmap_y0_point + VMAPSIZE_H
        )
        {
            if( mycar_x == teki_x[i] && mycar_y == teki_y[i]) // hit
            {
                con.drawImage(img_burst,40,0,WALL_W,WALL_H, MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H,WALL_W, WALL_H);

            }
            else    // not hit
            {
                var px = (teki_x[i] - vmap_x0_point) * WALL_W ;
                var py = (teki_y[i] - vmap_y0_point) * WALL_H ;
                var clip_x = teki_num[i] * WALL_W;
                con.drawImage(img_tekicar, clip_x,0 ,WALL_W,WALL_H, px,py, WALL_W,WALL_H );
    
            }
        }
    }

}
function draw_mycar( num )
{
    var atari_sw = false;
    for(var i=0; i<3; i++)
    {
        if(mycar_x==teki_x[i] && mycar_y==teki_y[i])
        {
            atari_sw = true;
            con.drawImage(img_burst,0,0,WALL_W,WALL_H, MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H,WALL_W, WALL_H);
            mysleep(100);
            con.drawImage(img_burst,40,0,WALL_W,WALL_H, MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H,WALL_W, WALL_H);
            mysleep(1000);
            break;
        }
    }
    if(atari_sw==false)
    {
        var clip_x = num * WALL_W;
        con.drawImage(img_mycar,clip_x,0,WALL_W,WALL_H, MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H,WALL_W, WALL_H);
        //con.fillStyle = "#F66"; //red   draw mycar
        //con.fillRect(MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H, WALL_W, WALL_H);
    }
}

function draw_smallmap()
{
    con2.clearRect(0,0, MINI_SCREEN_W, MINI_SCREEN_H);
    
    // draw mini mycar
    var px = MINI_SCALE_W * mycar_x;
    var py = MINI_SCALE_H * mycar_y;
    con2.fillStyle = DOT_MY_COLOR;
    con2.fillRect(px,py, 5,5);

    for(var i=0; i<3; i++)  // draw mini teki cars
    {
        var tpx = MINI_SCALE_W * teki_x[i];
        var tpy = MINI_SCALE_H * teki_y[i];
        con2.fillStyle = DOT_TEKI_COLOR;
        con2.fillRect(tpx,tpy, 5,5);
    }

    for(var iy=0; iy<MAPSIZE_H; iy++)   //draw mini flags
    {
        for(var ix=0; ix<MAPSIZE_W; ix++)
        {
            if(map[iy][ix]==3)
            {
                var fpx = MINI_SCALE_W * ix;
                var fpy = MINI_SCALE_H * iy;
                con2.fillStyle = DOT_FLAG_COLOR;
                con2.fillRect(fpx,fpy, 5,5);
        
            }
        }

    }
}

function move_teki()
{
    for(var i=0; i<3; i++)
    {
        if(atari_hantei()==true)
        {
            atatta();
            return;
        }

        var myrand = Math.floor(Math.random()*100);
        if( teki_x[i] > mycar_x && myrand < nannido 
            && map[teki_y[i]][teki_x[i]-1] != 1
        )
        {
            teki_vx[i] = -1;
            teki_vy[i] = 0;
            teki_num[i] = 3;
        }
        else if( teki_x[i] < mycar_x && myrand < nannido 
        && map[teki_y[i]][teki_x[i]+1] != 1
        )
        {
            teki_vx[i] = +1;
            teki_vy[i] = 0;
            teki_num[i] = 1;
        }
        else if( teki_y[i] > mycar_y && myrand < nannido 
            && map[teki_y[i]-1][teki_x[i]] != 1
        )
        {
            teki_vy[i] = -1;
            teki_vx[i] = 0;
            teki_num[i] = 0;
        }
        else if( teki_y[i] < mycar_y && myrand < nannido 
            && map[teki_y[i]+1][teki_x[i]] != 1
        )
        {
            teki_vy[i] = +1;
            teki_vx[i] = 0;
            teki_num[i] = 2;
        }

        if( teki_x[i] + teki_vx[i] > 0 && teki_x[i] + teki_vx[i] < MAPSIZE_W 
            && map[teki_y[i] ][teki_x[i]+teki_vx[i] ]!=1  //1==wall
    //        && teki_vy[i] == 0
            )
        {
            teki_x[i] += teki_vx[i];
        }

        if( teki_y[i] + teki_vy[i] > 0 && teki_y[i] + teki_vy[i] < MAPSIZE_H 
            && map[teki_y[i] + teki_vy[i] ][teki_x[i] ]!=1  //1==wall
    //        && teki_vx[i] == 0
            )
        {
            teki_y[i] += teki_vy[i];
        }

        if(atari_hantei()==true)
        {
            atatta();
            return;
        }
    }

}

function main_loop()
{
    draw_vmap();
    if(atari_hantei==true)
    {
        atatta();
    }
    if(vector_x==-1 && vmap_x0_point >0 && mycar_x-1>=0 && map[mycar_y][mycar_x-1] !=1)
    {
/*
        if(vmap_x0_point<=0) break;
        if(mycar_x-1<0) break;
        if(map[mycar_y][mycar_x-1] != 0) break;
*/        //con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
        vmap_x0_point--;
        mycar_x--;

    }
    
    else if(vector_x==+1 && vmap_x0_point + VMAPSIZE_W < MAPSIZE_W && mycar_x+1  <=MAPSIZE_W && map[mycar_y][mycar_x+1] != 1)
    {
/*        if(vmap_x0_point + VMAPSIZE_W >= MAPSIZE_W) break;
        if(mycar_x+1>MAPSIZE_W) break;
        if(map[mycar_y][mycar_x+1] != 0) break;
  */      //con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
        vmap_x0_point++;
        mycar_x++;

    }
    else if(vector_y==-1 && vmap_y0_point>0 && mycar_y-1 >=0 && map[mycar_y-1][mycar_x] !=1) 
    {
/*        if(vmap_y0_point<=0) break;
        if(mycar_y-1<0) break;
        if(map[mycar_y-1][mycar_x] != 0) break;
  */      //con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
        vmap_y0_point--;
        mycar_y--;

    }
    else if(vector_y==+1 && vmap_y0_point +  VMAPSIZE_H < MAPSIZE_H && mycar_y+1<=MAPSIZE_H && map[mycar_y+1][mycar_x] !=1)
    {
/*        if(vmap_y0_point +  VMAPSIZE_H >= MAPSIZE_H) break;
        if(mycar_y+1>MAPSIZE_H) break;
        if(map[mycar_y+1][mycar_x] != 0) break;
*/        //con.clearRect(mitt_x,mitt_y,MITT_W,MITT_H);
        vmap_y0_point++;
        mycar_y++;
    
    }

    if(atari_hantei==true)
    {
        //alert("HI444");
        atatta();
    }
    move_teki();
    if(atari_hantei==true)
    {
        //alert("HIT222");
        atatta();
    }
    draw_vmap();
}

const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function mysleep(milliseconds){
    var start_t = new Date().getTime();
    var end_t=0;
    alert(start_t);
    while( (end_t-start_t) < milliseconds){
        end_t = new Date().getTime();
    }
   }
   
function atari_hantei()
{
    // get flag?
    if(map[mycar_y][mycar_x]==3)
    {
        var music = new Audio(GET_SOUND);
        music.play();  // 再生
        score += 10;
        map[mycar_y][mycar_x]=0;
        set_newflag();
    }

    // hit car?
    for(var i=0; i<3; i++)
    {
        if(mycar_x==teki_x[i] && mycar_y==teki_y[i])
        {
            //initialize();
            //clearInterval(myinterval);
/*        
            con.drawImage(img_burst,0,0,WALL_W,WALL_H, MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H,WALL_W, WALL_H);
            mysleep(100);
            con.drawImage(img_burst,40,0,WALL_W,WALL_H, MYCAR_X_START * WALL_W, MYCAR_Y_START * WALL_H,WALL_W, WALL_H);
            mysleep(1000);
*/
/*            remaining_car --;
            if(remaining_car <= 0)
            {
                gameover();
                try{
                    throw new Error("Exit");
                }
                catch(e)
                {
                    console.log(e.message);
                }
            
            }
            initialize();
*/
            //myinterval = setInterval( main_loop, GAME_SPEED);  // call dropTetro per 1sec
            //break;
            return true;
        }
    }

    return false;
}

document.onkeydown = function(e)
{
    switch(e.key)
    {
        case "ArrowLeft": //left
            vector_x=-1;
            vector_y=0;
            mycar_num = 3;
            break;
        case "ArrowRight": //right
            vector_x=+1;
            vector_y=0;
            mycar_num = 1;
            break;
        case "ArrowUp": //up
            vector_x=0;
            vector_y=-1;
            mycar_num = 0;
            break;
        case "ArrowDown": //down
            vector_x=0;
            vector_y=+1;
            mycar_num = 2;
            break;

    }
    draw_vmap();
}

function gameover()
{
    clearInterval(myinterval);
    alert("Game over! \n Your score is " + score);
    try{
        throw new Error("Exit");
    }
    catch(e)
    {}
    score = 0;
    remaining_car = 3;
    initialize();
    
    //myinterval = setInterval( main_loop, GAME_SPEED);  // call dropTetro per 1sec


}



draw_vmap();


