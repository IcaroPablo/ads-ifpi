import promptSync from 'prompt-sync';
const prompt = promptSync()

var numbers = prompt("digite vários numeros separados por espaço: ").split(" ").map(Number)

function find_smaller(numbers, index = 0, smaller = Infinity) {

    if(numbers[index] < smaller) smaller = numbers[index]

    if(index === numbers.length - 1) return smaller

    return find_smaller(numbers, index + 1, smaller)

}

function find_biggest(numbers, index = 0, biggest = -Infinity) {

    if(numbers[index] > biggest) biggest = numbers[index]

    if(index === numbers.length - 1) return biggest

    return find_biggest(numbers, index + 1, biggest)

}

console.log(`menor valor: ${find_smaller(numbers)}`)

console.log(`maior valor: ${find_biggest(numbers)}`)