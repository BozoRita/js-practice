export function posNeg(a: number, b: number, negative: boolean){
 if (a < 0 !== b < 0 && negative === false){
   let result = true
   return result
 }
 else if (a < 0 && b < 0 && negative === true){
   let result = true
   return result
 }
 else {
   let result = false 
   return result
 }
}

let res1 = posNeg(1, -1, false) //true
let res2 = posNeg(-1, 1, false) //true
let res3 = posNeg(-4, -5, true) //true
let res4 = posNeg(-4, -5, false) //false

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

/* Bálint megoldása: 
export function posNeg(a: number, b: number, negative: boolean){
  return negative ? a < 0 && b < 0 : a < 0 !== b < 0
}
*/