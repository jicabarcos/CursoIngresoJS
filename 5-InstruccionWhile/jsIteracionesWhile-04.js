/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;
	
	num = parseInt(prompt("Ingrese un número entre 0 y 9."));

	while((num < 0) || (num > 9) || isNaN(num)){

		num = prompt("Número incorrecto, debe estar entre 0 y 9.");

	}

	document.getElementById("txtIdNumero").value = num;

	/*
	let flag;
	flag = 0;

	do{

		num = parseInt(prompt("Ingrese un número entre 0 y 9:"));

		if((num >= 0) && (num <= 9)){

			document.getElementById("txtIdNumero").value = num;
			flag = 1;

		}
		else{

			alert("Numero incorrecto, debe estar entre 0 y 9.");

		}

	}while (flag == 0);
	*/

	
}//FIN DE LA FUNCIÓN