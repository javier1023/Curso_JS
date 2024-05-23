'use strict'

// CONDICIONAL IF
// si A es igual a B entonces haz esto

var edad1 = 71;
var edad2 = 12;

// if
// else
// else if
 
/*
 Operadores lógicos
 AND: &&
 OR: ||
 NEGACION: !=
*/

if (edad1 > 17 && edad1 <100){

    console.log("Edad1 es mayor de edad y tienes menos de 100 años");

    if (edad1 == 33){
        console.log("Edad1 es exactamente 33");
    } else if (edad1 > 70){

        console.log("Eres anciano");
    }
}
else {console.log( "Edad 1 no es mayor de edad");

}