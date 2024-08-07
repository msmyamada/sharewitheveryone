# 
import pgzrun
import random
import time
WIDTH = 700*2
HEIGHT = 400*2

player = Actor('player', topleft=(0,200))  # 140x100
playerR = Actor('player_r', topleft=(0,200))  # 140x100
playerL = Actor('player_l', topleft=(0,200))  # 140x100
playerJ1 = Actor('player_j1', topleft=(0,200))  # 140x100
playerJ2 = Actor('player_j2', topleft=(0,200))  # 140x100
box =  Actor('box', topleft=(70,0))
kumo = Actor('cloud',topleft=(0,0))
tree = Actor('tree1',topleft=(0,0))
tire  = Actor('tire_l', topleft=(0,200))  # 100x100
tireR  = Actor('tire_r', topleft=(0,200))  # 100x100
tireL  = Actor('tire_l', topleft=(0,200))  # 100x100
bakuhatsu = Actor('bakuhatsu', topleft=(0,200))  # 189x160
poteto  = Actor('poteto', topleft=(0,200))  # 75 x 100
player_big  = Actor('player_big', topleft=(0,200))  # 180 * 131
player_down  = Actor('player_down', topleft=(1000,500))  # 400 x 201
player_up  = Actor('player_up', topleft=(1000,500))  # 200 x 180
game_exit = Actor('exit', topleft=(600,800-140))  # 70*70

box_x = 0
jimen_y = 400*2-70 
kumo_xy = [[10,10],[600,300],[1100,200]]
tree_xy = [[210,10],[800,300],[1200,200]]
tire_xy = [[2250,0],[2850,0],[3300,0]]
poteto_xy = (2000, 600)
my_timing = 0
my_timing_MAX = 6
my_player_SW = 0  #0 is L  1 is R
tire_timing = 0
tire_timing_MAX = 6
tire_SW = 0  #0 is L  1 is R
jump_SW = 0 #  0 is not jumping  1 is jumping now
jump_y = jimen_y - 100
jump_IsUp = 1  # 0 is down  1 is up
opening_SW = 1   # 0 is gaming  1 is opening screen
bakuhatsu_SW = 0   # 0 is not hit   1 is hit
getpoteto_SW = 0    # 0 is not getting a poteto, 1 is getting it
score = 0
ending_SW = 0
player_cnt = 3
game_exit_start = 4000
game_exit_x = game_exit_start

