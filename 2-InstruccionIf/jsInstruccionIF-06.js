function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13){	
		
		alert("Es niño.");
		
	}
	else if (edad < 18){

		alert("Es adolescente.");

	}
	else {

		alert("Es adulto.");

	}
	alert("Fin de la función.");



}//FIN DE LA FUNCIÓN