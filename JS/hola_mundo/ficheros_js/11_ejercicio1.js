/* PROGRAMA QUE NOS PIDA DOS NUMEROS 
Y QUE NOS DIGA CUAL ES MAYOR O SI SON IGUALES
*/

'use-strict'

var edad1 = parseInt(prompt("¿Cual es tu edad?"));
var edad2 = parseInt(prompt("¿Cual es tu otra edad?"));


while(edad1 <=0 || edad2 <=0 || isNaN(edad1)|| isNaN(edad2)){
    alert("Introduce un numero correcto");
    edad1 = parseInt(prompt("¿Cual es tu edad?"));
    edad2 = parseInt(prompt("¿Cual es tu otra edad?"))
}


if (edad1>edad2){
    console.log("la edad " + edad1 + " es mayor que la edad " + edad2);
    alert("la edad " + edad1 + " es mayor que la edad " + edad2);
}
else if (edad1 == edad2){
    console.log("la edad " + edad1 + " es igual que la edad " + edad2);
    alert("la edad " + edad1 + " es igual que la edad " + edad2);
}
else if (edad1<edad2) {
    console.log("la edad " + edad1 + " es menor que la edad " + edad2);
    alert("la edad " + edad1 + " es menor que la edad " + edad2);
}
else{
    alert("Introduce numeros correctos")
}
