/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let rand;

function comenzar()
{
    
    rand = Math.round(Math.random() * 2 + 1);
    
    switch(rand){

        case 1:

            rand = "Piedra";
            break;
        
        case 2:

            rand = "Papel";
            break;

        default:

            rand = "Tijera";
        
    }
}//FIN DE LA FUNCIÓN
function piedra()
{

    alert("Pulsaste piedra.");
    if (rand == "Piedra"){
        alert(`La máquina eligió ${rand} ---> Empate.`);
    }
    else if(rand == "Papel"){
        alert(`La máquina eligió ${rand} ---> Perdiste, F.`);
    }
    else{
        alert(`La máquina eligió ${rand} ---> Ganaste, GGWP!`);
    }

    comenzar();
}//FIN DE LA FUNCIÓN
function papel()
{

    alert("Pulsaste papel.");
    if (rand == "Piedra"){
        alert(`La máquina eligió ${rand} ---> Ganaste, GGWP!`);
    }
    else if(rand == "Papel"){
        alert(`La máquina eligió ${rand} ---> Empate.`);
    }
    else{
        alert(`La máquina eligió ${rand} ---> Perdiste, F.`);
    }

    comenzar();
}//FIN DE LA FUNCIÓN
function tijera()
{
    
    alert("Pulsaste tijera.");
    if (rand == "Piedra"){
        alert(`La máquina eligió ${rand} ---> Perdiste, F.`);
    }
    else if(rand == "Papel"){
        alert(`La máquina eligió ${rand} ---> Ganaste, GGWP!`);
    }
    else{
        alert(`La máquina eligió ${rand} ---> Empate.`);
    }

    comenzar();
}//FIN DE LA FUNCIÓN