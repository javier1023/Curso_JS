/*
Mostrar la media y la suma de los numeros introducidos por el usuario
hasta que el user meta un numero negativo
*/

'use-strict'

var suma = 0;
var media = 0;
var contador = 1


do {
    var numero = parseInt(prompt("Introduce numeros hasta uno negativo"));

    if (isNaN(numero)){
        numero=0;
    }
    else if(numero>=0) {
        suma = suma + numero;
        media = suma / contador;
        contador ++;

    }
}
while (numero>=0){
    alert("La suma de todos los numeros es: " + suma);
    alert("La media de todos los numeros es: " + media);
}

