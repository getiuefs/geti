var words;
var parado = false;
var intervaloTempo = 300;
var idintervalo;
var jogadas = 15;

function novoJogoMod2(){
	document.getElementById("acertos2").value = "Acertos: "+acertos;
	document.getElementById("lbjogadas").value = "Jogadas: "+jogadas;
	palavra = dicionario[ordem[indice]];
	var url = 'img/' + palavra + '.jpg';
	document.getElementById("imgmod2").src = url;
	limparWord();
	pararPalavra();
	iniciarEfeitoPalavra();
	if(indice < dicionario.length-1)
		indice++;
	console.log(words);
	
}

function jogada(){
	if(jogadas > 1){
		if(document.getElementById("word").innerHTML == palavra){
			alerta("Você acertou", 1300);
			acertos++;
			document.getElementById("acertos2").value = "Acertos: "+acertos;
			animacao(true);
			novoJogoMod2();
		}
		else{
			animacao(false);
			printaWord();
		}
		jogadas--;
		document.getElementById("lbjogadas").value = "Jogadas: "+jogadas;
	}
	else{
		jogadas = 0;
		pararPalavra();
		document.getElementById("word").innerHTML = "Fim"
		document.getElementById("lbjogadas").value = "Jogadas: "+jogadas;
		alerta("Suas jogadas acabaram, mas você pode iniciar novamente!", 2000);
	}
		
}

function gerarPalavras(){ // refinar este método ////////
	var palavras = [];
	palavras.push(palavra);

	for(var i = 0; i < 3; i++){
		if(palavra.match("d")){
			palavras.push(palavra.replace("d", "b"));
		}
		if(palavra.match("p")){
			palavras.push(palavra.replace("p", "q"));
		}
		if(palavra.match("q")){
			palavras.push(palavra.replace("q", "p"));
		}
		if(palavra.match("a")){
			palavras.push(palavra.replace("a", "e"));
		}
		 if(palavra.match("b")){
			palavras.push(palavra.replace("b", "d"));
		}
		if(palavra.match("e")){
			palavras.push(palavra.replace("e", "a"));
		}	
	}
	palavras.length = 3;;
	palavras.shuffle();
	return palavras;
	
}

function efeitoPalavras(){
	if(wordWrapperContent.length > 0 && !addingWord ) {
		wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
		wordWrapperContent = wordWrapper.innerHTML;
	}
	else {
		addingWord = true;
	}

	if( addingWord ){
		if( wordWrapperContent.length < words[counter].length  ) {
			wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
			wordWrapperContent = wordWrapper.innerHTML;
			
		}
		else {
			if( counter < words.length) {
				counter ++
				sleep(100);
			}
		addingWord = false;
		}
	}
	if( counter == words.length) {
		words.shuffle();
		counter = 0;
	}
}

function setPalavras(valor){
	words = valor;
}

function iniciarEfeitoPalavra(){
    wordWrapper = document.getElementById("word"),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;
	setPalavras(gerarPalavras());
	idintervalo = setInterval("efeitoPalavras();",intervaloTempo);
}

function pararPalavra(){
		clearInterval(idintervalo);
}

function reiniciarPalavra(){
	if(parado == true){
		idintervalo = setInterval("efeitoPalavras();",intervaloTempo);
		parado = !parado;
	}
}

function limparWord(){
	document.getElementById("word").innerHTML = "";
}

function printaWord(){
	console.log(document.getElementById("word").innerHTML);
}

function animacao(acertou){
		if(acertou){
			document.getElementById("word").style.color = "#98FB98";
		}
		else{
			document.getElementById("word").style.color = "#FF0000"
		}
		setTimeout(fimanimacaotab, 650);			
}	


function fimanimacaotab(){
	document.getElementById("word").style.color = "#FFFFFF"
}

