'use-strict'

//PARAMETROS REST Y SPREAD
// ...var = guarda en un array el resto de parametros que se le pase

function listadofrtuas(fruta1,fruta2, ...resto_frutas){
    console.log(fruta1);
    console.log(fruta2);
    console.log(resto_frutas);
}

//listadofrtuas("pera","manzana","Sandia","melocotón","sandia");

var frutas = ["Naranja","Manzana"]
listadofrtuas(...frutas,"manzana","Sandia","melocotón","sandia");

