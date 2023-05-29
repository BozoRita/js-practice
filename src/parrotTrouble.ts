export function parrotTrouble(talking: boolean, hour: number){
  return talking === true && (hour < 7 || hour > 20)
}

let res1 = parrotTrouble(true, 6) //true
let res2 = parrotTrouble(true, 7) //false	
let res3 = parrotTrouble(false, 6) //false
let res4 = parrotTrouble(true, 21) //true

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

/* Bálint megoldása: 
export function parrotTrouble(talking: boolean, hour: number){
  return talking && (hour < 7 || hour > 20)
}*/