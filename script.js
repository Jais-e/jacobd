function fadeIn(el, time) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

var el = document.getElementById("intro-vid");
fadeIn(el, 2500);



'use strict';
/**
* file: isVideoVisibleOrNot.html
* purpose: Er min video synlig nu?
**/

// scroll-eventlistener
window.addEventListener("scroll", function() {
console.log('scroll ...'); // test

// hvis erJegHer er synlig, så ...
if (elFllVsbl(ch3)) {
console.log(elFllVsbl(ch3)); // test

if (!(myVideo2.curentTime > 0)) {
myVideo2.load(); // load the video
myVideo2.play(); // play audio
}
} else {
console.log(elFllVsbl(ch3)); // test
myVideo2.pause();
myVideo2.currentTime = 0; // rewind the sound
}

})

// funktionen tester om videoen er synlig
// og returnerer true eller false
function elFllVsbl(el) {
return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}




//Change button image and play-stop sounds
var image_tracker1 = '2';

function sound1()
{
  var image = document.getElementById('knap1');
if(image_tracker1=='1'){
image.src='img/knap1-off.png';
image_tracker1='2';
var sound = document.getElementById("audio1");
sound.pause();
sound.currentTime = 0;
}
else{
image.src='img/knap1-on.png';
image_tracker1='1';
var sound = document.getElementById("audio1");
sound.play();
}

}

var image_tracker2 = '2';

function sound2()
{
  var image = document.getElementById('knap2');
if(image_tracker2=='1'){
image.src='img/knap2-off.png';
image_tracker2='2';
var sound = document.getElementById("audio2");
sound.pause();
sound.currentTime = 0;
}
else{
image.src='img/knap2-on.png';
image_tracker2='1';
var sound = document.getElementById("audio2");
sound.play();
}

}

var image_tracker3 = '2';

function sound3()
{
  var image = document.getElementById('knap3');
if(image_tracker3=='1'){
image.src='img/knap3-off.png';
image_tracker3='2';
var sound = document.getElementById("audio3");
sound.pause();
sound.currentTime = 0;
}
else{
image.src='img/knap3-on.png';
image_tracker3='1';
var sound = document.getElementById("audio3");
sound.play();
}

}
var image_tracker4 = '2';
function sound4()
{
  var image = document.getElementById('knap4');
if(image_tracker4=='1'){
image.src='img/knap4-off.png';
image_tracker4='2';
var sound = document.getElementById("audio4");
sound.pause();
sound.currentTime = 0;
}
else{
image.src='img/knap4-on.png';
image_tracker4='1';
var sound = document.getElementById("audio4");
sound.play();
}

}

var image_tracker5 = '2';
function sound5()
{
  var image = document.getElementById('knap5');
if(image_tracker5=='1'){
image.src='img/sax.png';
image.style.transform='scale(1,1)';
image.style.filter='drop-shadow(0px 0px 0px )'
image_tracker5='2';
var sound = document.getElementById("audio5");
sound.pause();
sound.currentTime = 0;
}
else{
image.src='img/sax2.png';
image.style.transform='scale(1.2,1.2)';
image.style.filter='drop-shadow(10px 10px 10px black)'
image_tracker5='1';
var sound = document.getElementById("audio5");
sound.play();
}

}

var image_tracker6 = '2';
function sound6()
{
  var image = document.getElementById('knap6');
if(image_tracker6=='1'){
image.src='img/sax.png';
image.style.transform='scale(1,1)';
image.style.filter='drop-shadow(0px 0px 0px )'
image_tracker6='2';
var sound = document.getElementById("audio6");
sound.pause();
sound.currentTime = 0;
}
else{
image.src='img/sax2.png';
image.style.transform='scale(1.2,1.2)';
image.style.filter='drop-shadow(10px 10px 10px black)'
image_tracker6='1';
var sound = document.getElementById("audio6");
sound.play();
}

}

var image_tracker7 = '2';
function sound7()
{
  var image = document.getElementById('knap7');
if(image_tracker7=='1'){
image.src='img/sax.png';
image.style.transform='scale(1,1)';
image.style.filter='drop-shadow(0px 0px 0px )'
image_tracker7='2';
var sound = document.getElementById("audio7");
sound.pause();
sound.currentTime = 0;
}
else{
image.src='img/sax2.png';
image.style.transform='scale(1.2,1.2)';
image.style.filter='drop-shadow(10px 10px 10px black)'
image_tracker7='1';
var sound = document.getElementById("audio7");
sound.play()

}

}
var image_tracker8 = '2';
function sound8()
{
  var image = document.getElementById('knap8');
if(image_tracker8=='1'){
image.src='img/sax.png';
image.style.transform='scale(1,1)';
image.style.filter='drop-shadow(0px 0px 0px )'
image_tracker8='2';
var sound = document.getElementById("audio8");
sound.pause();
sound.currentTime = 0;
}
else{
image.src='img/sax2.png';
image.style.transform='scale(1.2,1.2)';
image.style.filter='drop-shadow(10px 10px 10px black)'
image_tracker8='1';
var sound = document.getElementById("audio8");
sound.play()

}

}
