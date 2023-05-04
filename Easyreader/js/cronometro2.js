function formatatempo(segs) {
pausado2 = false;
min = 0;
hr = 0;
/*
if hr < 10 then hr = "0"&hr
if min < 10 then min = "0"&min
if segs < 10 then segs = "0"&segs
*/
while(segs>=60) {
if (segs >=60) {
segs = segs-60;
min = min+1;
}
}

while(min>=60) {
if (min >=60) {
min = min-60;
hr = hr+1;
}
}

if (hr < 10) {hr = "0"+hr}
if (min < 10) {min = "0"+min}
if (segs < 10) {segs = "0"+segs}
fin = hr+":"+min+":"+segs
return fin;
}
var segundos = 0; //inicio do cronometro
function conta2() {
segundos++;
document.getElementById("lbtempo2").value = formatatempo(segundos);
}

function iniciar2(){
interval = setInterval("conta2();",1000);
}

function parar2(){
clearInterval(interval);
}

function zerar2(){
clearInterval(interval);
segundos = 0;
document.getElementById("lbtempo2").value = formatatempo(segundos);
}

function pausar2(){
	if(pausado2){
		iniciar2();
		pausado2 = false;
	}
	else{
		parar2();
		pausado2 = true;
	}
}

