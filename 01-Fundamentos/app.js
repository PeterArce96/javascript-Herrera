// console.log("Hola Mundo");

//var --> forma antigua de crear variables

// Polyfill --> código que provee el funcionamiento de una  nueva característica de Javascript(ES6), en versiones viejas como ES5 (funcion flecha, clases, etc), código que permite utilizar características modernas en versiones vieja de JS.

let a = 10, 
    b = 20, 
    c = 30, 
    d = 40, 
    x = a + b;

console.log('%c Mis variables', 'color:blue; font-weight:bold'); //CSS
console.log( {a} );
console.log( {b} );
console.log( {c} );

let e = 'Hola ';
let f = 'Spiderman';

console.table({a,b,c,d,x,e,f});

const saludo = e + f; //concatena

console.log(saludo)

// el console es el objeto y log() es el metodo
// Si colocamos el argumento entre llaves, nos muestra un objeto con su valor

// JS es un lenguaje interpretado, porque el navegador va ejecutar las líneas en forma secuencial.