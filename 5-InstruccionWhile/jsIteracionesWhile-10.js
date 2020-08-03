/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let num, flag, sumaPos, sumaNeg, contPos, contNeg, contCero, cantPar, promPos, promNeg, diferencia, seguir;

	flag = 0;
	sumaPos = 0;
	sumaNeg = 0;
	cantPos = 0;
	cantNeg = 0;
	cantCero = 0;
	cantPar = 0;

	do{

		num = parseInt(prompt("Ingrese un numero"));

		if (num > 0){

			sumaPos += num;
			cantPos ++;
			if ((num % 2) == 0){

				cantPar ++;

			}

		}
		else if (num < 0){

			sumaNeg += num;
			cantNeg ++;
			if ((num % 2) == 0){

				cantPar ++;

			}

		}
		else{

			cantCero++;

		}

		seguir = prompt('Ingrese "x" si desea terminar.');

	} while (seguir != "x");

	promPos = sumaPos / cantPos;
	promNeg = sumaNeg / cantNeg;
	diferencia = sumaPos + sumaNeg;

	document.write("Suma de negativos: " + sumaNeg);
	document.write("</br>Suma de positivos: " + sumaPos);
	document.write("</br>Cantidad de negativos: " + cantNeg);
	document.write("</br>Cantidad de positivos: " + cantPos);
	document.write("</br>Cantidad de ceros: " + cantCero);
	document.write("</br>Cantidad de pares: " + cantPar);
	document.write("</br>Pormedio de positivos: " + promPos);
	document.write("</br>Promedio de negativos: " + promNeg);
	document.write("</br>Diferencia entre positivos y negativos: " + diferencia);

}//FIN DE LA FUNCIÓN