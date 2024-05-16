`use strict`;

//Sin parámetros, sin valor de retorno
function saludo() {
    console.log("¡Hola, mundo!");
}
saludo();

//Con parámetros, sin valor de retorno
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
saludar("Carlos");

//Sin parámetros, con valor de retorno
function obtenerSaludo() {
    return "¡Hola, mundo!";
}

let mensaje = obtenerSaludo();
console.log(mensaje);

//Con parámetros, con valor de retorno
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log("El resultado de la suma es: " + resultado);
