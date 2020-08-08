function mostrar()
{
 
  let tipo, cant, precioU, precioBruto, precioFinal, descuento;
  let tipoMasCaro, ingreso, tipoMayorCant, cantMayorCant;
  let i = 0;
  let sumaPrecioBruto = 0;
  let cantTotal = 0;
  let sumaArena = 0;
  let sumaCal = 0;
  let sumaCemento = 0;
  let precioMasCaro = 0;
  let flagCaro = 0;
  let flagDescuento = 0;

  do{

    i++;
    alert(`PRODUCTO N°${i}`)

    // Ingreso de datos
    tipo = prompt('Ingrese tipo de producto ("arena", "cal" o "cemento"):');
    
    while ((tipo != "arena") && (tipo != "cal") && (tipo != "cemento")){

      tipo = prompt('Ingrese un tipo válido ("arena", "cal" o "cemento"):');

    }


    cant = parseInt(prompt("Ingrese cantidad de bolsas:"));

    while ((cant <= 0) || (isNaN(cant))){

      cant = parseInt(prompt("Ingrese una cantidad válida:"));

    }


    precioU = parseFloat(prompt("Ingrese precio (mayor a 0):"));
    
    while ((precioU <= 0) || (isNaN(precioU))){

      precioU = parseFloat(prompt("Ingrese un precio válido (mayor a 0):"));

    }

    // Precio de la compra
    precioBruto = precioU * cant;
    
    // Precio total acumulado (sin dto)
    sumaPrecioBruto += precioBruto;
    
    // Cantidad total
    cantTotal += cant;

    // Cantidad de bolsas por tipo
    switch(tipo){

      case "arena":

        sumaArena += cant;
        break;
      
      case "cal":

        sumaCal += cant;
        break;
      
      case "cemento":

        sumaCemento += cant;
        break;

    }

    // Tipo mas caro
    if ((flagCaro == 0) || (precioMasCaro < precioU)){

      precioMasCaro = precioU;
      tipoMasCaro = tipo;
      flagCaro = 1;

    }

    // Pregunta al usuario para continuar (o no)
    ingreso = prompt('Desea seguir ingresando compras? ("no" para finalizar)');


  } while (ingreso != "no");
  
  // Descuentos por cantidad
  if ((cantTotal > 10) && (cantTotal <= 30)){
  
    descuento = 85 / 100;
    flagDescuento = 1;
  
  }
  else if (cantTotal > 30){
  
    descuento = 75 / 100;
    flagDescuento = 1;

  }
  

  // RESPUESTAS


  // A
  alert(`El precio total (bruto y sin descuento) es de $${sumaPrecioBruto}.`);

  // B
  if (flagDescuento == 1){
    
    precioFinal = sumaPrecioBruto * descuento;
    alert(`El precio total con descuento es de $${precioFinal}.`);
  
  }
  else{

    alert(`No aplica descuento.`);

  }
  
  // C
  if ((sumaArena > sumaCal) && (sumaArena > sumaCemento)) {

    tipoMayorCant = "arena";
    cantMayorCant = sumaArena;
		
	}
	else if ((sumaCal >= sumaArena) && (sumaCal > sumaCemento)) {

    tipoMayorCant = "cal";
    cantMayorCant = sumaCal;

	}
	else {

    tipoMayorCant = "cemento";
    cantMayorCant = sumaCemento;

  }
  alert(`El tipo de producto con mayor cantidad de bolsas es ${tipoMayorCant}, con ${cantMayorCant} bolsas.`);

  //D
  alert(`El tipo de producto más caro es ${tipoMasCaro}, con un valor de $${precioMasCaro} por bolsa.`);

  // SWITCH PARA TIPO CON MAS CANTIDAD!!!
}
