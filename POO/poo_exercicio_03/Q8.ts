const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let filtered : number[] = array.filter((n: number) => n%2 == 0 );

console.log(filtered);