function loneTeen(a: number, b: number){
  return (a > 12 && a < 20) !== (b > 12 && b < 20)
}

let res1 = loneTeen(13, 99) //true
let res2 = loneTeen(21, 19) //true
let res3 = loneTeen(13, 13) //false

console.log(res1);
console.log(res2);
console.log(res3);

export{}

/*Bálint megoldása: 
nincs ts-file
*/