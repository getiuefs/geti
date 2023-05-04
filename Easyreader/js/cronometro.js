function formatatempo(segs) {
		pausado = false;
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

function conta1() {
	segundos++;
	document.getElementById("lbtempo").value = formatatempo(segundos);
}

function conta2() {
	segundos++;
	document.getElementById("lbtempo2").value = formatatempo(segundos);
}

function iniciar(opcao){
	if(opcao == 1)	
		interval = setInterval("conta1();",1000);
	else
		interval = setInterval("conta2();",1000);
}

function parar(){
	clearInterval(interval);
}

function zerar(opcao){
	clearInterval(interval);
	segundos = 0;
	if(opcao == 1)
		document.getElementById("lbtempo").value = formatatempo(segundos);
	else
		document.getElementById("lbtempo2").value = formatatempo(segundos);
}

function pausar(opcao){
	if(pausado){
		iniciar(opcao);
		pausado = false;
	}
	else{
		parar();
		pausado = true;
	}
}

