/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let prod1, prod2, prod3, suma;

    prod1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    prod2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    prod3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = (prod1 + prod2 + prod3)

	alert("Suma: $" + suma.toFixed(2))
}
function Promedio () 
{
    let prod1, prod2, prod3, prom;

    prod1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    prod2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    prod3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    prom = (prod1 + prod2 + prod3) / 3

    alert("Precio promedio: $" + prom.toFixed(2))
}
function PrecioFinal () 
{
    let prod1, prod2, prod3, final;

    prod1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    prod2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    prod3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    final = (prod1 + prod2 + prod3) * 121 / 100

    alert("Precio final (más IVA 21%): $" + final.toFixed(2))
}