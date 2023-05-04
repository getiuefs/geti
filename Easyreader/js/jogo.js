var mod = 0;

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 27) { //esc
        showMenu();
    } 
	else if (code === 72) { //h key
		sintetizar(palavra);
    }
	else if (code === 37 && mod === 1) { //left key
		jogar(0);
    }
	else if (code === 39 && mod === 1) { //right key
		jogar(1);
    }
	else if (code === 13) { //enter key
		jogada();
    }
	else if (code === 40) { //down key
		novoJogoMod2();
    }
	else if (code === 17) { //control key
		somOnOff();
    }
	
	
}

function fadeIn(){
	$('#divmenuinicial').fadeIn(1200);
}

function resetar(){
	indice = 0;
	acertos = 0;
	intervaloTempo = 270;
	jogadas = 15;
}

function showMenu(){
	mod = 0;
	document.getElementById('divmodulo1').style.display = "none";
	document.getElementById('divmodulo2').style.display = "none";
	document.getElementById('divestatisticas').style.display = "none";
	document.getElementById('divcomojogar').style.display = "none";
	document.getElementById('telaprincipal').style.display = "block";
	document.getElementById('divsobre').style.display = "none";
	resetar();
	zerar(1);
	zerar(2);
}

function iniciarmod1(){
	mod = 1;
	document.getElementById('divmodulo1').style.display = "block";
	document.getElementById('divmodulo2').style.display = "none";
	document.getElementById('divestatisticas').style.display = "none";
	document.getElementById('divcomojogar').style.display = "none";
	document.getElementById('telaprincipal').style.display = "none";
	document.getElementById('divsobre').style.display = "none";
	if(segundos != 0){
		zerar(1);
		iniciar(1);	
	}
	else{
		iniciar(1);
	}
}

function iniciarmod2(){
	mod - 2;
	document.getElementById('divmodulo1').style.display = "none";
	document.getElementById('divmodulo2').style.display = "block";
	document.getElementById('divestatisticas').style.display = "none";
	document.getElementById('divcomojogar').style.display = "none";	
	document.getElementById('telaprincipal').style.display = "none";
	document.getElementById('divsobre').style.display = "none";
	if(segundos != 0){
		zerar(2);
		iniciar(2);	
	}
	else{
		iniciar(2);
	}
}

function mostrarestatisticas(){
	document.getElementById('divmodulo1').style.display = "none";
	document.getElementById('divmodulo2').style.display = "none";
	document.getElementById('divcomojogar').style.display = "none";
	document.getElementById('divestatisticas').style.display = "block";
	document.getElementById('telaprincipal').style.display = "none";
	document.getElementById('divsobre').style.display = "none";
}

function comoJogar(){
	document.getElementById('divmodulo1').style.display = "none";
	document.getElementById('divmodulo2').style.display = "none";
	document.getElementById('divcomojogar').style.display = "block";
	document.getElementById('divestatisticas').style.display = "none";
	document.getElementById('telaprincipal').style.display = "none";
	document.getElementById('divsobre').style.display = "none";
}

function sobre(){
	document.getElementById('divsobre').style.display = "block";
	document.getElementById('divmodulo1').style.display = "none";
	document.getElementById('divmodulo2').style.display = "none";
	document.getElementById('divcomojogar').style.display = "none";
	document.getElementById('divestatisticas').style.display = "none";
	document.getElementById('telaprincipal').style.display = "none";
}

