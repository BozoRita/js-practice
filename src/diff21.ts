export function diff21(n: number) {
    return n > 21 ? (n-21)*2 : 21-n
}

let res1 = diff21(19) //2
let res2 = diff21(10) //11
let res3 = diff21(21) //0
let res4 = diff21(22) //2

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

/* Bálint megoldása: 
export function diff21(num: number){
  let result
  if (num > 21) {
    result = (num-21)*2
  } else {
    result = 21-num
  }
  return result
}*/