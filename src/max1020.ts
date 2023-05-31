function max1020(a: number, b: number){
  if (a > 9 && a < 21 && b > 9 && b < 21){
    if (a >= b){
        return a
    }
    if (b > a){
        return b
    }
  }
  if ((a > 20 || a < 10) && b > 9 && b < 21){
        return b
    }
  if ((b > 20 || b < 10) && a > 9 && a < 21){
        return a
    }
  if ((a > 20 || a < 10) && (b > 20 || b < 10)){
        return 0
  }
  }


let res1 = max1020(11, 19) //19		
let res2 = max1020(19, 11) //19		
let res3 = max1020(11, 9) //11
let res4 = max1020(9, 21) //0

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

export {}

/*Bálint megoldása: 
nincs meg a ts-file
*/