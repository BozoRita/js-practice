function in3050(a: number, b: number){
  if (a < 51 && a > 39 && b < 51 && b > 39){
    return true
  }
  if (a < 41 && a > 29 && b < 41 && b > 29){
    return true
  }
  return false
}

let res1 = in3050(30, 31) //true
let res2 = in3050(30, 41) //false
let res3 = in3050(40, 50) //true

console.log(res1);
console.log(res2);
console.log(res3);

export {}

/*Bálint megoldása: 
nincs meg a ts-file
*/