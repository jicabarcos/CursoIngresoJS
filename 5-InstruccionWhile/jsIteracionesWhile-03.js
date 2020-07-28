/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("ingrese el número clave.");

	while (clave != "utn750"){

		alert("La clave ingresada es incorrecta. Vuelva a intentar.");
		clave = prompt("ingrese el número clave.");
	}

	alert("Felicitaciones, clave correcta!");
	
}//FIN DE LA FUNCIÓN
