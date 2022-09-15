import promptSync from 'prompt-sync'
const prompt = promptSync()

var mili = Number(prompt("digite um número em milissegundos: "))

function convert(mili) {

    let seconds = Math.floor(mili/1000)

    let days = Math.floor(seconds/86400)
    seconds = seconds%86400

    let hours = Math.floor(seconds/3600).toString()
    hours = hours.length >= 2 ? hours : "0" + hours
    seconds = seconds%3600

    let minutes = Math.floor(seconds/60).toString()
    minutes = minutes.length >= 2 ? minutes : "0" + minutes
    seconds = (seconds%60).toString()

    seconds = seconds.length >= 2 ? seconds : "0" + seconds

    return `${days} dia(s), ${hours}:${minutes}:${seconds}`

}

console.log(convert(mili))