function backAround(str: string){
  let result = ""

  let index = 0

  while (str[index] !== undefined){
    result += str[index]
    index = index + 1
  }

  return result = str[index-1] + str + str[index-1]
}

let res1 = backAround('cat') //tcatt
let res2 = backAround('Hello') //oHelloo
let res3 = backAround('a') //aaa

console.log(res1);
console.log(res2);
console.log(res3);

export {}