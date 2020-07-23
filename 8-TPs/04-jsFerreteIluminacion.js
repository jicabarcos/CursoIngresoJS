/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $PRECIO pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     
    let cantidad, marca, precioConDescuento, descuento, iibb, aumentoiibb, iibbespecifico, importeFinal;
    const PRECIO = 35; 

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    iibb = (10 / 100);
    aumentoiibb = (110 / 100);

    if (cantidad >= 6){

        descuento = (50 / 100);
        precioConDescuento = PRECIO * cantidad * descuento;

        if (precioConDescuento > 120){
        
            iibbespecifico = precioConDescuento * iibb;
            alert(`Usted pagó $${iibbespecifico} de IIBB.`);

            importeFinal = precioConDescuento * aumentoiibb;
            alert(`Precio Final: $${importeFinal}`);          

        }
        else{

            document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);

        }

    }
    else if (cantidad == 5){

        switch(marca){

            case "ArgentinaLuz":

                descuento = (60 / 100);
                precioConDescuento = PRECIO * cantidad * descuento;
            
                if (precioConDescuento > 120){
        
                    iibbespecifico = precioConDescuento * iibb;
                    alert(`Usted pagó $${iibbespecifico} de IIBB.`);

                    importeFinal = precioConDescuento * aumentoiibb;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);

                }
                else{

                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
            
                }               
                break;

            default:

                descuento = (70 / 100);
                precioConDescuento = PRECIO * cantidad * descuento;
                if (precioConDescuento > 120){
        
                    iibbespecifico = precioConDescuento * iibb;
                    alert(`Usted pagó $${iibbespecifico} de IIBB.`);
        
                    importeFinal = precioConDescuento * aumentoiibb;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
        
                }
                else{
        
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
                    
                }        
    
        }
    
    }
    else if (cantidad == 4){   

        switch(marca){

            case "ArgentinaLuz":
            case "FelipeLamparas":

                descuento = (75 / 100);
                precioConDescuento = PRECIO * cantidad * descuento;
            
                if (precioConDescuento > 120){
        
                    iibbespecifico = precioConDescuento * iibb;
                    alert(`Usted pagó $${iibbespecifico} de IIBB.`);

                    importeFinal = precioConDescuento * aumentoiibb;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);

                }
                else{

                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
            
                }               
                break;

            default:

                descuento = (80 / 100);
                precioConDescuento = PRECIO * cantidad * descuento;
                if (precioConDescuento > 120){
        
                    iibbespecifico = precioConDescuento * iibb;
                    alert(`Usted pagó $${iibbespecifico} de IIBB.`);
        
                    importeFinal = precioConDescuento * aumentoiibb;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
        
                }
                else{
        
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
                    
                }        
    
        }
    
    }
    else if (cantidad == 3){

        switch(marca){

            case "ArgentinaLuz":

                descuento = (85 / 100);
                precioConDescuento = PRECIO * cantidad * descuento;
            
                if (precioConDescuento > 120){
        
                    iibbespecifico = precioConDescuento * iibb;
                    alert(`Usted pagó $${iibbespecifico} de IIBB.`);

                    importeFinal = precioConDescuento * aumentoiibb;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);

                }
                else{

                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
            
                }               
                break;

            case "FelipeLamparas":

                descuento = (90 / 100);
                precioConDescuento = PRECIO * cantidad * descuento;
                
                if (precioConDescuento > 120){
            
                    iibbespecifico = precioConDescuento * iibb;
                    alert(`Usted pagó $${iibbespecifico} de IIBB.`);
    
                    importeFinal = precioConDescuento * aumentoiibb;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
    
                }
                else{
    
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
                
                }               
                break;    

            default:

                descuento = (95 / 100);
                precioConDescuento = PRECIO * cantidad * descuento;
                if (precioConDescuento > 120){
        
                    iibbespecifico = precioConDescuento * iibb;
                    alert(`Usted pagó $${iibbespecifico} de IIBB.`);
        
                    importeFinal = precioConDescuento * aumentoiibb;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
        
                }
                else{
        
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
                    
                }        
    
        }

    }
    else{

        importeFinal = PRECIO * cantidad;
        document.getElementById("txtIdprecioDescuento").value = importeFinal.toFixed(2);

    }

}