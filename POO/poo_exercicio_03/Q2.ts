function isPrime(n : number) : boolean {

    for(let i : number = 2; i < n; i++) {
        if(n%i == 0) return false;
    }

    return true;
}

console.log(`o número 2 é primo ? ${isPrime(2)}`);
console.log(`o número 15 é primo ? ${isPrime(15)}`);
console.log(`o número 17 é primo ? ${isPrime(17)}`);