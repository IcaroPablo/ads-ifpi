import promptSync from 'prompt-sync';
const prompt = promptSync()

const month = Number(prompt("digite o número de um mês: "))

if(month === 1) console.log("janeiro, 31 dias")
else if(month === 2) console.log("fevereiro, 28 dias")
else if(month === 3) console.log("março, 31 dias")
else if(month === 4) console.log("abril, 30 dias")
else if(month === 5) console.log("maio, 31 dias")
else if(month === 6) console.log("junho, 30 dias")
else if(month === 7) console.log("julho, 31 dias")
else if(month === 8) console.log("agosto, 31 dias")
else if(month === 9) console.log("setembro, 30 dias")
else if(month === 10) console.log("outubro, 31 dias")
else if(month === 11) console.log("novembro, 30 dias")
else if(month === 12) console.log("dezembro, 31 dias")
else console.log("numero invślido")