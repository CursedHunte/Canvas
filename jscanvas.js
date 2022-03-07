var canvas = document.getElementById('canvas'); 
var roof = canvas.getContext('2d'); 
var wall = canvas.getContext('2d');
var win = canvas.getContext('2d');
var door = canvas.getContext('2d');
var handle = canvas.getContext('2d');
roof.fillStyle = '#0ACF00';
roof.beginPath();
roof.moveTo(160,140);
roof.lineTo(360,140);
roof.lineTo(260,60);
roof.closePath();
roof.moveTo(360,140);
roof.lineTo(560,140);
roof.lineTo(460,60);
roof.closePath();
roof.fill();
wall.fillStyle = '#ff0000';
wall.fillRect(180,140,160,150);
wall.fillRect(380,140,160,150);
win.fillStyle = '#33CCCC';
win.beginPath();
win.arc(
  220,200, 25,
  0,Math.PI*2,
);
win.closePath();
win.fill();
door.fillStyle = 'brown';
door.fillRect(260,170,60,120);
door.fillStyle = 'blue';
door.fillRect(460,170,60,120);
handle.fillStyle = 'yellow';
handle.beginPath();
handle.arc(
  300,220, 10,
  0,Math.PI*2,
);
handle.closePath();
handle.fill();
