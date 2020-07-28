/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var i, suma, cantIngresos, num, prom;

	i = 0;
	suma = 0;

	cantIngresos = parseInt(prompt("Cuántos números desea ingresar?"));

	while(i < cantIngresos){

		num = parseInt(prompt("Ingrese un numero: "));
		suma += num;
		i++;

	}

	prom = suma / cantIngresos;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = prom;

}//FIN DE LA FUNCIÓN