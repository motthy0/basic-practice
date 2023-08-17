let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let W = window.innerWidth;
let H = window.innerHeight;

canvas.width = W;
canvas.height = H;

let fontSize = 16;
let columns = Math.floor(W / fontSize);
let drops = [];
for(let i=0; i<columns; i++){
    drops.push(0);
}
let str = "JavaScript Hacking Effect";
function draw(){
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, W, H);
    context.fontSize = "700 " + fontSize + "px";
    context.fillStyle = "#00cc33";
    for(let i=0; i<columns; i++){
        let index = Math.floor(Math.random()*str.length);
        let x = i * fontSize;
        let y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if(y >= canvas.height && Math.random() > 0.99){
            drops[i] = 0;
        }
        drops[i]++;
    }
}
draw();
setInterval(draw, 35);