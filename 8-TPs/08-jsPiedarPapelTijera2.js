let rand;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
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

	mostrarResultado();
	
}//FIN DE LA FUNCIÓN
function piedra()
{
	alert("Pulsaste piedra.");
    if (rand == "Piedra"){

		alert(`La máquina eligió ${rand} ---> Empate.`);
		ContadorDeEmpates++;

    }
    else if(rand == "Papel"){

		alert(`La máquina eligió ${rand} ---> Perdiste, F.`);
		ContadorDePerdidas++;

    }
    else{

		alert(`La máquina eligió ${rand} ---> Ganaste, GGWP!`);
		ContadorDeGanadas++;

    }

	mostrarResultado();
	comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{

	alert("Pulsaste papel.");
    if (rand == "Piedra"){

		alert(`La máquina eligió ${rand} ---> Ganaste, GGWP!`);
		ContadorDeGanadas++;

    }
    else if(rand == "Papel"){

		alert(`La máquina eligió ${rand} ---> Empate.`);
		ContadorDeEmpates++;

    }
    else{

		alert(`La máquina eligió ${rand} ---> Perdiste, F.`);
		ContadorDePerdidas++;

    }

	mostrarResultado();
	comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	
	alert("Pulsaste tijera.");
    if (rand == "Piedra"){

		alert(`La máquina eligió ${rand} ---> Perdiste, F.`);
		ContadorDePerdidas++;

    }
    else if(rand == "Papel"){

		alert(`La máquina eligió ${rand} ---> Ganaste, GGWP!`);
		ContadorDeGanadas++;

    }
    else{

		alert(`La máquina eligió ${rand} ---> Empate.`);
		ContadorDeEmpates++;

    }

	mostrarResultado();
	comenzar();

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;

}