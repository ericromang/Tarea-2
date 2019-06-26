var cadena = require("./cadena");
var palabra = "luz azul";
var palindromo = cadena.separar(palabra);
var letras = cadena.letras(palabra);
var palabras = cadena.palabras(palabra);
var vocales = cadena.vocales(palabra);
var consonantes = cadena.consonantes(palabra);

console.log("Es palindromo: "+palindromo);
console.log("Numero  de palabras: "+palabras);
console.log("Numero  de letras: "+letras);
console.log("Numero  de vocales: "+vocales);
console.log("Numero  de consonantes: "+consonantes);
