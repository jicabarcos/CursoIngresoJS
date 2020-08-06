
function mostrar() {

	let tipo, precio, cantidad, marca, fabricante, precioAlcBar, fabAlcBar;
	let promMayorCant, tipoMayorCant;
	let cantAlcBar = 0;
	let flagAlc = 0;
	let acumBarb = 0;
	let acumJab = 0;
	let acumAlc = 0;
	let contadorAlcohol = 0;
	let contadorJabon = 0;
	let contadorBarbijo = 0;

	// generar un bucle que itere 5 veces (for)
	// dentro del bucle
	// pido los datos de cada producto (tipo, cantidad, precio, marca, fabricante)
	// debo validar los datos

	// Ingreso de datos
	for (let i = 0; i < 5; i++) {

		alert(`PRODUCTO N° ${i + 1}:`);

		tipo = prompt('Ingrese tipo de producto ("barbijo", "jabon" o "alcohol"):');
		tipo = tipo.toLowerCase();

		while (!((tipo == "barbijo") || (tipo == "jabon") || (tipo == "alcohol"))) {

			alert('Debe ser un tipo de producto válido ("barbijo", "jabon" o "alcohol").');
			tipo = prompt("Vuelva a ingresar el tipo de producto:");
			tipo = tipo.toLowerCase();

		}


		precio = parseFloat(prompt("Ingrese precio (entre 100 y 300):"));

		while ((precio < 100) || (precio > 300) || (isNaN(precio))) {

			alert("Debe ser un precio válido (entre 100 y 300).");
			precio = parseFloat(prompt("Vuelva a ingresar el precio:"));

		}


		cantidad = parseInt(prompt("Ingrese cantidad (entre 1 y 1000):"));

		while ((cantidad <= 0) || (cantidad > 1000) || (isNaN(cantidad))) {

			alert("Debe ser una cantidad válida (entre 1 y 1000).");
			cantidad = parseInt(prompt("Vuelva a ingresar la cantidad:"));

		}


		marca = prompt("Ingrese marca:");


		fabricante = prompt("Ingrese fabricante:");



		// Alcohol barato (A)
		/*if (flagAlc == 0){

			precioAlcBar = precio;
			cantAlcBar = cantidad;
			fabAlcBar = fabricante;
			flagAlc = 1;
			
		}
		if ((tipo == "alcohol") && (precio < precioAlcBar)){

			cantAlcBar = cantidad;
			fabAlcBar = fabricante;

		}*/

		// Acumuladores y contadores, en el caso del alcohol, veo también el más barato
		switch (tipo) {

			case "barbijo":

				acumBarb += cantidad;
				contadorBarbijo++;
				break;

			case "jabon":

				acumJab += cantidad;
				contadorJabon++;
				break;

			case "alcohol":

				acumAlc += cantidad;
				contadorAlcohol++;
				if ((flagAlc == 0) || (precio < precioAlcBar)) {

					precioAlcBar = precio;
					cantAlcBar = cantidad;
					fabAlcBar = fabricante;
					flagAlc = 1;

				}
				break;

		}


		// Cantidad de jabones (C)
		/*if (tipo == "jabon"){

			acumJab += cantidad;

		}*/

	} // Fin del for

	if ((acumAlc > acumBarb) && (acumAlc > acumJab)) {

		tipoMayorCant = "alcohol";
		promMayorCant = acumAlc / contadorAlcohol;

	}
	else if ((acumBarb >= acumAlc) && (acumBarb > acumJab)) {

		tipoMayorCant = "barbijo";
		promMayorCant = acumBarb / contadorBarbijo;

	}
	else {

		tipoMayorCant = "jabon";
		promMayorCant = acumJab / contadorJabon;

	}


	// A
	if (flagAlc == 0) {

		alert("A - No se compró alcohol")

	}
	else {

		alert(`A - Usted está llevando ${cantAlcBar} unidades del alcohol más barato ($${precioAlcBar}), fabricado por ${fabAlcBar}.`);

	}

	// B
	alert(`B - El ${tipoMayorCant} es el tipo de producto con más unidades. Promedio de unidades por compra: ${promMayorCant}.`);

	// C
	alert(`C - Usted está llevando ${acumJab} unidades de jabón.`);

	// fuera del bucle
	// informar los datos solicitados

}
