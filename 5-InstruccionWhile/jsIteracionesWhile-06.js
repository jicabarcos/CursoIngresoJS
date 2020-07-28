function mostrar()
{
	let suma, i, num, prom;

	suma = 0;
	i = 0;
	/*       SIN BUCLE WHILE
	suma += parseInt(prompt("Ingrese un numero: "));
	suma += parseInt(prompt("Ingrese un numero: "));
	suma += parseInt(prompt("Ingrese un numero: "));
	suma += parseInt(prompt("Ingrese un numero: "));
	suma += parseInt(prompt("Ingrese un numero: "));
	
	document.getElementById("txtIdSuma").value = suma;

	document.getElementById("txtIdPromedio").value = suma / 5;
	*/
	while(i < 5){

		num = parseInt(prompt("Ingrese un numero: "));
		suma += num;
		i++;

	}

	prom = suma / i;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = prom;
	
}//FIN DE LA FUNCIÓN