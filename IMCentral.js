const prompt = require ('prompt-sync')();

const IMC = require ('./IMCFun')


const peso = Number (prompt('Type your weight: >> '));
const altura = Number (prompt('Type your height: >> '));

console.log(`Seu IMC é ${IMC (peso,altura)}`);