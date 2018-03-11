var select = document.querySelector('select');
var html = document.querySelector('html');
var div = document.querySelector('div');
var harea = document.querySelector('.header');
var farea = document.querySelector('.footer');
document.body.style.padding = '10px';

function update(bgColor, textColor, heading,img,img2) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
  div.style.color = heading;
  harea.style.background = img;
  farea.style.background = img2;
  //document.getElementById("myDiv").style.padding = "70px 0px 70px 40px";
}

select.onchange = function() 
{
  if( select.value === 'black' )
  	update('black','white','black','url(header-image.jpg)','url(header-image.jpg)'); 
  else
  	update('white','black','black','url(header-image-02.jpg)','url(header-image-02.jpg)');
}