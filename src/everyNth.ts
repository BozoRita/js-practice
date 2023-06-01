function everyNth(str: string, n: number){
  let result = ""

  let index = 0
  while (str[index] !== undefined){
    result = result + str[index]
    index = index + n
  }
  return result
}

let res1 = everyNth('Miracle', 2) //Mrce
let res2 = everyNth('abcdefg', 2) // aceg
let res3 = everyNth('abcdefg', 3) // adg

console.log(res1);
console.log(res2);
console.log(res3);

export {}

/* Bálint ugyanígy csinálta meg :) */