
// js


//e1 on/off
function bulbOn(){
	document.getElementById('img').src="images/on.gif";
}

function bulbOff(){
	document.getElementById('img').src="images/off.gif";
}

//e2 change

function textchange(){
	document.getElementById('tc').innerHTML=" dolor, ipsum, Lorem";
}

//e3 show date

function showDate(){
	document.getElementById('sd').innerHTML=Date();
}

//e4 txt cng

function txtCng(){
	document.getElementById('nm').innerHTML="Hasibul Hoque"
}

//e5 happy/sad

function happy(){
	document.getElementById('imoji').src="images/hp.jpg";
}
function sad(){
	document.getElementById('imoji').src="images/sd.jpg";
}

//e6 click me

function clickMe(){
	document.getElementById("Font_change").style.fontSize='35px';
}

//e7 show border

function showBorder(){
	document.getElementById('sb').style.border="2px solid #000000";
}

//e8 text show/hide 

function textShow(){
	document.getElementById('text_sh').style.display="block";
}
function textHide(){
	document.getElementById('text_sh').style.display="none";
}

// e9 hide 

function hide(){
	document.getElementById('hide').style.display="none";
}

// e10 hide 

function show(){
	document.getElementById('show').style.display="block";
}

// e11 show result

var number1 = 8;
var number2 = 6;
var number3 = 9;

var result = number1 + number2 + number3;

function sResult(){
	document.getElementById('result').innerHTML=result;
}

// ex12 plusminus

var	number1 = 8;
var number2 = 7;
var number3 = 9;

var Result = number1 + number2 - number3;

function showResult(){
	document.getElementById('s_result').innerHTML=Result;
}

// ex13 multication

var	number1 = 80;
var number2 = 90;

var Result1 = number1 * number2;

function multication(){
	document.getElementById('multification').innerHTML=Result1;
}

// ex14 devision

var	number1 =5000;
var	number2 =100;

var Result2 = number1 / number2

function devision(){
	document.getElementById('devision').innerHTML=Result2;
}

// ex15 javatext

function javaScript(){
	document.getElementById('mt').innerHTML="My First Text"
}

// ex16 sum

let number5, number4;

number5 = 70;
number4 = 80;

number4 -= number5;

function sum(){
	document.getElementById('sr').innerHTML=number4;
}

// ex17 cname

function cName(){
	document.getElementsByClassName('h4')[2].innerHTML="80";
}

// ex18 length

function lgt(){
	var data = document.getElementsByTagName('p');
	alert(data.length);
}

// e19error

var x,y,z;

var x = 10;
var y = 40;

var z = x+y

function SUM(){
	document.getElementById('SUM').innerHTML=z;
}

// ex20 var

let a;

a = 24;

function sum1(){
	document.getElementById("sum1").innerHTML=a;
}

// ex21 operator

function artm(){
	document.getElementById('artm').innerHTML=(90-20)/10;
}

// ex22 compute

var b;

b = 30;

function compute(){
	document.getElementById('compute').innerHTML=b*9;
}

// ex23 name add

function showName1(){
	document.getElementById('showName1').innerHTML="Hasibul"+" "+"Hoque"
}