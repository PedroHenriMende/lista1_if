/*
Nome: Pedro Henrique Mendes de Jesus
*/
console.clear();
var teclado = require("prompt-sync")();
var x = parseFloat(teclado("Digite um numero para x"));
var y = parseFloat(teclado("Digite um numero para y"));
var z = 0;
console.log(" O Valor de X \u00E9 ".concat(x, " e Y \u00E9 ").concat(y));
z = x;
x = y;
y = z;
console.log("Bhamm !!! Agora X \u00E9 ".concat(x, " e Y \u00E9 ").concat(y));
