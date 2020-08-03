/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese clave.");

	while (clave != "utn750"){

		clave = prompt("La clave ingresada es incorrecta. Vuelva a intentar.");
		
	}

	alert("Felicitaciones, clave correcta!");
	
}//FIN DE LA FUNCIÓN
