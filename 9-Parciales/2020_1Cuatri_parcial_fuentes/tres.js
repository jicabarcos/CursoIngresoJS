function mostrar()
{
	let ingresos, nombre, edad, sexo, estadoCivil, temp, mayorTemp, nombreMayorTemp;
	let promSoltero;
	let flagTemp = 0;
	let contMayoresViudos = 0;
	let contHombresSoltViud = 0;
	let contViejosCalientes = 0;
	let sumaEdad = 0;
	let contHombresSolteros = 0;
 // let respuesta;        ***PARA HACERLO CON DO-WHILE***

	// Ingreso de datos
	ingresos = prompt("Cuantas personas viajan?");

	//do{
	for (i = 0 ; i < ingresos ; i++){

		alert(`PASAJERO N°${i + 1}`)

		nombre = prompt("Ingrese nombre:");


		edad = parseInt(prompt("Ingrese edad:"));


		sexo = prompt("Ingrese sexo:");
		sexo = sexo.toUpperCase();

		while ((sexo != "M") && (sexo != "F")){

			sexo = prompt('Debe ser "M" o "F". Vuelva a ingresar:');	
			sexo = sexo.toUpperCase();
	
		}


		estadoCivil = prompt("Ingrese estado civil:");

		while ((estadoCivil != "casado") && (estadoCivil != "soltero") && (estadoCivil != "viudo")){

			estadoCivil = (prompt('Debe elegir entre "casado", "soltero" y "viudo". Vuelva a ingresar:'));
	
		}


		temp = parseInt(prompt("Ingrese temperatura corporal:"));

		// Persona con mas temperatura
		if ((flagTemp == 0) || (temp > mayorTemp)){

			mayorTemp = temp;
			nombreMayorTemp = nombre;
			flagTemp = 1;

		}

		// Mayores viudos
		if ((edad >= 18) && (estadoCivil == "viudo")){

			contMayoresViudos++;

		}

		// Hombres solteros o viudos
		if ((sexo == "M") && ((estadoCivil == "soltero") || (estadoCivil == "viudo"))){

			contHombresSoltViud++;

		}

		// Viejos calientes
		if ((edad > 60) && (temp > 38)){

			contViejosCalientes++;

		}

		// Promedio edad hombres solteros
		if ((sexo == "M") && (estadoCivil == "soltero")){

			sumaEdad += edad;
			contHombresSolteros ++;

		}

		// respuesta = prompt('Escriba "no" para dejar de ingresar, de lo contrario ingresará un nuevo pasajero.');

	}
	//} while (respuesta != "no");

	// MUESTRA DE DATOS

	// A
	alert(`La persona con mayor temperatura corporal es ${nombreMayorTemp} con ${mayorTemp}°.`);

	// B
	alert(`Hay ${contMayoresViudos} mayores de edad que están viudos.`);

	// C
	alert(`Hay ${contHombresSoltViud} hombres solteros o viudos.`);

	// D
	alert(`Hay ${contViejosCalientes} personas de la tercera edad con más de 38° de temperatura.`);

	// E
	if (contHombresSolteros != 0){

		promSoltero = sumaEdad / contHombresSolteros;
		promSoltero = promSoltero;
		alert(`El promedio de edad de los hombres solteros es de ${promSoltero} años.`);

	}
	else {

		alert(`No hay hombres solteros.`)

	}
}
