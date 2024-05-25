'use-strict'
/*
Pedir al user dos numeros y mostrar todos los numeros que están
entre ellos
*/

var num1 = parseInt(prompt("Escribe un numero"));
var num2 = parseInt(prompt("Escribe otro numero"));

document.write("<h1>De"+num1+" a "+num2+" estan estos numeros: </h1>");
for (var i = num1;i <= num2; i ++){
    document.write(i+ "<br/>");
}