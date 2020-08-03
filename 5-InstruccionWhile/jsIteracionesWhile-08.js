/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	let num, suma, prod, flag, seguir;
	
	suma = 0;
	prod = 1;
	flag = 0;

	do{

		num = parseInt(prompt("Ingrese un número:"));

		if (num >= 0){

			suma = suma + num;

		}
		else{

			prod = prod * num;
			flag = 1;

		}

		seguir = prompt('Ingrese "no" si no quiere ingresar más números.');

	} while (seguir != "no");

	document.getElementById("txtIdSuma").value = suma;

	if (i == 0){

		prod = 0;

	}

	document.getElementById("txtIdProducto").value = prod;

}//FIN DE LA FUNCIÓN