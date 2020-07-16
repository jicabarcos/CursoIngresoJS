/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo, ancho, perim;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    perim = (largo + ancho) * 2;

    alert("Se necesitan " + (perim * 3) + "m de alambre.");
}

function Circulo () 
{
    let radio, perim;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perim = 2 * Math.PI * radio;

    alert("Se necesitan " + (perim * 3).toFixed(2) + "m de alambre.");	
}

function Materiales () 
{
    let largo, ancho, area;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = largo * ancho;

    alert("Se necesitan " + (area * 2) + " bolsas de cemento y " + (area * 3) + " bolsas de cal");
}