function vocativo(nome : string, pronome : string = "Sr.") : string {

    return pronome + " " + nome;

}

console.log(vocativo("João"));
console.log(vocativo("Sávia", "Sra."));