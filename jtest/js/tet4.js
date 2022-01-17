const FIELD_COL = 10;   //tetris screen width
const FIELD_ROW = 20;   //tetris screen hight
const BLOCK_SIZE = 30;
const TETRO_SIZE = 4;
const SCREEN_W = BLOCK_SIZE * FIELD_COL;
const SCREEN_H = BLOCK_SIZE * FIELD_ROW;

let can = document.getElementById("mycanvas");
let con = can.getContext("2d");
can.width = SCREEN_W;
can.height = SCREEN_H;

let tetro = [ 
[0, 0, 0, 0],
[1, 1, 0, 0],
[0, 1, 1, 0],
[0, 0, 0, 0]
];
let tetro_x = 0;
let tetro_y = 0;
let field = [];

// field definition -- all 0
function initialize()
{
    for(let y=0; y<FIELD_ROW; y++)
    {
        field[y] = [];
        for(let x=0; x<FIELD_COL; x++)
        {
            field[y][x] = 0;
        }
    }
    field[5][8] =1;
}

function drawBlock(x,y)
{
    let px = x * BLOCK_SIZE;
    let py = y * BLOCK_SIZE;
    
    con.fillStyle = "red";
    con.fillRect(px,py,BLOCK_SIZE, BLOCK_SIZE);
    con.strokeStyle = "black";
    con.strokeRect(px,py,BLOCK_SIZE, BLOCK_SIZE);

}

initialize();
drawField();
drawTetro();

// display the field
function drawField()
{
    con.clearRect(0,0,SCREEN_W,SCREEN_H);
    for(let y=0; y<FIELD_ROW; y++)
    {
        for(let x=0; x<FIELD_COL; x++)
        {
            if( field[y][x])
            {
                drawBlock(x,y);
            }


        }
    }
}

// display a Tetromino
function drawTetro()
{
    //con.clearRect(0,0,SCREEN_W,SCREEN_H);
    for(let y=0; y<TETRO_SIZE; y++)
    {
        for(let x=0; x<TETRO_SIZE; x++)
        {
            if( tetro[y][x])
            {
                drawBlock(tetro_x+x,tetro_y+ y);
            }


        }
    }
}

// check if it hits or not
function checkMove( mx, my)
{
    for(let y=0; y<TETRO_SIZE; y++)
    {
        for(let x=0; x<TETRO_SIZE; x++)
        {
            let nx = tetro_x + mx + x;
            let ny = tetro_y + my + y;
            if( tetro[y][x] )
            {
                if( field[ny][nx] || 
                    ny < 0          || nx<0 || 
                    ny >= FIELD_ROW || nx >= FIELD_COL)
                    {
                        return false;
                    }
            }
        }
    }
    return true;
}


// when a key is pressed
document.onkeydown = function(e)
{
    switch(e.key)
    {
        case "ArrowLeft": //left
            if( checkMove(-1,0))tetro_x--;
            break;
        case "ArrowUp": //up
        if( checkMove(0,-1))tetro_y--;
            break;
        case "ArrowRight": //right
        if( checkMove(+1,0))tetro_x++;
            break;
        case "ArrowDown": //down
        if( checkMove(0,+1))tetro_y++;
            break;
        case " ": //space
        //document.getElementById("test").tex
        alert("test");
            break;

    }
    drawField();
    drawTetro();
}