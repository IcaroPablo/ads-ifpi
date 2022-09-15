import promptSync from 'prompt-sync';
const prompt = promptSync()

var average
var sum
var standard_deviation
var historic = []
historic.push(Number(prompt("digite um numero inteiro (digite -1 para terminar): ")))

while(historic[historic.length - 1] !== -1) {

    console.log(calculate())
    historic.push(Number(prompt("\ndigite um numero inteiro (digite -1 para terminar): ")))

}

function calculate() {

    sum = historic.reduce((a, b) => a + b, 0)
    average = sum/historic.length
    standard_deviation = Math.sqrt(historic.map(n => Math.pow(n - average, 2)).reduce((a, b) => a + b, 0)/historic.length)

    return `soma: ${sum}\nmédia: ${average.toFixed(2)}\ndesvio padrão: ${standard_deviation.toFixed(2)}`

}