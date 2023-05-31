function intMax(a: number, b: number, c: number){
  if (a > b && a > c){
    return a
  }
  else if (b > a && b > c){
    return b
  }
  else if (c > a && c > b){
    return c
  }
  
}

let res1 = intMax(1, 2, 3) //3
let res2 = intMax(1, 3, 2) //3
let res3 = intMax(3, 2, 1) //3

console.log(res1);
console.log(res2);
console.log(res3);

export{}

/*Bálint megoldása: 
nincs ts-file
*/
