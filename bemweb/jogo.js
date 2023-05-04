//ações dos botoes e lógica do jogo
var idbotao;
var nivel;

function jogarb9(){
	if(pausado == true){
		sintetizar("o jogo se encontra pausado");
	}
	else{
		if(document.getElementById("b9").value != expressaoigual && vozativa){
			expressaoigual = document.getElementById("b9").value;
			if(document.getElementById("b9").value == "-----"){
				sintetizar("Célula vazia, tente outra");
			}
			else{		
			sintetizarExpressao(document.getElementById("b9").value);
			}
		}
		else{
			//jogo acontece
			if(verificavitoria != 9 && jogadasrestantes != 0){
				if(document.getElementById("b9").value == "-----"){ // celula vazia
					sintetizar("Célula vazia, tente outra");
				}
				else{ // celula preenchida
					if(document.getElementById("b9").name == resultado){ // expressao correta
						bonusjogadas++;
						sintetizar("Expressão correta");
						alerta("Expressão correta!");
						document.getElementById("b9").value = "-----";
						verificavitoria++;
						getResultadoAleatorio();
						animacaotab("b9", true);
					}
					else{ // expressao incorreta
						sintetizar("Expressão incorreta");
						alerta("Expressão incorreta!");
						bonusjogadas = 0;
						animacaotab("b9", false);
					}
					
				}
				if(bonusjogadas == 3 && verificavitoria != 9){
					bonusjogadas = 0;
					sintetizar("Você ganhou mais uma jogada");
					animacaojogadas();
					jogadasrestantes++;
				}
				if(jogadasrestantes > 0){
					jogadasrestantes--;
				}
				document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
				
			}
			if(jogadasrestantes == 0 && verificavitoria != 9){
				//desativar cronometro
				responsiveVoice.speak("Suas jogadas acabaram");
				parar();
				//desativar tabuleiro		
			}
			else if(verificavitoria == 9){
				//desativar cronometro
				sintetizar("Parabéns, você venceu");
				document.getElementById("lbresultado").value = "Fim de jogo";
				// falar tempo de jogo
				var texto = document.getElementById("lbtempo").value;
				sintetizar("Seu tempo foi de");
				sintetizarTempo(texto);	
				parar();
				ranking();
			}			
			//fim do método do jogo		
		}		
	}									
}

function jogarb8(){
	if(pausado == true){
		sintetizar("o jogo se encontra pausado");
	}
	else{
		if(document.getElementById("b8").value != expressaoigual && vozativa){
			expressaoigual = document.getElementById("b8").value;
			if(document.getElementById("b8").value == "-----"){
				sintetizar("Célula vazia, tente outra");
			}
			else{		
			sintetizarExpressao(document.getElementById("b8").value);
			}
		}
		else{
			//jogo acontece
			if(verificavitoria != 9 && jogadasrestantes != 0){
				if(document.getElementById("b8").value == "-----"){ // celula vazia
					sintetizar("Célula vazia, tente outra");
				}
				else{ // celula preenchida
					if(document.getElementById("b8").name == resultado){ // expressao correta
						bonusjogadas++;
						sintetizar("Expressão correta");
						alerta("Expressão correta!");
						document.getElementById("b8").value = "-----";
						verificavitoria++;
						getResultadoAleatorio();
						animacaotab("b8", true);
					}
					else{ // expressao incorreta
						sintetizar("Expressão incorreta");
						alerta("Expressão incorreta!");
						bonusjogadas = 0;
						animacaotab("b8", false);
					}
					
				}
				if(bonusjogadas == 3 && verificavitoria != 9){
					bonusjogadas = 0;
					sintetizar("Você ganhou mais uma jogada");
					animacaojogadas();
					jogadasrestantes++;
				}
				if(jogadasrestantes > 0){
					jogadasrestantes--;
				}
				document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
				
			}
			if(jogadasrestantes == 0 && verificavitoria != 9){
				//desativar cronometro
				responsiveVoice.speak("Suas jogadas acabaram");
				parar();
				//desativar tabuleiro		
			}
			else if(verificavitoria == 9){
				//desativar cronometro
				sintetizar("Parabéns, você venceu");
				document.getElementById("lbresultado").value = "Fim de jogo";
				// falar tempo de jogo
				var texto = document.getElementById("lbtempo").value;
				sintetizar("Seu tempo foi de");
				sintetizarTempo(texto);		
				parar();
				ranking();
			}			
			//fim do método do jogo		
		}		
	}									
}



