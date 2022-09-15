import promptSync from 'prompt-sync';
const prompt = promptSync()

var numbers = prompt("digite vários numeros separados por espaço: ").split(" ").map(Number)

function order_ascending(numbers) {

    for(var i = 0; i < numbers.length - 1; i++){
        for(var j = 0; j < numbers.length - 1 - i; j++) {
            if(numbers[j] > numbers[j+1]) {
                var aux = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = aux
            }
        }
    }

    return numbers

}

function order_descending(numbers) {

    for(var i = 0; i < numbers.length - 1; i++){
        for(var j = 0; j < numbers.length - 1 - i; j++) {
            if(numbers[j] < numbers[j+1]) {
                var aux = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = aux
            }
        }
    }

    return numbers

}

console.log(`numeros em ordem crescente: ${order_ascending(numbers)}`)
console.log(`numeros em ordem decrescente: ${order_descending(numbers)}`)