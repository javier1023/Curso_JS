'use-strict'

// Funciones anónimas = función por callback
// Crear una función sin nombre dentro de una var
// Se utiliza para callbacks --> Funciones que se ejecutan dentro de otra

// sumaymuestra y sumapordos son funciones anónimas
/*
function sumame(a,b,sumaymuestra, sumapordos){
    var sumar = a+b;
    sumaymuestra(sumar);
    sumapordos(sumar);
    return sumar;
}

console.log(
    sumame(4,5, function(dato){
        console.log("La suma es: "+dato)
    },
    function(dato){
        console.log("La suma por dos es: "+dato*2)
    })
);
*/
// funciones flecha -> Sustituir function por una flecha

function sumame(a,b,sumaymuestra, sumapordos){
    var sumar = a+b;
    sumaymuestra(sumar);
    sumapordos(sumar);
    return sumar;
}

console.log(
    sumame(4,5, dato => {
        console.log("La suma es: "+dato)
    },
    dato => {
        console.log("La suma por dos es: "+dato*2)
    })
);