function jogarb7(){
	if(pausado == true){
		sintetizar("o jogo se encontra pausado");
	}
	else{
		if(document.getElementById("b7").value != expressaoigual && vozativa){
			expressaoigual = document.getElementById("b7").value;
			if(document.getElementById("b7").value == "-----"){
				sintetizar("Célula vazia, tente outra");
			}
			else{		
			sintetizarExpressao(document.getElementById("b7").value);
			}
		}
		else{
			//jogo acontece
			if(verificavitoria != 9 && jogadasrestantes != 0){
				if(document.getElementById("b7").value == "-----"){ // celula vazia
					sintetizar("Célula vazia, tente outra");
				}
				else{ // celula preenchida
					if(document.getElementById("b7").name == resultado){ // expressao correta
						bonusjogadas++;
						sintetizar("Expressão correta");
						alerta("Expressão correta!");
						document.getElementById("b7").value = "-----";
						verificavitoria++;
						getResultadoAleatorio();
						animacaotab("b7", true);
					}
					else{ // expressao incorreta
						sintetizar("Expressão incorreta");
						alerta("Expressão incorreta!");
						bonusjogadas = 0;
						animacaotab("b7", false);
					}
					
				}
				if(bonusjogadas == 3 && verificavitoria != 9){
					bonusjogadas = 0;
					sintetizar("Você ganhou mais uma jogada");
					animacaojogadas();
					jogadasrestantes++;
				}
				if(jogadasrestantes > 0){
					jogadasrestantes--;
				}
				document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
				
			}
			if(jogadasrestantes == 0 && verificavitoria != 9){
				//desativar cronometro
				responsiveVoice.speak("Suas jogadas acabaram");
				parar();
				//desativar tabuleiro		
			}
			else if(verificavitoria == 9){
				//desativar cronometro
				sintetizar("Parabéns, você venceu");
				document.getElementById("lbresultado").value = "Fim de jogo";
				// falar tempo de jogo
				var texto = document.getElementById("lbtempo").value;
				sintetizar("Seu tempo foi de");
				sintetizarTempo(texto);		
				parar();
				ranking();
			}			
			//fim do método do jogo		
		}		
	}									
}


function jogarb6(){
	if(pausado == true){
		sintetizar("o jogo se encontra pausado");
	}
	else{
		if(document.getElementById("b6").value != expressaoigual && vozativa){
			expressaoigual = document.getElementById("b6").value;
			if(document.getElementById("b6").value == "-----"){
				sintetizar("Célula vazia, tente outra");
			}
			else{		
			sintetizarExpressao(document.getElementById("b6").value);
			}
		}
		else{
			//jogo acontece
			if(verificavitoria != 9 && jogadasrestantes != 0){
				if(document.getElementById("b6").value == "-----"){ // celula vazia
					sintetizar("Célula vazia, tente outra");
				}
				else{ // celula preenchida
					if(document.getElementById("b6").name == resultado){ // expressao correta
						bonusjogadas++;
						sintetizar("Expressão correta");
						alerta("Expressão correta!");
						document.getElementById("b6").value = "-----";
						verificavitoria++;
						getResultadoAleatorio();
						animacaotab("b6", true);
					}
					else{ // expressao incorreta
						sintetizar("Expressão incorreta");
						alerta("Expressão incorreta!");
						bonusjogadas = 0;
						animacaotab("b6", false);
					}
					
				}
				if(bonusjogadas == 3 && verificavitoria != 9){
					bonusjogadas = 0;
					sintetizar("Você ganhou mais uma jogada");
					animacaojogadas();
					jogadasrestantes++;
				}
				if(jogadasrestantes > 0){
					jogadasrestantes--;
				}
				document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
				
			}
			if(jogadasrestantes == 0 && verificavitoria != 9){
				//desativar cronometro
				responsiveVoice.speak("Suas jogadas acabaram");
				parar();
				//desativar tabuleiro		
			}
			else if(verificavitoria == 9){
				//desativar cronometro
				sintetizar("Parabéns, você venceu");
				document.getElementById("lbresultado").value = "Fim de jogo";
				// falar tempo de jogo
				var texto = document.getElementById("lbtempo").value;
				sintetizar("Seu tempo foi de");
				sintetizarTempo(texto);		
				parar();
				ranking();
			}			
			//fim do método do jogo		
		}		
	}									
}


