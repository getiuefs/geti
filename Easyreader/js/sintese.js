var vozativa = true;

function sintetizar(texto){
	if(vozativa){
		responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
		responsiveVoice.speak(texto);
	}
	
}


function somOnOff(){
	console.log("som");
	if(!vozativa){
		document.getElementById("imgsom").src = 'img/imglayout/soundon.png';
	}
	else{
		document.getElementById("imgsom").src = 'img/imglayout/soundoff.png';
	}
	vozativa = !vozativa;
}
