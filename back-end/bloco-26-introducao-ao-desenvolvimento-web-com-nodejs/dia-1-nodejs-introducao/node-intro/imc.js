const readline = require('readline-sync');

const peso = readline.questionInt('Qual seu peso? ');
const altura = readline.questionFloat('Qual a sua altura? ');

const imc = peso / Math.pow(altura, 2);

console.log(imc);