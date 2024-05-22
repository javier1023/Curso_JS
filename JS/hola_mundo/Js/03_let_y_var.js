'use strict'
// Let y Var

// Diferencia entre let y var

// Prueba con var
var numero  = 40;
console.log(numero); // tiene que dar 40
if (true){
    var numero = 50;
    console.log(numero);// valor 50
}

console.log(numero); // valor 50


// Prueba con let
// Let crea una variable local a nivel de bloque de código. Con let solo actuamos a nivel de bloque
let texto  = "Javier";
console.log(texto); // Javier
if (true){
    let texto = "Carlos";
    console.log(texto);// Carlos
}

console.log(texto); // Javier