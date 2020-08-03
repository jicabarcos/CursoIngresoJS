/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese F ó M.");
	sexo = sexo.toUpperCase();

	while((sexo != "F") && (sexo != "M")){
	// while (!(sexo == "F") || (sexo == "M"))
		sexo = prompt("Sólo existen dos géneros, maldito no binarie. Ingrese F ó M.");

	}

	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN