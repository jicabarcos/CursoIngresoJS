function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;
	
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

}//FIN DE LA FUNCIÓN