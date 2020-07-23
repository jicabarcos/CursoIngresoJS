/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto, contadorIntentos, flag;

contadorIntentos = 0;

function comenzar()
{
  
  numeroSecreto = Math.round(Math.random() * (100 - 1) + 1);
  alert("Listo, ya pensé un número, tratá de adivinarlo...");
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  document.getElementById("txtIdNumero").focus;
  flag = 1;
  contadorIntentos = 0;

}

function verificar()
{

  let numero;

  if (flag == 0){

    alert("Debés presionar primero el botón comenzar.");
      
  }
  
  else{

    numero = parseInt(document.getElementById("txtIdNumero").value);
    contadorIntentos++;
    document.getElementById("txtIdIntentos").value = contadorIntentos;

    if (numero == numeroSecreto){

		alert(`Felicitaciones!!! Ganaste en ${contadorIntentos} intentos.`);
		switch(contadorIntentos){

			case 1:
		
				alert("Usted es psíquico.");
				break;
			
			case 2:
		
				alert("Excelente percepción.");
				break;
		
			case 3:
		
				alert("Esto es suerte.");
				break;
		
			case 4:
		
				alert("Excelente técnica.");
				break;
				
			case 5:
			
				alert("Usted está en la media.");
				break;
			
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			
				alert("Falta técnica.");
				break;
			
			default:
		
				alert("Afortunado en el amor!!");
				break;
		
		}

		alert('Presione "Comenzar" para empezar de nuevo');
		flag = 0; // vuelvo a setear el flag a 0 para volver a utilizar comenzar
	  
	  

    }

    else if (numero > numeroSecreto){

      alert("Se pasó...");

    }

    else{

      alert("Le falta...");

    }

    document.getElementById("txtIdNumero").value = "";
    document.getElementById("txtIdNumero").focus() = "";

	
 
	}

  
	
}