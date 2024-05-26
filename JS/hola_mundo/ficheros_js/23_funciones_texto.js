'use-strict'

// Transformación de textos

var numero = 444;
var texto = "Bienvenido al curso";
var texto2 = "Estoy aprendiendo mucho";

numero = numero.toString();
texto = texto.toLocaleUpperCase();

console.log(numero, texto);

// Calcular longitud

var nombre = "Javier"

console.log(nombre.length);

// Concatenar

var textototal = texto.concat(texto2);

console.log(textototal);

// Metodo

// .indexOf

var busqueda = texto.search("CURSO");

console.log(busqueda);

// match
var busqueda2 = texto.match("CURSO");

console.log(busqueda2);