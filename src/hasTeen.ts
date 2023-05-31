function hasTeen(a: number, b: number, c: number){
  return (a > 12 && a < 20) || (b > 12 && b < 20) || (c > 12 && c < 20)
}

let res1 = hasTeen(13, 20, 10) //true
let res2 = hasTeen(20, 19, 10) //true
let res3 = hasTeen(20, 10, 13) //true

console.log(res1);
console.log(res2);
console.log(res3);

export{}

/*Bálint megoldása: 
nincs ts-file
*/