function jogarb5(){
	if(pausado == true){
		sintetizar("o jogo se encontra pausado");
	}
	else{
		if(document.getElementById("b5").value != expressaoigual && vozativa){
			expressaoigual = document.getElementById("b5").value;
			if(document.getElementById("b5").value == "-----"){
				sintetizar("Célula vazia, tente outra");
			}
			else{		
			sintetizarExpressao(document.getElementById("b5").value);
			}
		}
		else{
			//jogo acontece
			if(verificavitoria != 9 && jogadasrestantes != 0){
				if(document.getElementById("b5").value == "-----"){ // celula vazia
					sintetizar("Célula vazia, tente outra");
				}
				else{ // celula preenchida
					if(document.getElementById("b5").name == resultado){ // expressao correta
						bonusjogadas++;
						sintetizar("Expressão correta");
						alerta("Expressão correta!");
						document.getElementById("b5").value = "-----";
						verificavitoria++;
						getResultadoAleatorio();
						animacaotab("b5", true);
					}
					else{ // expressao incorreta
						sintetizar("Expressão incorreta");
						alerta("Expressão incorreta!");
						bonusjogadas = 0;
						animacaotab("b5", false);
					}
					
				}
				if(bonusjogadas == 3 && verificavitoria != 9){
					bonusjogadas = 0;
					sintetizar("Você ganhou mais uma jogada");
					animacaojogadas();
					jogadasrestantes++;
				}
				if(jogadasrestantes > 0){
					jogadasrestantes--;
				}
				document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
				
			}
			if(jogadasrestantes == 0 && verificavitoria != 9){
				//desativar cronometro
				responsiveVoice.speak("Suas jogadas acabaram");
				parar();
				//desativar tabuleiro		
			}
			else if(verificavitoria == 9){
				//desativar cronometro
				sintetizar("Parabéns, você venceu");
				document.getElementById("lbresultado").value = "Fim de jogo";
				// falar tempo de jogo
				var texto = document.getElementById("lbtempo").value;
				sintetizar("Seu tempo foi de");
				sintetizarTempo(texto);		
				parar();
				ranking();
			}			
			//fim do método do jogo		
		}		
	}									
}


