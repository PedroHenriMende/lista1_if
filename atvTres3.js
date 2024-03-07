/*
Nome: Pedro Henrique Mendes de Jesus
*/
console.clear();
var teclado = require("prompt-sync")();
var letra = (teclado("Digite uma letra"));
var vogalA = "a";
var vogalE = "e";
var vogalI = "i";
var vogalO = "o";
var vogalU = "u";
if (letra == vogalA || letra == vogalE || letra == vogalI || letra == vogalO || letra == vogalU) {
    console.log("A letra \u00E9 uma vogal");
}
else if (letra != vogalA || letra != vogalE || letra != vogalI || letra != vogalO || letra != vogalU) {
    console.log("A letra \u00E9 uma consoante");
}
else {
    console.log("Letra invalida");
}
