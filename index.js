const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2
class sprite {
    constructor({position, velocity}){
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 50, this.height);
    }

    update(){
        this.draw()
        
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        }else{
            this.velocity.y += gravity;
        }
    }

}

const Player = new sprite({
   position:{
    x:0,
    y:0
   },
   velocity:{
    x:0,
    y:10
   }
})



const Enemy = new sprite({
    position:{
     x:400,
     y:100
    },
    velocity:{
     x:0,
     y:10
    }
 })



console.log(Player);

const keys = {
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    w:{
        pressed: false
    },
    /*ArrowRight:{
        pressed: false
    },
    ArrowLeft:{
        pressed: false
    },
    ArrowUp:{
        pressed: false
    }
    */


}

let lastKey

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0,0,canvas.width, canvas.height)
    Player.update()
    Enemy.update()

    Player.velocity.x = 0
    
    if(keys.a.pressed && lastKey === 'a'){
        Player.velocity.x = -1
    }else if(keys.d.pressed && lastKey === 'd'){
        Player.velocity.x = 1
    }

    /*
    Enemy.velocity.x = 0
    if(keys.ArrowLeft.pressed && lastKey === 'ArrowLeft'){
        Enemy.velocity.x = -1
    }else if(keys.ArrowRight.pressed && lastKey === 'ArrowRight'){
        Enemy.velocity.x = 1
    }
    */
}

animate();

//movimentação
window.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch(event.key){
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
        break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
        break
        case 'w':
            Player.velocity.y = -10
            lastKey = 'w'
        break
        /*
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            lastKey = 'ArrowRight'
        break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            lastKey = 'ArrowLeft'
        break
        case 'ArrowUp':
            Enemy.velocity.y = -10
            lastKey = 'ArrowUp'
        break
        */
    }
    console.log(event.key);
})

window.addEventListener('keyup', (event) => {
    console.log(event.key)
    switch(event.key){
        case 'd':
            keys.d.pressed = false
        break

        case 'a':
            keys.a.pressed = false
        break

        case 'w':
            keys.w.pressed = false
        break
        /*
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            
        break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            
        break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            
        break
        */
    }
    console.log(event.key);
})
//43 minutos e 55 segundos