function jogarb4(){
	if(pausado == true){
		sintetizar("o jogo se encontra pausado");
	}
	else{
		if(document.getElementById("b4").value != expressaoigual && vozativa){
			expressaoigual = document.getElementById("b4").value;
			if(document.getElementById("b4").value == "-----"){
				sintetizar("Célula vazia, tente outra");
			}
			else{		
			sintetizarExpressao(document.getElementById("b4").value);
			}
		}
		else{
			//jogo acontece
			if(verificavitoria != 9 && jogadasrestantes != 0){
				if(document.getElementById("b4").value == "-----"){ // celula vazia
					sintetizar("Célula vazia, tente outra");
				}
				else{ // celula preenchida
					if(document.getElementById("b4").name == resultado){ // expressao correta
						bonusjogadas++;
						sintetizar("Expressão correta");
						alerta("Expressão correta!");
						document.getElementById("b4").value = "-----";
						verificavitoria++;
						getResultadoAleatorio();
						animacaotab("b4", true);
					}
					else{ // expressao incorreta
						sintetizar("Expressão incorreta");
						alerta("Expressão incorreta!");
						bonusjogadas = 0;
						animacaotab("b4", false);
					}
					
				}
				if(bonusjogadas == 3 && verificavitoria != 9){
					bonusjogadas = 0;
					sintetizar("Você ganhou mais uma jogada");
					animacaojogadas();
					jogadasrestantes++;
				}
				if(jogadasrestantes > 0){
					jogadasrestantes--;
				}
				document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
				
			}
			if(jogadasrestantes == 0 && verificavitoria != 9){
				//desativar cronometro
				responsiveVoice.speak("Suas jogadas acabaram");
				parar();
				//desativar tabuleiro		
			}
			else if(verificavitoria == 9){
				//desativar cronometro
				sintetizar("Parabéns, você venceu");
				document.getElementById("lbresultado").value = "Fim de jogo";
				// falar tempo de jogo
				var texto = document.getElementById("lbtempo").value;
				sintetizar("Seu tempo foi de");
				sintetizarTempo(texto);		
				parar();
				ranking();
			}			
			//fim do método do jogo		
		}		
	}									
}


function jogarb3(){
	if(pausado == true){
		sintetizar("o jogo se encontra pausado");
	}
	else{
		if(document.getElementById("b3").value != expressaoigual && vozativa){
			expressaoigual = document.getElementById("b3").value;
			if(document.getElementById("b3").value == "-----"){
				sintetizar("Célula vazia, tente outra");
			}
			else{		
			sintetizarExpressao(document.getElementById("b3").value);
			}
		}
		else{
			//jogo acontece
			if(verificavitoria != 9 && jogadasrestantes != 0){
				if(document.getElementById("b3").value == "-----"){ // celula vazia
					sintetizar("Célula vazia, tente outra");
				}
				else{ // celula preenchida
					if(document.getElementById("b3").name == resultado){ // expressao correta
						bonusjogadas++;
						sintetizar("Expressão correta");
						alerta("Expressão correta!");
						document.getElementById("b3").value = "-----";
						verificavitoria++;
						getResultadoAleatorio();
						animacaotab("b3", true);
					}
					else{ // expressao incorreta
						sintetizar("Expressão incorreta");
						alerta("Expressão incorreta!");
						bonusjogadas = 0;
						animacaotab("b3", false);
					}
					
				}
				if(bonusjogadas == 3 && verificavitoria != 9){
					bonusjogadas = 0;
					sintetizar("Você ganhou mais uma jogada");
					animacaojogadas();
					jogadasrestantes++;
				}
				if(jogadasrestantes > 0){
					jogadasrestantes--;
				}
				document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
				
			}
			if(jogadasrestantes == 0 && verificavitoria != 9){
				//desativar cronometro
				responsiveVoice.speak("Suas jogadas acabaram");
				parar();
				//desativar tabuleiro		
			}
			else if(verificavitoria == 9){
				//desativar cronometro
				sintetizar("Parabéns, você venceu");
				document.getElementById("lbresultado").value = "Fim de jogo";
				// falar tempo de jogo
				var texto = document.getElementById("lbtempo").value;
				sintetizar("Seu tempo foi de");
				sintetizarTempo(texto);		
				parar();
				ranking();
			}			
			//fim do método do jogo		
		}		
	}									
}


