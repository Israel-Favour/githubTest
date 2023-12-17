//GETTING THE ELEMENTS

var redColorTube = document.querySelector('#red-color-tube');
var greenColorTube = document.querySelector('#green-color-tube');
var blueColorTube = document.querySelector('#blue-color-tube');
var redColorFill = document.querySelector('.red-color-fill');
var greenColorFill = document.querySelector('.green-color-fill');
var blueColorFill = document.querySelector('.blue-color-fill');
var redNum = document.querySelector('#red-num');
var greenNum = document.querySelector('#green-num');
var blueNum = document.querySelector('#blue-num');


redColorTube.addEventListener('click', changeColor);
greenColorTube.addEventListener('click', changeColor);
blueColorTube.addEventListener('click', changeColor);

function fetchColors(){
   colorArray = JSON.parse(localStorage.getItem('colors'));
   redNum.textContent = colorArray[0];
   redColorFill.style.width = redNum.textContent + 'px';

   greenNum.textContent = colorArray[1];
   greenColorFill.style.width = greenNum.textContent + 'px';

   blueNum.textContent = colorArray[2];
   blueColorFill.style.width = blueNum.textContent + 'px';

   localStorage.setItem('colors', JSON.stringify(colorArray));
   document.querySelector('body').style.backgroundColor = `rgb(${redNum.textContent}, ${greenNum.textContent}, ${blueNum.textContent})`
}

function changeColor(e){

   if(JSON.parse(localStorage.getItem('colors')) === null){
      var colorArray = ['0', '0', '0'];
      localStorage.setItem('colors', JSON.stringify(colorArray));
   }

 if(this == redColorTube){
    red = e.offsetX; 
    colorArray = JSON.parse(localStorage.getItem('colors'));
    colorArray.splice(0,1, red);
    localStorage.setItem('colors', JSON.stringify(colorArray))
    redNum.textContent = colorArray[0];
    redColorFill.style.width = redNum.textContent + 'px';
 }

 if(this == greenColorTube){
    green = e.offsetX;
    colorArray = JSON.parse(localStorage.getItem('colors'));
    colorArray.splice(1,1, green);
    localStorage.setItem('colors', JSON.stringify(colorArray))
    greenNum.textContent = colorArray[1];
    greenColorFill.style.width = greenNum.textContent + 'px';
 }

 if(this == blueColorTube){
    blue = e.offsetX; 
    colorArray = JSON.parse(localStorage.getItem('colors'));
    colorArray.splice(2,1, blue);
    localStorage.setItem('colors', JSON.stringify(colorArray))
    blueNum.textContent = colorArray[2];
    blueColorFill.style.width = blueNum.textContent + 'px';
 }

 document.querySelector('body').style.backgroundColor = `rgb(${redNum.textContent}, ${greenNum.textContent}, ${blueNum.textContent})`

}