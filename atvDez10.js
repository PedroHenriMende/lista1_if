/*
Nome: Pedro Henrique Mendes de Jesus
*/
console.clear();
var teclado = require("prompt-sync")();
console.log("Digite 1 para sim ou 0 para n\u00E3o");
var resposta1 = parseFloat(teclado("Telefonou para a v\u00EDtima?"));
var resposta2 = parseFloat(teclado("Esteve no local do crime?"));
var resposta3 = parseFloat(teclado("Mora perto da v\u00EDtima?"));
var resposta4 = parseFloat(teclado("Devia para a v\u00EDtima?"));
var resposta5 = parseFloat(teclado("J\u00E1 trabalhou com a v\u00EDtima?"));
var interrogatorio = 0;
if (resposta1 == 1) {
    interrogatorio++;
}
if (resposta2 == 1) {
    interrogatorio++;
}
if (resposta3 == 1) {
    interrogatorio++;
}
if (resposta4 == 1) {
    interrogatorio++;
}
if (resposta5 == 1) {
    interrogatorio++;
}
if (interrogatorio == 2) {
    console.log("Suspeita");
}
else if (interrogatorio >= 3 && interrogatorio <= 4) {
    console.log("Cúmplice");
}
else if (interrogatorio == 5) {
    console.log("Assassino");
}
else {
    console.log("Inocente");
}
