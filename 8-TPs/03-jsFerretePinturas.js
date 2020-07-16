/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempF, tempC;
    
    tempF = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempC = (tempF - 32) * 5 / 9;

    alert(tempF.toFixed(1) + "°F es equivalente a " + tempC.toFixed(1) + "°C.");
}

function CentigradosFahrenheit () 
{
	let tempF, tempC;
    
    tempC = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempF = (tempC * 9 / 5) + 32;

    alert(tempC.toFixed(1) + "°C es equivalente a " + tempF.toFixed(1) + "°F.");
}