def draw():
    global box_x
    global jimen_y
    global kumo_xy
    global my_player_SW
    global my_timing
    global my_timing_MAX
    global tire_SW
    global tire_timing
    global tire_timing_MAX
    global jump_SW 
    global jump_y 
    global jump_IsUp
    global player
    global bakuhatsu_SW
    global tire_xy
    global poteto_xy
    global getpoteto_SW
    global score
    global ending_SW
    global player_cnt
    global game_exit_x
    screen.fill((50,50,250))

    if opening_SW == 1 :
        screen.draw.text("Press S key to start!", (500, 200), owidth=1.5, ocolor='white', color ='blue', fontsize = 64)
        return

    if ending_SW == 1 :
        screen.draw.text("You are dead! Press S key to start again!", (200, 200), owidth=1.5, ocolor='white', color ='red', fontsize = 64)
        screen.draw.text("Your score is :  " + str(score), (200, 300), owidth=1.5, ocolor='white', color ='orange', fontsize = 64)
        player_down.draw()
        tire_xy = [[2250,0],[2850,0],[3300,0]]
        poteto_xy = (2000, 600)
        game_exit_x = game_exit_start
        #score = 0
        return

    if ending_SW == 2 :
        screen.draw.text("You got the goal! Press S key to start again!", (200, 200), owidth=1.5, ocolor='white', color ='green', fontsize = 64)
        screen.draw.text("Your score is :  " + str(score), (200, 300), owidth=1.5, ocolor='white', color ='orange', fontsize = 64)
        player_up.draw()
        tire_xy = [[2250,0],[2850,0],[3300,0]]
        poteto_xy = (2000, 600)
        game_exit_x = game_exit_start
        #score = 0
        return

    #draw boxes
    for temp_box_x in range(box_x, 70*20, 70):
        box.topleft = (temp_box_x, jimen_y)
        box.draw()

    # draw clouds 
    for kumo_no in range(0,3):
        temp_cloud_x = kumo_xy[kumo_no][0]
        temp_cloud_y = kumo_xy[kumo_no][1]
        kumo.topleft = (temp_cloud_x, temp_cloud_y)
        kumo.draw()
        temp_cloud_x = temp_cloud_x -1
        if temp_cloud_x + 200 < 0 :
            temp_cloud_y = random.randint(1, 300)
            temp_cloud_x = 700*2
        kumo_xy[kumo_no][0] = temp_cloud_x
        kumo_xy[kumo_no][1] = temp_cloud_y

    # draw trees 
    for tree_no in range(0,3):
        temp_tree_x = tree_xy[tree_no][0]
        temp_tree_y = jimen_y-200
        tree.topleft = (temp_tree_x, temp_tree_y)
        tree.draw()

    #draw game_exit
    game_exit.topleft = (game_exit_x, jimen_y-70)
    game_exit.draw()
    # evalulate if it's hit
    rect = Rect(player.topleft,(120,80))
    if game_exit.colliderect(rect) :
        ending_SW = 2
        score = score + 100

    # draw tires 
    for tire_no in range(0,3):
        temp_tire_x = tire_xy[tire_no][0]
        temp_tire_y = jimen_y-100
        temp_tire_x = temp_tire_x -5    # speed control
        if temp_tire_x + 100 < 0 :
            temp_tire_y = jimen_y - 100
            temp_tire_x = random.randint( 700*2 , 700*2*10 )
        tire_xy[tire_no][0] = temp_tire_x
        tire_xy[tire_no][1] = temp_tire_y

        if tire_SW == 0 :
            tire = tireL
        else :
            tire = tireR
        tire.topleft = (temp_tire_x, temp_tire_y)
        tire.draw()
        # evalulate if it's hit
        rect = Rect(player.topleft,(120,80))
        if tire.colliderect(rect) and bakuhatsu_SW==0:
            bakuhatsu_SW = 1
            tire_xy[tire_no][0] = -101
            #score = score - 10
            player_cnt -= 1
            #time.sleep(2)

    tire_timing = tire_timing + 1
    if tire_timing > tire_timing_MAX :
        tire_timing = 0
        if tire_SW == 0 :
            tire_SW = 1
        else :
            tire_SW = 0

    #draw a poteto
    poteto_xy = (poteto_xy[0] - 2, poteto_xy[1])
    if poteto_xy[0] + 75 < 0 :
        poteto_xy = (random.randint(1400, 2000), random.randint(300,630) )
    if poteto_xy[1] > 400 and random.randint(0,100) > 50 :
        poteto_xy = ( poteto_xy[0], poteto_xy[1] - 2)
    if poteto_xy[1] < 630 and random.randint(0,100) > 50 :
        poteto_xy = ( poteto_xy[0], poteto_xy[1] + 2)
    poteto.topleft = (poteto_xy[0], poteto_xy[1])
    poteto.draw()
    # evalulate if it's hit
    rect = Rect(player.topleft,(120,80))
    if poteto.colliderect(rect) and getpoteto_SW==0:
        getpoteto_SW = 1
        poteto_xy = (-101, 0)
        score = score + 10


    # draw a dog
    if jump_SW == 0 :  #walking mode
        if my_player_SW == 0 :
            player = playerL
        else :
            player = playerR
        player.topleft= (70,jimen_y-100)
    
    else :              #jumping mode
        kasoku = [10, 5 , 3 , 1]
        if jump_y <= jimen_y - 100 and jump_y > jimen_y - 170 and jump_IsUp == 1 :
            jump_y -= kasoku[0]
        if jump_y <= jimen_y - 170 and jump_y > jimen_y - 200 and jump_IsUp == 1 :
            jump_y -= kasoku[1]
        if jump_y <= jimen_y - 200 and jump_y > jimen_y - 220 and jump_IsUp == 1 :
            jump_y -= kasoku[2]
        if jump_y <= jimen_y - 220 and jump_y > jimen_y - 240 and jump_IsUp == 1 :
            jump_y -= kasoku[3]
        if jump_y <= jimen_y - 240 and jump_IsUp == 1 :
            jump_IsUp = 0
        
        if jump_y < jimen_y - 100 and jump_y > jimen_y - 170 and jump_IsUp == 0 :
            jump_y += kasoku[0]
        if jump_y <= jimen_y - 170 and jump_y > jimen_y - 200 and jump_IsUp == 0 :
            jump_y += kasoku[1]
        if jump_y <= jimen_y - 200 and jump_y > jimen_y - 220 and jump_IsUp == 0 :
            jump_y += kasoku[2]
        if jump_y <= jimen_y - 220 and jump_IsUp == 0 :
            jump_y += kasoku[3]
        if jump_y >= jimen_y - 100 and jump_IsUp == 0 :
            jump_SW = 0
            jump_IsUp = 1
            jump_y = jimen_y - 100
        box_x = box_x - 5
        game_exit_x = game_exit_x - 5

        if box_x < -70 :
            box_x =0
        if jump_IsUp == 1 :
            player = playerJ1
        else :
            player = playerJ2
        player.topleft= (70, jump_y)
    if bakuhatsu_SW == 0 and getpoteto_SW ==0 :
        player.draw()

    # draw bakuhatsu
    if bakuhatsu_SW > 0 :
        bakuhatsu.topleft = (70, jimen_y-160)
        bakuhatsu.draw()
        bakuhatsu_SW += 1
        if bakuhatsu_SW > 20 :
            bakuhatsu_SW = 0
        #return

    # draw getpoteto
    if getpoteto_SW > 0 :
        player_big.topleft = (70, jump_y-31) # jimen_y-131)
        player_big.draw()
        getpoteto_SW += 1
        if getpoteto_SW > 20 :
            getpoteto_SW = 0
        #return


    #score
    screen.draw.text("Score: " + str(score), (500, 10), owidth=0.5, ocolor='white', color ='yellow', fontsize = 32)
    if player_cnt <= 0 :
        ending_SW = 1
    screen.draw.text("Life: " + str(player_cnt), (500, 40), owidth=0.5, ocolor='white', color ='red', fontsize = 32)





