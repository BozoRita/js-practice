export function posNeg(a: number, b: number, negative: boolean){
 if (a < 0 || b < 0) {
    let result = true
    return result
 }
 if else (a < 0 && b < 0 && negative === true){
    let result = true
    return result
 }
 if else (a < 0 && b < 0 && negative === false){
    let result = false
    return result
 }
 else (a >= 0 && b >= 0){
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