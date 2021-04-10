 var valor = 0;

	function trocarImagem(){
		if (valor == 0){
			document.getElementById("imagem1").src = "imagens/mario.png";
			valor = valor+1;
		}else if(valor==1){
			document.getElementById("imagem1").src = "imagens/arrum.jpg";
			valor = valor+1;
		}else if(valor==2){
			document.getElementById("imagem1").src = "imagens/ArrumandoPc.png";
			valor = valor+1;
		}else if(valor==3){
			document.getElementById("imagem1").src = "imagens/pc.png";
			valor = 0;
		}
	}      