function mostrar()
{
	let estacion, destino, base;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	base = 15000;

	switch(estacion){

		case "Invierno":

			switch(destino){

				case "Bariloche":
					
					alert("La estadía cuesta $" + (base * 120 / 100).toFixed(2));
					break;
				
				case "Mar del plata":
					
					alert("La estadía cuesta $" + (base * 80 / 100).toFixed(2));
					break;

				case "Cataratas":
				case "Cordoba":
					
					alert("La estadía cuesta $" + (base * 90 / 100).toFixed(2));
					break;
				
			}
			break;

		case "Verano":

			switch(destino){

				case "Bariloche":
			
					alert("La estadía cuesta $" + (base * 80 / 100).toFixed(2));
					break;
				
				case "Mar del plata":
					
					alert("La estadía cuesta $" + (base * 120 / 100).toFixed(2));
					break;

				case "Cataratas":
				case "Cordoba":
					
					alert("La estadía cuesta $" + (base * 110 / 100).toFixed(2));
					break;
				
			}
			break;

		case "Otoño":
		case "Primavera":

			switch(destino){

				case "Cordoba":

					alert("La estadía cuesta $" + (base).toFixed(2));
					break;
				
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					
					alert("La estadía cuesta $" + (base * 110 / 100).toFixed(2));
					break;
				
			}
			break;

	}

	/*
	if (estacion == "Invierno"){

		switch(destino){

			case "Bariloche":

				alert("La estadía cuesta $" + ((base * 120 / 100).toFixed(2)));
				break;
			
			case "Mar del plata":

				alert("La estadía cuesta $" + ((base * 80 / 100).toFixed(2)));
				break;

			case "Cataratas":
			case "Cordoba":

				alert("La estadía cuesta $" + ((base * 90 / 100).toFixed(2)));
				break;
			
		}
	}

	else if (estacion == "Verano"){

		switch(destino){

			case "Bariloche":

				alert("La estadía cuesta $" + ((base * 80 / 100).toFixed(2)));
				break;
			
			case "Mar del plata":

				alert("La estadía cuesta $" + ((base * 120 / 100).toFixed(2)));
				break;

			case "Cataratas":
			case "Cordoba":

				alert("La estadía cuesta $" + ((base * 110 / 100).toFixed(2)));
				break;

		}
	}

	else{

		switch(destino){

			case "Cordoba":

				alert("La estadía cuesta $" + ((base).toFixed(2)));
				break;
			
			case "Bariloche":
			case "Cataratas":
			case "Mar del Plata":

				alert("La estadía cuesta $" + ((base * 110 / 100).toFixed(2)));
				break;

		}		
	}
*/
}//FIN DE LA FUNCIÓN