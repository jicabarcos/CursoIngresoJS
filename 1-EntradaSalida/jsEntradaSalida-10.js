/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe, finalcondto;

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	finalcondto = importe * 75 / 100;

	document.getElementById("txtIdResultado").value = parseFloat(finalcondto).toFixed(2);
}
