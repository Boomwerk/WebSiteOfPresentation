let canvasbubbles = document.querySelectorAll('.bubbles');

for( let i = 0 ; i< canvasbubbles.length; i++){
    let canvas = canvasbubbles[i];


    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width-16;
    canvas.height = height/1.2;
    let ctx = canvas.getContext('2d');


    class ball{

    constructor(x, y, vx = 0, vy = 0, radius = 50){
        
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy= vy;
        this.radius = radius
    }

    animation(){
    this.x += this.vx;
    this.y += this.vy;

    }
    
    drawBubbles(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = "#F10899";
        ctx.fill();
    
    };

    collision(){

            if(this.x <= 0 + this.radius || this.x >= width-16 - this.radius){
            this.vx = -this.vx;
            }

        if(this.y <= 0 + this.radius*2 || this.y >= height/1.2 - this.radius){
            this.vy = -this.vy;
            }
        }

    collisionball(ball1, ball2, ball3, ball4, ball5, ball6){
    
        let dx = this.x - ball1.x;
        let dy = this.y - ball1.y;

        let dx2 = this.x - ball2.x;
        let dy2 = this.y - ball2.y;

        let dx3 = this.x - ball3.x;
        let dy3 = this.y - ball3.y;

        let dx4 = this.x - ball4.x;
        let dy4 = this.y - ball4.y;

        let dx5 = this.x - ball5.x;
        let dy5 = this.y - ball5.y;

        let dx6 = this.x - ball6.x;
        let dy6 = this.y - ball6.y;

        let distance = Math.sqrt(dx * dx + dy * dy);
        let distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        let distance3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
        let distance4 = Math.sqrt(dx4 * dx4 + dy4 * dy4);
        let distance5 = Math.sqrt(dx5 * dx5 + dy5 * dy5);
        let distance6 = Math.sqrt(dx6 * dx6 + dy6 * dy6);
        
        if (distance < this.radius + ball1.radius){
            this.vx = -this.vx;
            this.vy = -this.vy;
            }

        if (distance2 < this.radius + ball2.radius){
            this.vx = -this.vx;
            this.vy = -this.vy;
            }
        if (distance3 < this.radius + ball3.radius){
            this.vx = -this.vx;
            this.vy = -this.vy;
            }
        if (distance4 < this.radius + ball4.radius){
            this.vx = -this.vx;
            this.vy = -this.vy;
            }
        if (distance5 < this.radius + ball5.radius){
            this.vx = -this.vx;
            this.vy = -this.vy;
            }
        if (distance6 < this.radius + ball6.radius){
            this.vx = -this.vx;
            this.vy = -this.vy;
            }       
        }

    };




    let ball1 = new ball(100,500,1,2);
    let ball2 = new ball(600,150,1,3);
    let ball3 = new ball(1200,200,1,3);
    let ball4 = new ball(100,200,1,3);
    let ball5 = new ball(450,550,1,3);
    let ball6 = new ball(300,300,3,1);
    let ball7 = new ball(1000,500,3,1);



    function draw(){
    ctx.clearRect(0,0,width,height);
    
    ball1.drawBubbles();
    ball2.drawBubbles();
    ball3.drawBubbles();
    ball4.drawBubbles();
    ball5.drawBubbles();
    ball6.drawBubbles();
    ball7.drawBubbles();

    ball1.animation();
    ball2.animation();
    ball3.animation();
    ball4.animation();
    ball5.animation();
    ball6.animation();
    ball7.animation();

    ball1.collision();
    ball2.collision();
    ball3.collision();
    ball4.collision();
    ball5.collision();
    ball6.collision();
    ball7.collision();

    ball1.collisionball(ball2,ball3,ball4,ball5,ball6,ball7);
    ball2.collisionball(ball1,ball3,ball4,ball5,ball6,ball7);
    ball3.collisionball(ball2,ball1,ball4,ball5,ball6,ball7);
    ball4.collisionball(ball2,ball3,ball1,ball5,ball6,ball7);
    ball5.collisionball(ball2,ball3,ball4,ball1,ball6,ball7);
    ball6.collisionball(ball2,ball3,ball4,ball5,ball1,ball7);
    ball7.collisionball(ball1,ball2,ball3,ball4,ball5,ball6);

    window.requestAnimationFrame(draw);
    }


    draw();

};