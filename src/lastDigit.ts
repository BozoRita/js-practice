function lastDigit(a: number, b: number){
  return a % 10 === b % 10
}

let res1 = lastDigit(7, 17) // true
let res2 = lastDigit(6, 17) // false
let res3 = lastDigit(3, 113) //true

console.log(res1);
console.log(res2);
console.log(res3);

export{}

/*Bálint megoldása: 
nincs meg a ts-file
*/