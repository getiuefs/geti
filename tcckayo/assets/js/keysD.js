let pressed = {};
var dir="../image/";
var letra="";
var caixa="";
var antiga=".";
var tipo="";
var palavra = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x"
               ,"y", "z","ç","á","é","í","ó","ú","ã","õ","â","ê","ô","1","2","3","4","5","6","7","8","9","0"];

var dica = ["1","1 2","1 4","1 4 5","1 5","1 2 4", "1 2 4 5","1 2 5", "2 4", "2 4 5", "1 3", "1 2 3", "1 3 4",
            "1 3 4 5", "1 3 5" ,"1 2 3 4", "1 2 3 4 5", "1 2 3 5", "2 3 4", "2 3 4 5", "1 3 6", "1 2 3 6", "2 4 5 6",
            "1 3 4 6", "1 3 4 5 6", "1 3 5 6", "1 2 3 4 6", "1 2 3 5 6","1 2 3 4 5 6", "3 4", "3 4 6", "2 3 4 5 6",
          "3 4 5", "2 4 6","1 6","1 2 6","1 4 5 6","3 4 5 6 e pontos 1", "3 4 5 6 e pontos 1 2", "3 4 5 6 e pontos 1 4", "3 4 5 6 e pontos 1 4 5",
          "3 4 5 6 e pontos 1 5", "3 4 5 6 e pontos 1 2 4", "3 4 5 6 e pontos 1 2 4 5", "3 4 5 6 e pontos 1 2 5", "3 4 5 6 e pontos 2 4", "3 4 5 6 e pontos 2 4 5"];
var antiga="..";
var agudo="áéíóú";
var circunflexo="âêô";
var til="ãõ";
var crase="à";
var palavraAtual="";
var contador=0;
var valorAtual=0;
function clearAntiga(){
  antiga=".";
}
function modo(modo){
  tipo =modo;
  responsiveVoice.speak("Modo tutorial iniciado", "Portuguese Female");
  window.setTimeout("sortearPalavra()", 4000);
}

function sortearPalavra(){
  //palavraAtual=palavra[Math.floor(Math.random() * palavra.length)];
  if(tipo==2){
  atual = contador++;
  if(contador>palavra.length){
    contador=0;
    atual=0;
  }
  palavraAtual=palavra[atual];
  }else{
    atual=Math.floor(Math.random() * palavra.length);
  palavraAtual=palavra[atual];
  }
  responsiveVoice.speak("Digite "+palavraAtual, "Portuguese Female");
  document.getElementById("palavra").innerHTML=palavraAtual;
  //document.getElementById("palavra").innerHTML="PALAVRA";
  
}
function verResultado(erro){
  var audio1 = new Audio();
    
  if(erro==1){
    audio1.src = "../assets/audio/vinhetas/errou.mp3";
    audio1.play();
    console.log("ERRO");
    return false;
  }else{
    
  var texto=document.getElementById("caixa-texto").value;
  var tam = texto.length;

  if(texto.toUpperCase()==palavraAtual.substr(0,tam).toUpperCase()){
    audio1.src = "../assets/audio/vinhetas/acertou.mp3";
    audio1.play();
    console.log("You got IT!");
    return true;
  }else{
    audio1.src = "../assets/audio/vinhetas/errou.mp3";
    audio1.play();
    console.log("You're wrong! "+palavraAtual.substr(0,tam)+" "+texto.toUpperCase())
    return false;
  }
  	}

}
function lerolero(){
  if(letra=="shift" && caixa=="shift" && antiga!=letra){
    caixa="caps";
    //document.getElementById("caixa-braille").value=document.getElementById("caixa-braille").value.concat("**");
  }else if(letra=="numero" && antiga!=letra){
    document.getElementById("caixa-braille").value=document.getElementById("caixa-braille").value.concat("\%");
    responsiveVoice.speak("sinal de número", "Portuguese Female");
    antiga=letra;
    caixa="numero";
  }else if(letra=="shift" && caixa=="" && antiga!=letra){
    caixa="shift";
  }else if(antiga!=letra){
    if(caixa=="numero"){
      var number = (parseInt(letra.charCodeAt(0)))-96;
      if(number <=9 && number>=0){
      document.getElementById("caixa-texto").value=number;
      document.getElementById("caixa-braille").value=number;
      responsiveVoice.speak(number.toString(), "Portuguese Female");
      }if(letra=="j"){
      document.getElementById("caixa-texto").value="0";
      document.getElementById("caixa-braille").value="0";
      responsiveVoice.speak("zero", "Portuguese Female");
      }
      if(palavraAtual!=""){
        if(verResultado(0)){
          sortearPalavra();
          document.getElementById("caixa-texto").value="";
          document.getElementById("caixa-braille").value="";
        }else{
          document.getElementById("caixa-texto").value="";
          document.getElementById("caixa-braille").value="";
        }
      }
    }
  else if(caixa=="shift"){
  document.getElementById("caixa-texto").value=letra.toUpperCase();
  document.getElementById("caixa-braille").value="*"+letra.toUpperCase();

  caixa="";
  document.getElementById("braille_img").src=dir+letra+'.jpg';
  responsiveVoice.speak(letra, "Portuguese Female");
  }else if(caixa=="caps"){
  document.getElementById("caixa-texto").value=letra.toUpperCase();
  document.getElementById("caixa-braille").value=letra.toUpperCase();

  document.getElementById("braille_img").src=dir+letra+'.jpg';
  responsiveVoice.speak(letra, "Portuguese Female");
  }
  else if(letra=="erro")
  {
   
    if(palavraAtual!=""){
      verResultado(1);
    }
  }else{
  document.getElementById("caixa-texto").value=letra;
  document.getElementById("caixa-braille").value=letra;

  if(agudo.includes(letra)){
    responsiveVoice.speak(letra+ " com acento agúdo", "Portuguese Female");
  }else if(circunflexo.includes(letra)){
    responsiveVoice.speak(letra+ " com acento circunflexo", "Portuguese Female");
  }else if(til.includes(letra)){
    responsiveVoice.speak(letra+ " com acento til", "Portuguese Female");
  }else if(crase.includes(letra)){
    responsiveVoice.speak(letra+ " com acento crase", "Portuguese Female");
  }else if("!".includes(letra)){
    responsiveVoice.speak("mais", "Portuguese Female");
  }else if("/".includes(letra)){
    responsiveVoice.speak("dividido por", "Portuguese Female");
  }else{
    console.log(letra+" aqui");
    responsiveVoice.speak(letra, "Portuguese Female");
  }
  if(palavraAtual!=""){
    if(verResultado(0)){
      sortearPalavra();
      document.getElementById("caixa-texto").value="";
    }else{
      document.getElementById("caixa-texto").value="";
    }
  }
  }
  } 
  window.setTimeout("clearAntiga()", 700);
  antiga=letra;
  
}

