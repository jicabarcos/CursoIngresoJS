/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{

	let edad, sexo, estadoCivil, sueldoBruto, legajo, nacionalidad;


	// Ingreso de datos
	edad = parseInt(prompt("Ingrese edad:"));

	while ((edad < 18) || (edad > 90) || (isNaN(precio))){

		edad = parseInt(prompt("Debe ser entre 18 y 90 inclusive. Vuelva a ingresar:"));

	}


	sexo = prompt("Ingrese sexo:");
	sexo = sexo.toUpperCase();
	

	while ((sexo != "M") && (sexo != "F")){

		sexo = prompt('Debe ser "M" o "F". Vuelva a ingresar:');	
		sexo = sexo.toUpperCase();

	}


	estadoCivil = parseInt(prompt("Ingrese estado civil:"));

	while ((estadoCivil < 1) || (estadoCivil > 4) || (isNaN(precio))){

		estadoCivil = parseInt(prompt("Debe elegir una de las opciones del 1 al 4. Vuelva a ingresar:"));

	}

	
	sueldoBruto = parseInt(prompt("Ingrese sueldo bruto:"));

	while (sueldoBruto < 8000){

		sueldoBruto = parseInt(prompt("No puede ser menor de 8000. Vuelva a ingresar:"));

	}
	

	legajo = parseInt(prompt("Ingrese número de legajo:"));

	while ((legajo < 1000) || (legajo > 9999) || (isNaN(precio))){

		legajo = parseInt(prompt("Debe ser un número de 4 cifras, sin ceros a la izquierda. Vuelva a ingresar:"));

	}
	

	nacionalidad = prompt("Ingrese nacionalidad:");
	nacionalidad = nacionalidad.toUpperCase();

	while ((nacionalidad != "A") && (nacionalidad != "E") && (nacionalidad != "N")){

		nacionalidad = prompt('Debe ser "A", "E" o "N". Vuelva a ingresar:');
		nacionalidad = nacionalidad.toUpperCase();

	}
	

	// Mostrar datos en pantalla
	document.getElementById("txtIdEdad").value = edad;
	
	switch(sexo){

		case "M":

			document.getElementById("txtIdSexo").value = "Masculino";
			break;
		
		case "F":

			document.getElementById("txtIdSexo").value = "Femenino";
			break;

	}
	
	switch(estadoCivil){

		case 1:
			
			document.getElementById("txtIdEstadoCivil").value =  "Soltere";
			break;

		case 2:
			
			document.getElementById("txtIdEstadoCivil").value =  "Casade";
			break;

		case 3:
			
			document.getElementById("txtIdEstadoCivil").value =  "Divorciade";
			break;

		case 4:
			
			document.getElementById("txtIdEstadoCivil").value =  "Viude";
			break;
		
	}

	document.getElementById("txtIdSueldo").value = sueldoBruto;

	document.getElementById("txtIdLegajo").value = legajo;

	switch(nacionalidad){

		case "A":
			
			document.getElementById("txtIdNacionalidad").value =  "Argentine";
			break;

		case "E":
			
			document.getElementById("txtIdNacionalidad").value =  "Extranjere";
			break;

		case "N":
			
			document.getElementById("txtIdNacionalidad").value =  "Nacionalizade";
			break;

	}

}