function jogarb2(){
	if(pausado == true){
		sintetizar("o jogo se encontra pausado");
	}
	else{
		if(document.getElementById("b2").value != expressaoigual && vozativa){
			expressaoigual = document.getElementById("b2").value;
			if(document.getElementById("b2").value == "-----"){
				sintetizar("Célula vazia, tente outra");
			}
			else{		
			sintetizarExpressao(document.getElementById("b2").value);
			}
		}
		else{
			//jogo acontece
			if(verificavitoria != 9 && jogadasrestantes != 0){
				if(document.getElementById("b2").value == "-----"){ // celula vazia
					sintetizar("Célula vazia, tente outra");
				}
				else{ // celula preenchida
					if(document.getElementById("b2").name == resultado){ // expressao correta
						bonusjogadas++;
						sintetizar("Expressão correta");
						alerta("Expressão correta!");
						document.getElementById("b2").value = "-----";
						verificavitoria++;
						getResultadoAleatorio();
						animacaotab("b2", true);
					}
					else{ // expressao incorreta
						sintetizar("Expressão incorreta");
						alerta("Expressão incorreta!");
						bonusjogadas = 0;
						animacaotab("b2", false);
					}
					
				}
				if(bonusjogadas == 3 && verificavitoria != 9){
					bonusjogadas = 0;
					sintetizar("Você ganhou mais uma jogada");
					animacaojogadas();
					jogadasrestantes++;
				}
				if(jogadasrestantes > 0){
					jogadasrestantes--;
				}
				document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
				
			}
			if(jogadasrestantes == 0 && verificavitoria != 9){
				//desativar cronometro
				responsiveVoice.speak("Suas jogadas acabaram");
				parar();
				//desativar tabuleiro		
			}
			else if(verificavitoria == 9){
				//desativar cronometro
				sintetizar("Parabéns, você venceu");
				document.getElementById("lbresultado").value = "Fim de jogo";
				// falar tempo de jogo
				var texto = document.getElementById("lbtempo").value;
				sintetizar("Seu tempo foi de");
				sintetizarTempo(texto);		
				parar();
				ranking();
			}			
			//fim do método do jogo		
		}		
	}									
}


function jogarb1(){
	if(pausado == true){
		sintetizar("o jogo se encontra pausado");
	}
	else{
		if(document.getElementById("b1").value != expressaoigual && vozativa){
			expressaoigual = document.getElementById("b1").value;
			if(document.getElementById("b1").value == "-----"){
				sintetizar("Célula vazia, tente outra");
			}
			else{		
			sintetizarExpressao(document.getElementById("b1").value);
			}
		}
		else{
			//jogo acontece
			if(verificavitoria != 9 && jogadasrestantes != 0){
				if(document.getElementById("b1").value == "-----"){ // celula vazia
					sintetizar("Célula vazia, tente outra");
				}
				else{ // celula preenchida
					if(document.getElementById("b1").name == resultado){ // expressao correta
						bonusjogadas++;
						sintetizar("Expressão correta");
						alerta("Expressão correta!");
						document.getElementById("b1").value = "-----";
						verificavitoria++;
						getResultadoAleatorio();
						animacaotab("b1", true);
					}
					else{ // expressao incorreta
						sintetizar("Expressão incorreta");
						alerta("Expressão incorreta!");
						bonusjogadas = 0;
						animacaotab("b1", false);
					}
					
				}
				if(bonusjogadas == 3 && verificavitoria != 9){
					bonusjogadas = 0;
					sintetizar("Você ganhou mais uma jogada");
					animacaojogadas();
					jogadasrestantes++;
				}
				if(jogadasrestantes > 0){
					jogadasrestantes--;
				}
				document.getElementById("lbjogadas").value = "Jogadas: "+jogadasrestantes;
				
			}
			if(jogadasrestantes == 0 && verificavitoria != 9){
				//desativar cronometro
				responsiveVoice.speak("Suas jogadas acabaram");
				parar();
				//desativar tabuleiro		
			}
			else if(verificavitoria == 9){
				//desativar cronometro
				sintetizar("Parabéns, você venceu");
				document.getElementById("lbresultado").value = "Fim de jogo";
				// falar tempo de jogo
				var texto = document.getElementById("lbtempo").value;
				sintetizar("Seu tempo foi de");
				sintetizarTempo(texto);		
				parar();
				ranking();
			}			
			//fim do método do jogo		
		}		
	}									
}


