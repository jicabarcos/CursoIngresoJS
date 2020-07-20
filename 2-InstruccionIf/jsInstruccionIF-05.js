function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (!(edad >= 13 && edad <= 17)){
		
		alert("No es adolescente.");
	
	}

	alert("Fin de la función.")

}//FIN DE LA FUNCIÓN