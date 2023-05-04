var operacoes;
var expressoes = [];
var exparmazenadas = [];
var expressao;
var resultados = [];
var jogadasrestantes = 12;
var resultado;
var verificavitoria = 8;
var bonusjogadas = 0;
var expressaoigual;

function geraExpressoes(nivel){
responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
console.log("aq");

	if(nivel == 1){
		operacoes = ["+", "-"];
	}
	else if(nivel == 2){
		operacoes = ["+", "-", "*"];
	}
	else{
		operacoes = ["+", "-", "*", "/"];
	}
	
	for(i = 0; i<9; i++){
	
	//bloco1
		var n1 = Math.floor((Math.random() * 10) + 1);
		var o1 = operacoes[Math.floor(Math.random() * operacoes.length) + 0 ];	
		var n2 = Math.floor((Math.random() * 10) + 1);
		
		if(o1 == "/"){
			while(n1 % n2 != 0){
				n2 = Math.floor((Math.random() * 10) + 1);
			}
		}
		
		expressao = n1+o1+n2;
		
	//bloco2
	
		var o2 = operacoes[Math.floor(Math.random() * operacoes.length) + 0 ];	
		var n3 = Math.floor((Math.random() * 10) + 1);
		
		if(o2 == "/"){
			while(n2 % n3 != 0){
				n3 = Math.floor((Math.random() * 10) + 1);
			}
		}
		
		if(o2 == "/" && o1 == "/"){
			while(math.eval(expressao) %n3 != 0){
				n3 = Math.floor((Math.random() * 10) + 1);
			}
		}
		
		expressao = n1+o1+n2+o2+n3;
		
	//bloco3
		
		var o3 = operacoes[Math.floor(Math.random() * operacoes.length) + 0 ];
		var n4 = Math.floor((Math.random() * 10) + 1);
		
		if(o3 == "/"){
			while(n3 % n4 != 0){
				n4 = Math.floor((Math.random() * 10) + 1);
			}
		}
		
		if(o3 == "/" && o2 == "/"){
			var aux = n2 / n3;
			while(aux % n4 != 0){
				n4 = Math.floor((Math.random() * 10) + 1);
			}								
		}
		
		if(o3 == "/" && o2 == "/" && o1 == "/"){
			while(math.eval(expressao) %n4 != 0){
				n4 = Math.floor((Math.random() * 10) + 1);
			}
		}
		
		expressao = n1+o1+n2+o2+n3+o3+n4;	
		
		expressoes[i] = expressao;
		resultados[i] = math.eval(expressao);
	}
	
	jogadasrestantes = 12;
	verificavitoria = 0;
	bonusjogadas = 0;
	expressaoigual = 0;
	
}


function preencherTabuleiro(){
	console.log("aqpt");
	for(i = 0; i<9; i++){
		console.log(expressoes[i]);
	}
	
		console.log(resultados[0]+" "+resultados[1]+"  "+resultados[2]);	
		console.log(resultados[3]+" "+resultados[4]+"  "+resultados[5]);	
		console.log(resultados[6]+" "+resultados[7]+"  "+resultados[8]);	 
		
	document.getElementById("b1").value = expressoes[0];
	document.getElementById("b2").value = expressoes[1];
	document.getElementById("b3").value = expressoes[2];
	document.getElementById("b4").value = expressoes[3];
	document.getElementById("b5").value = expressoes[4];
	document.getElementById("b6").value = expressoes[5];
	document.getElementById("b7").value = expressoes[6];
	document.getElementById("b8").value = expressoes[7];
	document.getElementById("b9").value = expressoes[8];
	
	document.getElementById("b1").name = resultados[0];
	document.getElementById("b2").name = resultados[1];
	document.getElementById("b3").name = resultados[2];
	document.getElementById("b4").name = resultados[3];
	document.getElementById("b5").name = resultados[4];
	document.getElementById("b6").name = resultados[5];
	document.getElementById("b7").name = resultados[6];
	document.getElementById("b8").name = resultados[7];
	document.getElementById("b9").name = resultados[8];
	
	getResultadoAleatorio();
	document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
}

function desabilitarTab(pausado){
	if(pausado == false){	
		exparmazenadas[0] = document.getElementById("b1").value;
		exparmazenadas[1] = document.getElementById("b2").value;
		exparmazenadas[2] = document.getElementById("b3").value;
		exparmazenadas[3] = document.getElementById("b4").value;
		exparmazenadas[4] = document.getElementById("b5").value;
		exparmazenadas[5] = document.getElementById("b6").value;
		exparmazenadas[6] = document.getElementById("b7").value;
		exparmazenadas[7] = document.getElementById("b8").value;
		exparmazenadas[8] = document.getElementById("b9").value;
			
		document.getElementById("b1").value = "-----";
		document.getElementById("b2").value = "-----";
		document.getElementById("b3").value = "-----";
		document.getElementById("b4").value = "-----";
		document.getElementById("b5").value = "-----";
		document.getElementById("b6").value = "-----";
		document.getElementById("b7").value = "-----";
		document.getElementById("b8").value = "-----";
		document.getElementById("b9").value = "-----";		
			
		/*
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;	
		*/
	}
	else{		
		document.getElementById("b1").value = exparmazenadas[0];
		document.getElementById("b2").value = exparmazenadas[1];
		document.getElementById("b3").value = exparmazenadas[2];
		document.getElementById("b4").value = exparmazenadas[3];
		document.getElementById("b5").value = exparmazenadas[4];
		document.getElementById("b6").value = exparmazenadas[5];
		document.getElementById("b7").value = exparmazenadas[6];
		document.getElementById("b8").value = exparmazenadas[7];
		document.getElementById("b9").value = exparmazenadas[8];
					
		/*
		document.getElementById("b1").disabled = false;
		document.getElementById("b2").disabled = false;
		document.getElementById("b3").disabled = false;
		document.getElementById("b4").disabled = false;
		document.getElementById("b5").disabled = false;
		document.getElementById("b6").disabled = false;
		document.getElementById("b7").disabled = false;
		document.getElementById("b8").disabled = false;
		document.getElementById("b9").disabled = false;
		*/
	}
}


function getResultadoAleatorio(){
	var index;
	index = Math.floor(Math.random() * resultados.length) + 0;
	resultado = resultados[index];
	document.getElementById("lbresultado").value = "Resultado: "+resultados[index];
	resultados.splice(index, 1);
}
