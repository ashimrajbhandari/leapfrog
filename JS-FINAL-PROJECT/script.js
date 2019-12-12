
var canvas = document.querySelector('canvas');
var matcheswon = [7,6,5,5,4,4,4,4,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
canvas.width = 950 ;
canvas.height= matcheswon.length * 15 + 10  ;

var c = canvas.getContext('2d');
var x = 0;
var y = 10;
var barheight = 10;
for(var i = 0; i < matcheswon.length; i++){
  c.fillStyle = '#1e6022';
  c.fillRect(x,y,matcheswon[i] * 100,barheight );
  y += 15;
}
