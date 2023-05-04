
localStorage.setItem("tempo1", "0");
localStorage.setItem("tempo2", "0");
localStorage.setItem("tempo3", "0");

function compararTempo(tempo1, tempo2)
{
    tempo1 = tempo1.split(":");
    tempo2 = tempo2.split(":");

    var d = new Date();
    var data1 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), tempo1[0], tempo1[1], tempo1[2]);
    var data2 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), tempo2[0], tempo2[1], tempo2[2]);
    return data1 < data2;
};

function ranking(){
	console.log("ranking foi chamado");
	var tempoatual = document.getElementById('lbtempo').value; 
	
	if(nivel == 1){
		if(localStorage.getItem("tempo1") != 0){
			tempo1 = localStorage.getItem("tempo1");
			if(compararTempo(tempoatual, tempo1)){
				localStorage.setItem("tempo1", tempoatual);
				document.getElementById('lbfacil').value = "Melhor tempo no nivel fácil:  " + tempoatual;
				document.getElementById('lbfacil').name = tempoatual;
			}
		}
		else{
			localStorage.setItem("tempo1", tempoatual);
			document.getElementById('lbfacil').value = "Melhor tempo no nivel fácil:  " + tempoatual;	
			document.getElementById('lbfacil').name = tempoatual;			
		}
	}
	else if (nivel == 2){
		console.log("nivel igual a 2");
		if(localStorage.getItem("tempo2") != 0){
			tempo2 = localStorage.getItem("tempo2");
			if(compararTempo(tempoatual, tempo2)){
				localStorage.setItem("tempo2", tempoatual);
				document.getElementById('lbintermediario').value = "Melhor tempo no nivel intermediário:  " + tempoatual;
				document.getElementById('lbintermediario').name = tempoatual;
			}
		}
		else{
			localStorage.setItem("tempo2", tempoatual);
			document.getElementById('lbintermediario').value = "Melhor tempo no nivel intermediário:  " + tempoatual;
			document.getElementById('lbintermediario').name = tempoatual;
		}
	}
	else{
		if(localStorage.getItem("tempo3") != 0){
			tempo3 = localStorage.getItem("tempo3");
			if(compararTempo(tempoatual, tempo3)){
				localStorage.setItem("tempo3", tempoatual);
				document.getElementById('lbdificil').value = "Melhor tempo no nivel difícil:  " +  tempoatual;
				document.getElementById('lbdificil').name = tempoatual;
			}
		}
		else{
			localStorage.setItem("tempo3", tempoatual);	
			document.getElementById('lbdificil').value = "Melhor tempo no nivel difícil:  " + tempoatual;
			document.getElementById('lbdificil').name = tempoatual;
		}

	}	
	
}