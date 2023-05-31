function icyHot(temp1: number, temp2: number){
  return (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0)
}

let res1 = icyHot(120, -1) // true
let res2 = icyHot(-1, 120) //true
let res3 = icyHot(2, 120) //false

console.log(res1);
console.log(res2);
console.log(res3);

export{}

/*Bálint megoldása: 
nincs ts-file
*/