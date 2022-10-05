function concatenate(numbers : number[]) : string {

    let returnString : string = "";
    numbers.forEach((n) => returnString += n + "-");

    returnString = returnString.slice(0, -1)
    return returnString;

}

console.log(concatenate([1, 2, 3]));