window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 38) { //up key
        pausar();
    } 
	else if (code === 40) { //down key
		var texto = document.getElementById("lbjogadas").value;
		texto = texto.split(":");
        sintetizar(texto[1]+"Jogadas restantes");
    }
	else if (code === 37) { //left key
		var texto = document.getElementById("lbresultado").value;
		texto = texto.split(":");
        sintetizar("O resultado esperado é"+texto[1]);
    }
	else if (code === 39) { //right key
		var texto = document.getElementById("lbtempo").value;
        sintetizar("Seu tempo é de");
		sintetizarTempo(texto);
    }
	
	else if (code === 82) { //sintetizar ranking = R
		sintetizarRanking();
    }
	
	else if (code === 17) { //control
		ativdesativSom();
    }
	
	else if (code === 87) { //w
		sintetizar("");
		responsiveVoice.speak("");
    }
	// atalhos das celulas
	
	else if (code === 97) { //1
		jogarb7();
    }
	else if (code === 98) { //2
		jogarb8();
    }
	else if (code === 99) { //3
		jogarb9();
    }
	else if (code === 100) { //4
		jogarb4();
    }
	else if (code === 101) { //5
		jogarb5();
    }
	else if (code === 102) { //6
		jogarb6();
    }
	else if (code === 103) { //7
		jogarb1();
    }
	else if (code === 104) { //8
		jogarb2();
    }
	else if (code === 105) { //9
		jogarb3();
    }
	
	// niveis de jogo
	
	else if (code === 65) { //a
		novoJogo(1, 'nivel fácil iniciado');
		showTab();
    }
	else if (code === 83) { //s
		novoJogo(2, 'nivel intermediário iniciado');
		showTab();
    }
	else if (code === 68) { //d
		novoJogo(3, 'nivel difícil iniciado');
		showTab();
    }
	
	// voltar ao menu
	
	else if (code === 27) { //esc
		sintetizarApresentacao();
		showMenu();
    }
	
	// sintese de instruções
	
	else if (code === 72) { //H
		sintetizarAtalhosMenu();
    }
	
	else if (code === 74) { //J
		sintetizarAtalhosTab();
    }
	
	else if (code === 81) { //Q
		sintetizarTutorial();
    }
	
};

function ocultar(id) {
	var elemento = document.getElementById(id);
	if(elemento.style.display=="none") {
		elemento.style.display = "block";
	}
	else {
		elemento.style.display = "none";
	}
}

function novoJogo(nivel, texto){
	this.nivel = nivel;
	geraExpressoes(nivel);
	preencherTabuleiro();
	responsiveVoice.speak(texto);
	if(segundos != 0){
		zerar();
		iniciar();	
	}
	else{
		iniciar();
	}
		
}

function transicao(id1, id2){
	ocultar(id1);
	ocultar(id2);
}

function showTab(){
	document.getElementById('divtab').style.display = "block";
	document.getElementById('divindex').style.display = "none";
}

function showMenu(){
	document.getElementById('divtab').style.display = "none";
	document.getElementById('divindex').style.display = "block";
}

function alerta(texto){
  if(!vozativa){
	    swal({
        title: texto,
		text: "",
		timer: 1500,
		showConfirmButton: false
		});
  }
}

function animacaojogadas(){
	document.getElementById('lbjogadas').style.background = "#98FB98";
	document.getElementById('lbjogadas').style.transform = "rotate(360deg)";
	document.getElementById('lbjogadas').addEventListener("webkitTransitionEnd", fimanimacao);

}

function fimanimacao(){
	document.getElementById('lbjogadas').style.transform = "rotate(0deg)";
	document.getElementById('lbjogadas').style.background = "#FFFFFF"
}



function animacaotab(id, acertou){
	idbotao = id;
	if(!vozativa){
		if(acertou){
			document.getElementById(id).style.background = "#98FB98";
		}
		else{
			document.getElementById(id).style.background = "#FF0000"
		}
		setTimeout(fimanimacaotab, 650);			
	}	
}

function fimanimacaotab(){
	document.getElementById(idbotao).style.background = "#FFFFFF"
}


