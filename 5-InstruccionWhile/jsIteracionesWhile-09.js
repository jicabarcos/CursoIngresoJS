/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	

	let num, seguir, max, min;

	num = parseInt(prompt("Ingrese un número:"));
	
	max = num;
	min = num;

	seguir = prompt('Ingrese "no" si no quiere ingresar más números.');

	while(seguir != "no"){

		num = parseInt(prompt("Ingrese un número:"));
		
		if (num > max){

			max = num;

		}
		else if (num < min){

			min = num;
			
		}

		seguir = prompt('Ingrese "no" si no quiere ingresar más números.');

	}

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;

}

/*  CLASE

	let numero;
    let numMax;
    let numMin;
    let seguir;
    let flag = 0;
    
    do{
      
        numero = parseInt(prompt("Ingrese un numero"));

        if (flag = 0 || numero > numMax){
            numMax = numero;
        }
        if (flag = 0 || numero < numMin){
			numMin = numero;
			flag = 1;
        }
        seguir = prompt("Desea seguir?")

    } while (seguir == s);

    document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;
*/