
var canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d");

var color="aqua";

ctx.beginPath();
ctx.strokeStyle=blue;
ctx.lineWidth=3;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=yellow;
ctx.lineWidth=3;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=black;
ctx.lineWidth=3;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=green;
ctx.lineWidth=3;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=red;
ctx.lineWidth=3;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){
    mouseX=e.clientX - canvas.offsetLeft;
    mouseY=e.clientY - canvas.offsetTop;

    console.log("x="+mouseX+"Y="+mouseY);
    circle(mouseX, mouseY);

}

function circle(mouseX, mouseY){
    ctx.beginPath();
    ctx.strokeStyle=blue;
    ctx.lineWidth=3;
    ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
    ctx.stroke();

    function circle(mouseX, mouseY){
        ctx.beginPath();
        ctx.strokeStyle=yellow;
        ctx.lineWidth=3;
        ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
        ctx.stroke();

function circle(mouseX, mouseY)
    ctx.beginPath();
    ctx.strokeStyle=black;
    ctx.lineWidth=3;
    ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
    ctx.stroke();

    function circle(mouseX, mouseY){
        ctx.beginPath();
        ctx.strokeStyle=cgreen;
        ctx.lineWidth=3;
        ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
        ctx.stroke();

        function circle(mouseX, mouseY){
            ctx.beginPath();
            ctx.strokeStyle=red;
            ctx.lineWidth=3;
            ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
            ctx.stroke();
}