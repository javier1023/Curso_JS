'use strict'

//Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 - numero2;

alert ("El resultado de la operacion es:" + operacion)

//Tipos de datos

var numero_entero = 44;
var cadena_texto = "texto";
var bool = true;
var bool2 = false;
console.log(numero_entero, cadena_texto, bool, bool2)

// De string a number
var numero_falso = "33";
numero_falso = Number(numero_falso);
numero_falso = parseInt(numero_falso);
console.log(numero_falso + 7);

// De number a string

var string_falso = 44;
console.log(String(string_falso) + 42);

// Comprobar tipo de dato

console.log (typeof(string_falso));

