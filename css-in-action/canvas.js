var canvas= document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
c.fillStyle ='rgba(255,0,0,0.5)'
c.fillRect(100,200,100,100);
c.fillStyle ='rgba(255,0,0,0.2)'
c.fillRect(200,300,100,100);
c.fillStyle ='rgba(255,0,0,0.3)'
c.fillRect(300,400,100,100);

c.beginPath();
c.moveTo(0,0);
c.lineTo(200,100);
c.strokeStyle ="#fa34a3";
c.stroke();
console.log("canvas");
c.beginPath();
c.arc(300,300,30,0,Math.PI*2,false);
c.strokeStyle ="blue";
c.stroke();