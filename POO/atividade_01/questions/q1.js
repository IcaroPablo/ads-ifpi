import promptSync from 'prompt-sync';
const prompt = promptSync()

var num = Number(prompt("digite um numero com pelo menos uma casa decimal: "))

console.log(`antecessor: ${Math.floor(num)}`)
console.log(`sucessor: ${Math.ceil(num)}`)