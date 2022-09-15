import promptSync from 'prompt-sync';
const prompt = promptSync()

var multiplier = 0.0000084;
var real = Number(prompt("digite um valor em reais(45.50): "))
console.log(`valor em bitcoin: ${real*multiplier}`)