def update():
    global box_x
    global running
    global my_player_SW
    global my_timing
    global my_timing_MAX
    global tire_SW
    global tire_timing
    global tire_timing_MAX
    global jump_SW
    global opening_SW
    global poteto_xy
    global ending_SW
    global player_cnt
    global score
    global game_exit_x
    global game_exit_start

    if opening_SW == 1 or ending_SW==1 or ending_SW==2:
        if keyboard.s == True:
            opening_SW = 0
            ending_SW = 0
            player_cnt = 3
            score=0
            screen.clear()
            screen.fill((50,50,250))
            return
        else :
            return

    if keyboard.right == True and jump_SW==0:
        # box
        box_x = box_x - 5
        if box_x < -70 :
            box_x =0
        my_timing = my_timing + 1
        if my_timing > my_timing_MAX :
            my_timing = 0
            if my_player_SW == 0 :
                my_player_SW = 1
            else :
                my_player_SW = 0

        # tree
        for tree_no in range(0,3):
            temp_tree_x = tree_xy[tree_no][0]
            temp_tree_y = jimen_y-200
            temp_tree_x = temp_tree_x -5
            if temp_tree_x + 200 < 0 :
                temp_tree_y = jimen_y - 200
                temp_tree_x = 700*2
            tree_xy[tree_no][0] = temp_tree_x
            tree_xy[tree_no][1] = temp_tree_y

        #tires
        for tire_no in range(0,3):
            temp_tire_x = tire_xy[tire_no][0]
            temp_tire_y = jimen_y-100
            temp_tire_x = temp_tire_x -5    # speed control
            if temp_tire_x + 100 < 0 :
                temp_tire_y = jimen_y - 100
                temp_tire_x = 700*2
            tire_xy[tire_no][0] = temp_tire_x
            tire_xy[tire_no][1] = temp_tire_y

        #poteto
        poteto_xy = ( poteto_xy[0] - 5, poteto_xy[1])

        #exit
        game_exit_x = game_exit_x - 5
        if game_exit_x < -70 :
            game_exit_x = game_exit_start


    if keyboard.space == True and jump_SW == 0 and opening_SW == 0 :
        jump_SW =1







pgzrun.go()