function mostrar()
{
	
	let limite, pares;

	limite = parseInt(prompt("Ingrese el número límite:"));
	pares = 0;
	
	for(let i = 1; i <= limite; i++){

		if ((i % 2) == 0){

			console.log(i);
			pares++;

		}
		
	}	

	console.log("Los pares son " + pares);

}//FIN DE LA FUNCIÓN