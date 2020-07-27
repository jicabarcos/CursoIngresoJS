function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	// SWITCH

	switch(destino){
	
		case "Bariloche":
		case "Ushuaia":
			
			alert("Frío")
			break;
		
		case "Cataratas":
		case "Mar del plata":
		
			alert("Calor");
			break;
	
	}

	// IF --- cambiando el select por un input --> <input type="text" id ="txtIdDestino" placeholder="Ingrese destino" />
/*
	if ((destino == "Bariloche") || (destino == "Ushuaia")){

		alert("Frío");
	
	}

	else if ((destino == "Cataratas") || (destino == "Mar del plata")){

		alert("Calor");

	}

	else{

		alert("Ingrese un destino válido");

	}
	*/
}//FIN DE LA FUNCIÓN