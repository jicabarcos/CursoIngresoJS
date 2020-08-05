
function mostrar()
{

	let tipo, precio, cantidad, marca, fabricante;
	let prom, precioAlcBar, fabAlcBar, mayorCant, tipoMayorCant, precioMayorCant;
	let cantJab = 0;
	let cantAlcBar = 0;
	let flagAlc = 0;

	// generar un bucle que itere 5 veces (for)
	// dentro del bucle
	// pido los datos de cada producto (tipo, cantidad, precio, marca, fabricante)
	// debo validar los datos

	// Ingreso de datos
	for(let i = 1 ; i <=2 ; i++){

		alert(`Producto N° ${i}:`);

		tipo = prompt("Ingrese tipo de producto:");
		while (!((tipo == "barbijo") || (tipo == "jabon") || (tipo == "alcohol"))){

			alert('Sólo puede ingresar "barbijo", "jabon" o "alcohol".');
			tipo = prompt("Vuelva a ingresar el tipo de producto:");

		}

		precio = parseInt(prompt("Ingrese precio:"));

		while ((precio < 100) || (precio > 300)){

			alert("Debe ser un precio entre 100 y 300.");
			precio = prompt("Vuelva a ingresar el precio:")

		}

		cantidad = parseInt(prompt("Ingrese cantidad:"));

		while ((cantidad <= 0) || (cantidad > 1000)){

			alert("Debe ser una cantidad entre 1 y 1000");
			cantidad = prompt("Vuelva a ingresar la cantidad:");

		}

		marca = prompt("Ingrese marca:");
		fabricante = prompt("Ingrese fabricante:");

		// Alcohol barato
		if (flagAlc == 0){

			precioAlcBar = precio;
			cantAlcBar = cantidad;
			fabAlcBar = fabricante;
			flagAlc = 1;
			
		}
		if ((tipo == "alcohol") && (precio < precioAlcBar)){

			precioAlcBar = precio;
			cantAlcBar = cantidad;
			fabAlcBar = fabricante;

		}

		// Tipo con más unidades
		/*switch(tipo){

			case "barbijo":

				cantBarb = cantBarb + cantidad;
				break;

			case "jabon":
				
				cantJab = cantJab + cantidad;
				break;

			case "alcohol":

				cantAlc = cantAlc + cantidad;
				break;

		}

			precioMayorCant = precio;
			mayorCant = cantidad;
			tipoMayorCant = tipo;
			flagTipo = 1;

		}
		if ()*/
		
		// Cantidad de jabones
		if (tipo == "jabon"){

			cantJab += cantidad;

		}

	}

	// A
	alert(`Usted está llevando ${cantAlcBar} unidades del alcohol más barato, fabricado por ${fabAlcBar}.`)	

	// punto B
	// analizo la mayor cant y guardo el tipo de prod que tiene esa cant y la cant
	// prom = precio * cant

	// C
	alert(`Usted está llevando ${cantJab} unidades de jabón.`)


	// fuera del bucle
	// informar los datos solicitados




}
