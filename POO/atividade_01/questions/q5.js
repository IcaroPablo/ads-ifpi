import promptSync from 'prompt-sync';
const prompt = promptSync()

var interval = prompt("digite dois números inteiros separados por espaço: ").split(" ").map(Number)

var sequence = ""

for(var i = interval[0] + 1; i < interval[1]; i++) {

    sequence += `${i} `

}

console.log(`os números dentro desse intervalo são: ${sequence}`)