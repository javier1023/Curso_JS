'use strict'

/*
CONDICIONAL SWITCH
*/

var edad=25;
var imprime="";
switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;

    case 25:
        imprime = "Eres un adulto";
    break;

    case 40:
        imprime = "Crisis de los 50";
    break;

    default :
        imprime = "Edad neutra";
    break;

};
alert(imprime)
