import promptSync from 'prompt-sync'
const prompt = promptSync()
let valores = []
let last_value

let [v, t] = prompt("digite um valor em reais e a taxa de juros em porcentagem separados por espaço: ").split(" ").map(Number)
last_value = v

for(let i = 1; i<=12; i++) {

    valores.push((last_value+((t/100)*last_value*i)).toFixed(2))
    last_value = Number(valores[valores.length - 1])
    
}

console.log(valores)
