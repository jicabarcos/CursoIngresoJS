/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
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