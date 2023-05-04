var vozativa = true;


function sintetizar(texto){
	if(vozativa){
		responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
		responsiveVoice.speak(texto);
	}
	
}

function sintetizarExpressao(texto){
	responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
	var expressaofalada = texto.split("/").join("dividiro por ");;
	expressaofalada = expressaofalada.split("*").join("vezes  ");
	expressaofalada = expressaofalada.split("-").join("menos  ");
	expressaofalada = expressaofalada.split("10").join("dez  ");
	console.log(expressaofalada);
	sintetizar(expressaofalada);
}

function sintetizarAtalhosMenu(){ // H
	responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
	responsiveVoice.speak("Para iniciar o jogo no modo fácil pressione a tecla A");
	responsiveVoice.speak("Para iniciar o jogo no modo intermediário pressione a tecla S");
	responsiveVoice.speak("Para iniciar o jogo no modo difícil pressione a tecla D");
	responsiveVoice.speak("Para ouvir os atalhos referentes ao tabuleiro pressione J");
	responsiveVoice.speak("Para voltar ao menu inicial pressione a tecla ESC");
}

function sintetizarAtalhosTab(){ // J
	responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
	
	responsiveVoice.speak("Cada célula do tabuleiro corresponde a uma tecla do seu teclado numérico");
	responsiveVoice.speak("Por exemplo, a célula localizada na primeira linha e primeira coluna corresponde a tecla um");
	responsiveVoice.speak("A célula localizada na primeira linha e segunda coluna corresponde a tecla dois, e assim por diante");
	responsiveVoice.speak("A primeira vez que a tecla é pressionada você ouvirá qual expressão está naquela célula");
	responsiveVoice.speak("Caso deseje escolher ela, basta pressionar novamente a mesma tecla");
	responsiveVoice.speak("Para ouvir as informações necessárias para jogar você utilizará as setas direcionais");
	responsiveVoice.speak("Para ouvir o tempo atual do jogo, pressione a seta direcional para a direita");
	responsiveVoice.speak("Para ouvir quantas jogadas restam, pressione a seta direcional para baixo");
	responsiveVoice.speak("Para ouvir o resultado esperado, pressione a seta direcional para esquerda");
	responsiveVoice.speak("Para desativar a síntese de voz utilize a tecla control");
	responsiveVoice.speak("Para voltar ao menu inicial pressione a tecla ESC");
}

function sintetizarTutorial(){ // Q
	responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
	responsiveVoice.speak("O jogo é composto por um tabuleiro de 9 células");
	responsiveVoice.speak("Dividido em três linhas e três colunas");
	responsiveVoice.speak("Cada célula representa uma expressão aritmética");
	responsiveVoice.speak("Seu objetivo é encontrar todas as expressões que são válidas para os resultados dados");
	responsiveVoice.speak("Cada tentativa gastará uma das 12 jogadas que você terá inicialmente");
	responsiveVoice.speak("Em caso de 3 acertos consecutivos você ganhará mais uma jogada");
	responsiveVoice.speak("Para ouvir os atalhos referentes ao funcionamento do jogo pressione a tecla J");
	responsiveVoice.speak("Para voltar ao menu inicial pressione a tecla ESC");	
}

function sintetizarApresentacao(){ // esc
	responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
	responsiveVoice.speak("Bem vindo ao bem expressões");
	responsiveVoice.speak("Para interromper qualquer síntese, pressione a tecla W");
	responsiveVoice.speak("Para ouvir quais são os atalhos do jogo pressione a tecla H");
	responsiveVoice.speak("Para ouvir um breve tutorial sobre o funcionamento do jogo pressione a tecla Q");
	responsiveVoice.speak("Para ouvir o ranking atual pressione a tecla R");
	responsiveVoice.speak("Para repetir estas informações pressione a tecla ESC");	
}


function ativdesativSom(){
	vozativa = !vozativa;
	console.log(vozativa);
	if(!vozativa){
		document.getElementById("bsom").value = "Som: off";
		responsiveVoice.speak("Som desativado");
	}	
	else{
		document.getElementById("bsom").value = "Som: on";
		responsiveVoice.speak("Som ativado");
	}
		
}

function sintetizarTempo(texto){
	
	responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
	var tempo = texto.split(":");
	var tempoFormatado;
	if(tempo[1].charAt(1) == "0"){ // menos de 1 minuto
		if(tempo[2] < 10){
			tempoFormatado = tempo[2].charAt(1)+"segundos";
		}
		else{
			tempoFormatado = tempo[2]+"segundos";
		}			
	}
	else{ // mais de um minuto
		if(tempo[1] == 1){
			if(tempo[2] < 10){
				tempoFormatado = tempo[1].charAt(1)+"minuto e"+tempo[2].charAt(1)+"segundos";
			}
			else{
				tempoFormatado = tempo[1].charAt(1)+"minuto e"+tempo[2]+"segundos";
			}	
		}
		else if(tempo[1] < 10){
			if(tempo[2] < 10){
				tempoFormatado = tempo[1].charAt(1)+"minutos e"+tempo[2].charAt(1)+"segundos";
			}
			else{
				tempoFormatado = tempo[1].charAt(1)+"minutos e"+tempo[2]+"segundos";
			}
		}
	}
	sintetizar(tempoFormatado);
}


function sintetizarRanking(){

	if(document.getElementById('lbfacil').name != "Não há"){
		sintetizar("O melhor tempo no nivel fácil foi");
		sintetizarTempo(document.getElementById('lbfacil').name);
	}
	else{
		sintetizar("Ainda não há melhor tempo no nivel fácil");
	}
	
	if(document.getElementById('lbintermediario').name != "Não há"){
		sintetizar("O melhor tempo no nivel intermediário foi");
		sintetizarTempo(document.getElementById('lbintermediario').name);
	}
	else{
		sintetizar("Ainda não há melhor tempo no nivel intermediário");
	}
	
	if(document.getElementById('lbdificil').name != "Não há"){
		sintetizar("O melhor tempo no nivel difícil foi");
		sintetizarTempo(document.getElementById('lbdificil').name);
	}
	else{
		sintetizar("Ainda não há melhor tempo no nivel difícil");
	}
	
}
