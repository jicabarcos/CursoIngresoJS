function mostrar()
{

	let num;

	num = parseInt(prompt("Ingrese un número:"));
	div = 0;
	
	for(let i = 1; i <= num; i++){

		if ((num % i) == 0){

			div++;

		}
		
	}

	if (div == 2){

		alert("El número " + num + " es primo.");

	}
	else{

		alert("El número " + num + " no es primo.");

	}	

}//FIN DE LA FUNCIÓN