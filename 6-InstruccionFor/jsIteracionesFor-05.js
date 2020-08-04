function mostrar()
{
	let num;

	num = 0;

	for( ; num != 9 ; ){

		num = parseInt(prompt("Ingrese un número (9 para salir)"));
		if(num == 9){

			break;

		}

		alert("Usted ingresó el número " + num);

	}	

}//FIN DE LA FUNCIÓN