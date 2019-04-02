var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c= canvas.getContext("2d");
c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(400,100,100,100);
c.fillStyle = 'rgba(0,255,0,0.5)';
c.fillRect(300,300,100,100);
c.fillStyle="rgba(255,255,0,0.5)";
c.fillRect(200,200,100,100);
/*fillRect(*//*x,y,height,width)*/
console.log(canvas);

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.lineTo(50,300);
/*c.lineTo(400,300);
*/
c.strokeStyle="#fa34a3";
c.stroke();

//Arc Create
/*c.arc(x,y,radius Int,startAngle:Float, endAngle: Float,drawCounterClockwise:Bool(false))
*/c.arc(300,300,30,0,Math.PI*2,false);
c.stroke();