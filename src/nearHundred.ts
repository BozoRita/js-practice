export function nearHundred(n: number){
    return (n > 89 && n < 111) || (n > 189 && n < 211)
}

let res1 = nearHundred(93) //true	
let res2 = nearHundred(90) //true
let res3 = nearHundred(89) //false
let res4 = nearHundred(110) //true
let res5 = nearHundred(189) //false

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);

/* Bálint megoldása: 
export function nearHundred(n: number){
  if (n > 89 && n < 111) {
    return true
  } else if (n > 189 && n < 211) {
    return true
  } else {
    let result = false
    return result
  }
}
*/