function mostrar()
{
	let rand;
	
	rand = Math.round(Math.random() * (10 - 1) + 1);

	if (rand < 4){

		alert("Vamos, la próxima se puede. Nota = " + rand);

	}
	else if (rand < 9){

		alert("Aprobó. Nota = " + rand);

	}
	else {

		alert("Excelente. Nota = " + rand);

	}

}//FIN DE LA FUNCIÓN