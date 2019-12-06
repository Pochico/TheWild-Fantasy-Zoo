


function desplegarImagen(x){
	var ruta = x.src;
	var ruta2 = ruta.replace('.jpg', '1.jpg');
	var alter = x.alt;
	document.querySelector('#Desplegador').src = ruta2;
	document.querySelector('#Desplegador').alt = alter;
	document.querySelector('#Desplegador').classList.toggle('desplegable');
}

function cerrarDesplegable(x){
	x.classList.toggle('desplegable');
	x.src = "";
	x.alt = "";
}

function presentacionInicio(){
	var numIndice = Math.floor(Math.random()*5)+1;
	document.querySelector('#indice'+numIndice).style.display = 'flex';

	setTimeout(function(){ document.querySelector('#indice'+numIndice).style.opacity = 1; }, 350);
}

function diasReserva(x){
	var dias = x.value;
	if(x.id == 'rangoNormal'){
		document.querySelector('#diasSeleccionadosNormal').textContent = dias;
	}else if(x.id == 'rangoPremium'){
		document.querySelector('#diasSeleccionadosPremium').textContent = dias;
	}
}



function seleccionarContacto(x){
	var formus = document.querySelectorAll('.tipoContacto');
	for(i=0; i<3; i++){
		formus[i].style.transform = 'scale(1)';
	}
	x.style.transform = 'scale(1.05)';

	if (x.id === 'entradaPremium'){
		document.querySelector('#premiumTitulo').style.textShadow = '0px 0px 20px rgba(230,205,138, 1)';
		document.querySelector('#premiumTitulo').style.color = 'goldenrod';
		
		document.querySelector('#normalTitulo').style.textShadow = 'none';
		document.querySelector('#normalTitulo').style.color = '#d2b387';

		document.querySelector('#info').style.textShadow = 'none';
		document.querySelector('#info').style.color = '#d2b387';

		document.querySelector('#comPremium').style.boxShadow = '0px 0px 20px rgba(230,205,138, 1)';
		document.querySelector('#comNormal').style.boxShadow = 'none';
		document.querySelector('#solInfo').style.boxShadow = 'none';		

	}else if(x.id === 'entradaNormal'){
		document.querySelector('#premiumTitulo').style.textShadow = 'none';
		document.querySelector('#premiumTitulo').style.color = '#d2b387';

		document.querySelector('#normalTitulo').style.textShadow = '0px 0px 20px rgba(230,205,138, 1)';
		document.querySelector('#normalTitulo').style.color = 'goldenrod';

		document.querySelector('#info').style.textShadow = 'none';
		document.querySelector('#info').style.color = '#d2b387';

		document.querySelector('#comPremium').style.boxShadow = 'none';
		document.querySelector('#comNormal').style.boxShadow = '0px 0px 20px rgba(230,205,138, 1)';
		document.querySelector('#solInfo').style.boxShadow = 'none';

	}else if(x.id === 'informacion'){
		document.querySelector('#premiumTitulo').style.textShadow = 'none';
		document.querySelector('#premiumTitulo').style.color = '#d2b387';

		document.querySelector('#normalTitulo').style.textShadow = 'none';
		document.querySelector('#normalTitulo').style.color = '#d2b387';

		document.querySelector('#info').style.textShadow = '0px 0px 20px rgba(230,205,138, 1)';
		document.querySelector('#info').style.color = 'goldenrod';

		document.querySelector('#comPremium').style.boxShadow = 'none';
		document.querySelector('#comNormal').style.boxShadow = 'none';
		document.querySelector('#solInfo').style.boxShadow = '0px 0px 20px rgba(230,205,138, 1)';
	}
}