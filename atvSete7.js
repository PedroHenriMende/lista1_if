/*
Nome: Pedro Henrique Mendes de Jesus
*/
console.clear();
var teclado = require("prompt-sync")();
var quantidade = parseFloat(teclado("Digitea quantidades de ma\u00E7\u00E3s"));
var precoPadrao;
if (quantidade < 12) {
    precoPadrao = 0.3;
}
else {
    precoPadrao = 0.25;
}
var total = quantidade * precoPadrao;
console.log(" O Valor das ma\u00E7\u00E3s foram ".concat(total));
