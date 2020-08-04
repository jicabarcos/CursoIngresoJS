function mostrar()
{

	let limite, div;

	limite = parseInt(prompt("Ingrese el número límite:"));
	div = 0;
	
	for(let i = 1; i <= limite; i++){

		if ((limite % i) == 0){

			console.log(i);
			div++;

		}
		
	}	

	console.log("Los divisores son " + div);

}//FIN DE LA FUNCIÓN