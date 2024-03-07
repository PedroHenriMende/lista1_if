/*
Nome: Pedro Henrique Mendes de Jesus
*/
console.clear();

const teclado = require(`prompt-sync`)();

console.log(`Digite 1 para sim ou 0 para não`)
let resposta1: number = parseFloat(teclado(`Telefonou para a vítima?`));
let resposta2: number = parseFloat(teclado(`Esteve no local do crime?`));
let resposta3: number = parseFloat(teclado(`Mora perto da vítima?`));
let resposta4: number = parseFloat(teclado(`Devia para a vítima?`));
let resposta5: number = parseFloat(teclado(`Já trabalhou com a vítima?`));

let interrogatorio: number = 0;

if (resposta1 == 1){
    interrogatorio++;
}
if (resposta2 == 1){
    interrogatorio++;
}
if (resposta3 == 1){
    interrogatorio++;
}
if (resposta4 == 1){
    interrogatorio++;
}
if (resposta5 == 1){    
    interrogatorio++;
}
if (interrogatorio == 2) {
    console.log("Suspeita");
} else if (interrogatorio >= 3 && interrogatorio <= 4) {
    console.log("Cúmplice");
} else if (interrogatorio == 5) {
    console.log("Assassino");
} else {
    console.log("Inocente");
}