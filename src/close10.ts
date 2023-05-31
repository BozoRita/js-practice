function close10(a: number, b: number){
  if (a <= 10 && b <= 10){
    if (10-a > 10-b){
        return b
    }
    if (10-b > 10-a){
        return a
    }
    if (10-a === 10-b){
        return 0
    }
  }
  if (a >= 10 && b >= 10){
    if (a > b){
        return b
    }
    if (b > a){
        return a
    }
    if (a === b){
        return 0
    }
  }
  if (a > 10 && b < 10){
    if (a-10 > 10-b){
        return b
    }
    if (a-10 < 10-b){
        return a
    }
    if (a-10 === 10-b){
        return 0
    }
  }
  if (b > 10 && a < 10){
    if (b-10 > 10-a){
        return a
    }
    if (b-10 < 10-a){
        return b
    }
    if (b-10 === 10-a){
        return 0
    }
  }
}

let res1 = close10(8, 13) //8
let res2 = close10(13, 8) //8
let res3 = close10(13, 7) //0

console.log(res1);
console.log(res2);
console.log(res3);

export{}

/*Bálint megoldása: 
nincs ts-file
*/