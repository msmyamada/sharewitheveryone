const GAME_SPEED = 500; //1 sec
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

const TETRO_COLORS = [
    "#000",      //0 empty
    "#6CF",      //1 aqua
    "#F92",      //2 orage
    "#66F",      //3 blue
    "#C5C",      //4 purple
    "#FD2",      //5 yellow
    "#F44",      //6 red
    "#6B6",      //7 green
];

const TETRO_TYPES = [
    [], // empty
    [                   //1. I
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    [                   //2. L
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],

    [                   //3. J
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],

    [                   //4. T
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ],

    [                   //5. O
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],

    [                   //6. Z
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],

    [                   //7. S
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]
    ]

];

const START_X = FIELD_COL /2 - TETRO_SIZE/2;
const START_Y = 0;

let score = 0;
let gameover = false;
let tetro;
let tetro_x = START_X;
let tetro_y = START_Y;
let field = [];
tetro_mytype = Math.floor(Math.random()*(TETRO_TYPES.length-1) )+1 ;
tetro = TETRO_TYPES[tetro_mytype];

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
    //field[5][8] =1;
}

function drawBlock(x,y,c)
{
    let px = x * BLOCK_SIZE;
    let py = y * BLOCK_SIZE;
    
    con.fillStyle = TETRO_COLORS[c];
    con.fillRect(px,py,BLOCK_SIZE, BLOCK_SIZE);
    con.strokeStyle = "black";
    con.strokeRect(px,py,BLOCK_SIZE, BLOCK_SIZE);

}


initialize();
drawField();
drawTetro();
setInterval( dropTetro, GAME_SPEED);  // call dropTetro per 1sec

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
                drawBlock(x,y, field[y][x]);
            }


        }
    }

    let score_str = "Score ";
    score_str = score_str.concat(score);

    con.strokeText(score_str, 0,10 );

    if(gameover==true) 
    {
        let over_str = "Game Over ";
        over_str = over_str.concat(score);
        alert(over_str);
        let str = "GAME OVER";
        con.font = "40px 'MS ゴシック'";
        let w = con.measureText(s).width;
        let x = SCREEN_W - w/2;
        let y = SCREEN_H - 20;
        con.lineWidth = 4;
        con.strokeText(str, x, y );
        con.fillStyle = "white";
        con.fillText(s,x,y);
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
                drawBlock(tetro_x+x,tetro_y+ y, tetro_mytype);
            }


        }
    }
}

// check if it hits or not
function checkMove( mx, my, newtetro)
{
    if( newtetro == undefined) newtetro = tetro;

    for(let y=0; y<TETRO_SIZE; y++)
    {
        for(let x=0; x<TETRO_SIZE; x++)
        {
            if( newtetro[y][x] )
            {
                let nx = tetro_x + mx + x;
                let ny = tetro_y + my + y;
                if( ny < 0          || nx<0 || 
                    ny >= FIELD_ROW || nx >= FIELD_COL
                    || field[ny][nx])
                    {
                        return false;
                    }
            }
        }
    }
    return true;
}

// when space is hit, totate the tetoro
function rotate()
{
    let newtetro = [];
    for(let y=0; y<TETRO_SIZE; y++)
    {
        newtetro[y] = [];
        for(let x=0; x<TETRO_SIZE; x++)
        {
            newtetro[y][x] = tetro[TETRO_SIZE- x - 1][y];
        }
    }

    return newtetro;


}
// when a key is pressed
document.onkeydown = function(e)
{
    if(gameover==true) return;

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
            let newtetro = rotate();
            if(checkMove(0,0, newtetro)) tetro = newtetro;
            break;

    }
    drawField();
    drawTetro();
}

// fix the Tetro
function fixTetro()
{
    for(let y=0; y<TETRO_SIZE; y++)
    {
        for(let x=0; x<TETRO_SIZE; x++)
        {
            if( tetro[y][x])
            {
                field[tetro_y + y][tetro_x + x] = tetro_mytype; 
            }
        }
    }

}


// make sure if line is done
function checkLine()
{
    let linec=0;
    for(let y=0; y<FIELD_ROW; y++)
    {
        let lineflag = true;    //if true, the line is completed
        for(let x=0; x<FIELD_COL; x++)
        {
            if( !field[y][x] )
            {
                lineflag = false;
                break;
            }
        }
        

        if(lineflag)
        {
            score = score + 10;
            linec++;
            for(let ny = y; ny>0; ny--)
            {
                for(let nx = 0; nx<FIELD_COL; nx++)
                {
                    field[ny][nx] = field[ny-1][nx];
                }
            }

        }
    }

}
//drop a tetro automatically
function dropTetro()
{
    if(gameover==true) return;

    if( checkMove(0,+1))
        tetro_y++;
    else  
    {
        fixTetro();
        checkLine();
        tetro_mytype = Math.floor(Math.random()*(TETRO_TYPES.length-1) )+1 ;
        tetro = TETRO_TYPES[tetro_mytype];

        tetro_x = START_X;
        tetro_y = START_Y;

        if(!checkMove(0,0) )
        {
            gameover= true;
        }

    } 
    drawField();
    drawTetro();
}