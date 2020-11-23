import { Snake_Speed,update as updateSnake,draw as drawSnake,getSnakeHead,snakeIntersection} from './snake.js'
import { outsideGrid } from './grid.js'
import { update as updateFood,draw as drawFood } from './food.js'


let lastRenderTime=0;
let gameover=false;
const gameBoard=document.getElementById('game-board')

function main(currentTime){
    
    if(gameover){
       if(confirm('You lost. Press ok to restart')){
           window.location='/'
       }
       return
    }
    
    window.requestAnimationFrame(main)

    const secodsSinceLastRender=(currentTime-lastRenderTime)/1000

    if(secodsSinceLastRender< 1/Snake_Speed) return

    
    console.log('Render')
    lastRenderTime=currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)


function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML=''
   drawSnake(gameBoard)
   drawFood(gameBoard)
}

function checkDeath(){
    gameover= outsideGrid(getSnakeHead()) || snakeIntersection()
}