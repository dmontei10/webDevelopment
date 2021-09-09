//Função que seleciona os filmes favoritos
function mudarCor(obj){
	
  if(obj.style.backgroundColor == "rgb(240, 0, 0)"){
    obj.style.backgroundColor = "rgb(255, 255, 255)";
  }else{
    obj.style.backgroundColor = "rgb(240, 0, 0)";
  }
}

//--------------------------------------------------------------------------------------

function showHide(){
  var x = document.getElementById("passLogin");
  
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showAtor(){
	document.getElementById('atoresUser').style.display = 'block';
}

function showRealizador(){
	document.getElementById('realizadoresUser').style.display = 'block';
}

function showEstudio(){
	document.getElementById('estudiosUser').style.display = 'block';
}

function showCinema(){
	document.getElementById('cinemasUser').style.display = 'block';
}

function showFilme(){
	document.getElementById('filmesUser').style.display = 'block';
}

