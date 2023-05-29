export function sumDouble(a: number, b: number){
    if (a === b) {
        return 2*(a+b)
    }
    else {
        return a+b
    }
}

let res1 = sumDouble(1, 2) //3
let res2 = sumDouble(3, 2) //5
let res3 = sumDouble(2, 2) //8
let res4 = sumDouble(-1, 0) //-1
let res5 = sumDouble(3, 3) //12

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);

/* Bálint megoldása
export function sumDouble(a: number, b: number){
  return a === b ? (a+b)*2 : a+b
}*/