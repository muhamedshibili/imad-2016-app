console.log('Loaded!');
//change the text of the main-text.div
var element = document.getElementById('main-text')
;
element.innerHTML = 'New value';

//move the image
var img= document.getElementById('madi');
var marginLeft =0;
function moveRIGHT () {
marginLeft = marginLeft + 10;
img.style.marginLeft = 'px';  
}
img.onclick = function ()  {
var    interval =setInterval(moveRight, 50);
  
};