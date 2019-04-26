const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const colorArray = [
    "#F3F2F0",
    "#01A58D",
    "#FCC37C",
    "#F7715D",
    "#594A46"
];
// const colorArray = [
//     "#A2C0C0",
//     "#DDD1BB",
//     "#A69C92",
//     "#E2DFD0",
//     "#BEC2C1"
// ];
const colorLength = colorArray.length;
const maxR = 45;

let mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("resize",() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

class Circle {
    constructor(x, y, dx, dy, r){
        this.x = x; 
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.minR = r;
        this.color = colorArray[Math.floor(Math.random() * colorLength)];    
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        //左右側偵測並反彈
        if (this.x + this.r > window.innerWidth || this.x - this.r < 0) {
            this.dx *= -1;
        }
        //上下側偵測並反彈
        if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
            this.dy *= -1;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        //interactivily
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.r < maxR) {
                this.r += 0.5;
            }
        }else if(this.r > this.minR){
            this.r -=0.5;
        }
        this.draw();
    }
}

let circleArray = [];
function init(){
    circleArray = [];
    let unit;
    unit = window.innerWidth <=900? 100 : 400;
    
    //make many random circle
    for (let i = 0; i < unit; i++) {
        let r = Math.random() * 3 + 1;
        let x = Math.random() * (window.innerWidth - 2*r) + r;
        let y = Math.random() * (window.innerHeight - 2*r) + r;
        let dx = (Math.random() - 0.5)/2;
        let dy = (Math.random() - 0.5)/2;
        circleArray.push(new Circle(x, y, dx, dy, r));
    }
}

function animate(){
    let rect = canvas.getBoundingClientRect();
    // c.fillStyle = "#233142";
    c.fillStyle = "#f7f7f7";
    c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    
    
    if(rect.bottom<= -60){
        cancelAnimationFrame(requestAnimationFrame(animate));
        setTimeout(animate,1500);
    }else{
        circleArray.forEach( circle => circle.update());
        requestAnimationFrame(animate);
    }
}
init();
animate();

