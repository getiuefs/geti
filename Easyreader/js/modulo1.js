
var dicionario = ["bola", "dado", "pente", "batata", "pato"];
var copia = [];
var palavra;
var indiceAtual = 0;
var caracteres;
var labeldiresq = [];
var ordem = [];
var indice = 0;
var acertos = 0;

function gerarOrdem(){
	for(var i=0; i<dicionario.length; i++){
		ordem[i] = i;
	}
	var p, n, tmp;
	for (p = ordem.length; p;) {
    n = Math.random() * p-- | 0;
    tmp = ordem[n];
    ordem[n] = ordem[p];
    ordem[p] = tmp;
	}
}

function novoJogoMod1(){
		document.getElementById("acertos").innerHTML = "Acertos: "+acertos;
		palavra = dicionario[ordem[indice]];
		caracteres = palavra.split('');
		var url = 'img/' + palavra + '.jpg';
		document.getElementById("imgmod1").src = url;
		indiceAtual = 0;
		document.getElementById("labelresposta").value = "";
		separarLetras();
		indice++;
}

function separarLetras(){
	var oposto;
	var espelhada;
	if(caracteres[indiceAtual] == 'a'){
		oposto = 'e';
		espelhada = true;
	}
	else if(caracteres[indiceAtual] == 'e'){
		oposto = 'a';
		espelhada = true;
	}
	else if(caracteres[indiceAtual] == 'b'){
		oposto = 'd';
		espelhada = true;
	}
	else if(caracteres[indiceAtual] == 'd'){
		oposto = 'b';
		espelhada = true;
	}
	else if(caracteres[indiceAtual] == 'p'){
		oposto = 'q';
		espelhada = true;
	}
	else if(caracteres[indiceAtual] == 'q'){
		oposto = 'p';
		espelhada = true;
	}
	else if(caracteres[indiceAtual] == 'm'){
		oposto = 'n';
		espelhada = true;
	}
	else if(caracteres[indiceAtual] == 'n'){
		oposto = 'm';
		espelhada = true;
	}

	if(espelhada == true){
		labeldiresq[0] = caracteres[indiceAtual];
		labeldiresq[1] = oposto;

	}
	else{
		labeldiresq[0] = caracteres[indiceAtual];
		labeldiresq[1] = getRandomChar();
	}

	labeldiresq.shuffle();
	document.getElementById("letraesquerda").value = labeldiresq[0];
	document.getElementById("letradireita").value = labeldiresq[1];
	indiceAtual++;

}

function jogar(lado){
	if(indiceAtual == palavra.length){
		if(lado == 0){
			botaoEsquerdo();
			separarLetras();
		}
		else{
			botaoDireito();
			separarLetras();
		}
		fimPalavra();
	}
	else{
		if(lado == 0){
			botaoEsquerdo();
			separarLetras();
		}
		else{
			botaoDireito();
			separarLetras();
		}
	}

}

function botaoDireito(){
	letra = document.getElementById("letradireita").value;
	sintetizar("Letra "+letra);
	atual = document.getElementById("labelresposta").value;
	document.getElementById("labelresposta").value = atual+letra;
}

function botaoEsquerdo(){
	letra = document.getElementById("letraesquerda").value;
	sintetizar("Letra "+letra);
	atual = document.getElementById("labelresposta").value;
	document.getElementById("labelresposta").value = atual+letra;
}


function fimPalavra(){
	if(indice < dicionario.length){
		if(palavra == document.getElementById("labelresposta").value){
		texto = "Você acertou, parabens"
		acertos++;
		alerta(texto, 1200, "");
		novoJogoMod1();
	}
		else{
		texto = "Essa passou perto! a resposta correta era: ";
		alerta(texto, 2000, palavra);
		novoJogoMod1();

		}
	}

	else{
		if(palavra == document.getElementById("labelresposta").value){
			acertos++;
		}
		texto = "Fim da rodada, seu tempo foi de: "+document.getElementById("lbtempo").value+" e voce acertou "+acertos+" de "+dicionario.length+" imagens!";
		alerta(texto, 4500, "");
		showMenu();
	}


}



// funções auxiliares

function alerta(texto, tempo, subtexto){
	    swal({
        title: texto,
		text: subtexto,
		timer: tempo,
		showConfirmButton: false
		});
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomChar(){
	var grupo = ["a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y", "z"];
	var aleatorio = Math.floor(Math.random()*grupo.length);
	return grupo[aleatorio];

}

