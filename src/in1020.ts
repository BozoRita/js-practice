function in1020(a: number, b: number){
  return (a > 9 && a < 21) || (b > 9 && b < 21)
}

let res1 = in1020(12, 99) //true
let res2 = in1020(21, 12) //true
let res3 = in1020(8, 99) //false

console.log(res1);
console.log(res2);
console.log(res3);

export{}

/*Bálint megoldása: 
nincs ts-file
*/
