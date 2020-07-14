/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1, num2, suma;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = num1 + num2;

	alert("La suma es " + suma + ".");	
}

function restar()
{
	let num1, num2, resta;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = num1 - num2;

	alert("La resta es " + resta + ".");	
}

function multiplicar()
{ 
	let num1, num2, prod;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	prod = num1 * num2;

	alert("El producto es " + prod + ".");	
}

function dividir()
{
	let num1, num2, cociente;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	cociente = num1 / num2;

	alert("El cociente es " + cociente + ".");	
}

