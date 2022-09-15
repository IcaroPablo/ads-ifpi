import promptSync from 'prompt-sync'
const prompt = promptSync()

var sentence = prompt("digite uma frase: ")

function remove_unwanted_characteres(sentence) {

    return sentence.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

}

console.log(`frase sem vogais acentuadas: ${remove_unwanted_characteres(sentence)}`)