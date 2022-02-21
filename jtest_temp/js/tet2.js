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

drawTetro();

// display a Tetromino
function drawTetro()
{
    con.clearRect(0,0,SCREEN_W,SCREEN_H);
    for(let y=0; y<TETRO_SIZE; y++)
    {
        for(let x=0; x<TETRO_SIZE; x++)
        {
            if( tetro[y][x])
            {
                let px = (tetro_x + x) * BLOCK_SIZE;
                let py = (tetro_y + y) * BLOCK_SIZE;

                con.fillStyle = "red";
                con.fillRect(px,py,BLOCK_SIZE, BLOCK_SIZE);
                con.strokeStyle = "black";
                con.strokeRect(px,py,BLOCK_SIZE, BLOCK_SIZE);

            }


        }
    }
}

// when a key is pressed
document.onkeydown = function(e)
{
    switch(e.key)
    {
        case "ArrowLeft": //left
            tetro_x--;
            break;
        case "ArrowUp": //up
            tetro_y--;
            break;
        case "ArrowRight": //right
            tetro_x++;
            break;
        case "ArrowDown": //down
            tetro_y++;
            break;
        case " ": //space
        //document.getElementById("test").tex
        alert("test");
            break;

    }
    drawTetro();
}