document.addEventListener('keydown', (event) => {
   pressed[event.key] = true;
});
document.addEventListener('keyup', (event) => {
   delete pressed[event.key];
});

//and now write your code
document.addEventListener('keydown', (event) => {
  if(pressed["j"] && pressed["k"] && pressed["s"] && pressed["d"] && pressed["f"] && !pressed['l']){
    letra="q";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["Enter"]){
    var audio1 = new Audio();
    if(document.getElementById("caixa-texto").value.toUpperCase()==palavraAtual){
      audio1.src = "../assets/audio/vinhetas/vitoria.mp3";
      audio1.play();
      console.log("You got IT!");
    }else{
      audio1.src = "../assets/audio/vinhetas/derrota.mp3";
      audio1.play();
    }
    //palavraAtual=sortearPalavra();
      document.getElementById("palavra").innerHTML="PALAVRAA";
      palavraAtual="PALAVRAA";
      document.getElementById("caixa-texto").value="";
      document.getElementById("caixa-braille").value="";
  }
  else if(pressed["Backspace"]){
    var tam = document.getElementById("caixa-texto").value.length;
    if(tam>=1){
    document.getElementById("caixa-texto").value=document.getElementById("caixa-texto").value.substr(0,tam-1);
    document.getElementById("caixa-braille").value=document.getElementById("caixa-braille").value.substr(0,tam-1);
    }
  }else if(pressed["j"] && pressed["k"] && pressed["l"] && pressed["s"] && pressed["f"] && !pressed['d']){
    letra="y";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["l"] && pressed["s"] && pressed["d"] && pressed["f"] && !pressed['j'] && !pressed["k"]){
    letra="v";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["k"] && pressed["l"] && pressed["s"]  && pressed["f"]&& !pressed['d'] && !pressed["j"]){
    letra="z";
    window.setTimeout("lerolero()", 500);
  }else if(!pressed["f"] && !pressed["d"] && pressed["s"] && pressed["j"] && !pressed["k"] && pressed['l']){
    letra="ó";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["f"] && pressed["d"] && pressed["s"] && pressed["j"] && !pressed["k"] && pressed['l']){
    letra="ç";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["k"] && pressed["l"] && pressed["d"] && !pressed['f'] && !pressed["s"]){
    letra="w";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["k"] && pressed["s"] && pressed["d"] && pressed["f"] && !pressed['j'] && !pressed["l"]){
    letra="r";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["k"] && pressed["s"] &&  pressed["f"] && !pressed["d"] &&  !pressed["l"]){
    letra="n";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["k"] && pressed["d"] && pressed["f"]  && !pressed["s"] &&  !pressed["l"]){
    letra="g";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] &&  pressed["s"] && pressed["d"] && pressed["f"] && !pressed["k"] &&  !pressed["l"]){
    letra="p";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["k"] && pressed["s"] && pressed["d"] && !pressed["f"] &&  !pressed["l"]){
    letra="t";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["s"] && pressed["j"] && pressed["k"] && pressed["l"]  && !pressed["d"] &&  !pressed["f"]){
    letra="numero";
    window.setTimeout("lerolero()", 200);
  }else if(pressed["j"] && pressed["l"] && pressed["s"] &&  pressed["f"] && !pressed["d"] &&  !pressed["k"]){
    letra="x";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["l"] && pressed["s"] && pressed["f"] && !pressed["d"] && !pressed["j"] &&  !pressed["k"]){
    letra="u";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["d"] && pressed["j"]  && pressed["k"] && !pressed["s"] && !pressed["f"] && !pressed["l"]){
    letra="j";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["s"] && pressed["d"] && !pressed["f"] && !pressed["k"] && !pressed["l"]){
    letra="s";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["s"] && pressed["d"] && pressed["f"]  && !pressed["j"] &&  !pressed["k"] && !pressed["l"]){
    letra="l";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["d"] && pressed["f"]  && !pressed["s"] &&  !pressed["k"] && !pressed["l"]){
    letra="f";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["k"]  && pressed["s"] && pressed["f"]  && !pressed["d"] &&  !pressed["j"] && !pressed["l"]){
    letra="o";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["s"]  && pressed["f"] && !pressed["d"] && !pressed["k"] && !pressed["l"]){
    letra="m";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["k"] && pressed["d"] && pressed["f"]  && !pressed["s"] && !pressed["j"] && !pressed["l"]){
    letra="h";
    window.setTimeout("lerolero()", 500);
  }else if(!pressed["s"] && !pressed["d"]  && !pressed["l"] && pressed["j"] && pressed["k"] && pressed["f"] ){
    letra="d";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["s"] && pressed["f"] && !pressed["d"] && !pressed["j"] && !pressed["l"] && !pressed["k"]){
    letra="k";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["d"] && !pressed["a"] &&  !pressed["s"] && !pressed["k"] && !pressed["l"]){
    letra="i";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["k"] && pressed["f"] && !pressed["d"] && !pressed["s"] && !pressed["j"] && !pressed["l"]){
    letra="e";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["f"] && !pressed["k"] && !pressed["d"] && !pressed["a"] && !pressed["l"]){
    letra="c";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["d"] && pressed["f"] && !pressed["j"] && !pressed["s"] && !pressed["l"] && !pressed["k"]){
    letra="b";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["j"] && pressed["l"] && !pressed["f"] && !pressed["d"] && !pressed["a"] && !pressed["k"]){
    letra="shift";
    window.setTimeout("lerolero()", 200);
  }else if(pressed["f"] && !pressed["d"] && !pressed["a"] && !pressed["j"] && !pressed["k"] && !pressed["l"]){
    //var voicelist = responsiveVoice.getVoices();
    letra = "a";
    window.setTimeout("lerolero()", 500);
    //responsiveVoice.speak("a", "Portuguese Female");

    //clearInterval(intervalo);

  }else if(pressed[" "]){
    letra = " ";
    caixa="";
    document.getElementById("caixa-texto").value=document.getElementById("caixa-texto").value.concat(letra);
    document.getElementById("caixa-braille").value=document.getElementById("caixa-braille").value.concat(letra);

  }else if(pressed["f"] && pressed["d"] && pressed["s"] && !pressed["j"] && pressed["k"] && pressed['l']){
    letra="á";
    window.setTimeout("lerolero()", 500);
  }
  else if(pressed["f"] && pressed["d"] && pressed["s"] && pressed["j"] && pressed["k"] && pressed['l']){
    letra="é";
    window.setTimeout("lerolero()", 500);
  }
  else if(!pressed["f"] && !pressed["d"] && pressed["s"] && pressed["j"] && !pressed["k"] && !pressed['l']){
    letra="í";
    window.setTimeout("lerolero()", 500);
  }
  else if(!pressed["f"] && pressed["d"] && pressed["s"] && pressed["j"] && pressed["k"] && pressed['l']){
    letra="ú";
    window.setTimeout("lerolero()", 500);
  }
  else if(pressed["f"] && !pressed["d"] && !pressed["s"] && !pressed["j"] && !pressed["k"] && pressed['l']){
    letra="â";
    window.setTimeout("lerolero()", 500);
  }
  else if(pressed["f"] && pressed["d"] && !pressed["s"] && !pressed["j"] && !pressed["k"] && pressed['l']){
    letra="ê";
    window.setTimeout("lerolero()", 500);
  }
  else if(pressed["f"] && !pressed["d"] && !pressed["s"] && pressed["j"] && pressed["k"] && pressed['l']){
    letra="ô";
    window.setTimeout("lerolero()", 500);
  }
  else if(!pressed["f"] && !pressed["d"] && pressed["s"] && pressed["j"] && pressed["k"] && !pressed['l']){
    letra="ã";
    window.setTimeout("lerolero()", 500);
  }
  else if(!pressed["f"] && pressed["d"] && !pressed["s"] && pressed["j"] && !pressed["k"] && pressed['l']){
    letra="õ";
    window.setTimeout("lerolero()", 500);
  }else if(!pressed["f"] && pressed["d"] && !pressed["s"] && !pressed["j"] && !pressed["k"] && pressed['l']){
    letra="?";
    caixa="";
    window.setTimeout("lerolero()", 500);
  }else if(pressed["f"] && pressed["d"] && !pressed["s"] && pressed["j"] && !pressed["k"] && pressed['l']){
    letra="à";
    window.setTimeout("lerolero()", 500);
  }else if(!pressed["f"] && pressed["d"] && pressed["s"] && !pressed["j"] && pressed["k"] && pressed['l']){
    letra="=";
    window.setTimeout("lerolero()", 500);
  }else if(!pressed["f"] && !pressed["d"] && pressed["s"] && !pressed["j"] && !pressed["k"] && !pressed['l']){
    letra=".";
    caixa="";
    console.log(".");
    window.setTimeout("lerolero()", 500);
  }else if(!pressed["f"] && pressed["d"] && pressed["s"] && !pressed["j"] && pressed["k"] && !pressed['l']){
    letra="!";//MAIS
    console.log("+");
    window.setTimeout("lerolero()", 500);
  }else if(!pressed["f"] && pressed["d"] && !pressed["s"] && !pressed["j"] && pressed["k"] && pressed['l']){
    letra="/";
    console.log("/");
    window.setTimeout("lerolero()", 500);
  }else if(pressed["f"] && !pressed["d"] && !pressed["s"] && !pressed["j"] && !pressed["k"] && pressed['l']){
    letra="-";
    console.log("-");
    window.setTimeout("lerolero()", 500);
  }else if(!pressed["f"] && pressed["d"] && pressed["s"] && !pressed["j"] && !pressed["k"] && pressed['l']){
    letra="*";
    console.log("*");
    window.setTimeout("lerolero()", 500);
  }
  
  else if(!pressed["f"] && pressed["d"] && !pressed["s"] && !pressed["j"] && !pressed["k"] && !pressed['l']){
    letra=",";
    caixa="";
    console.log(",");
    window.setTimeout("lerolero()", 500);
  }else if(!pressed["f"] && pressed["d"] && pressed["s"] && !pressed["j"] && !pressed["k"] && !pressed['l']){
    letra=";";
    caixa="";
    window.setTimeout("lerolero()", 500);
  }
  else if(!pressed["f"] && !pressed["d"] && pressed["s"] && !pressed["j"] && !pressed["k"] && pressed['l']){
    letra="-";
    window.setTimeout("lerolero()", 500);
  }else if(event.ctrlKey){
   responsiveVoice.speak("Digite "+palavraAtual, "Portuguese Female");
  }else if(pressed["'"]){
    responsiveVoice.speak("Pontos: "+dica[atual], "Portuguese Female");
  }else if(pressed["Escape"]){
    console.log("esc");
    window.location.replace("../index.html");

  }else if(pressed["4"]){
    responsiveVoice.speak("Digite tecla esc para sair, tecla aspas simples para ouvir os pontos do caractere solicitado, e tecla control para repetir o caractere solicitado", "Portuguese Female");

  }
   
  
  
  else{
    console.log(pressed);
    letra = "erro";
    window.setTimeout("lerolero()", 500);
    //console.log("teste3");  
  }
});
