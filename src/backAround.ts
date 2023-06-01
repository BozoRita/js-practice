function backAround(str: string){
  let result = ""

  let index = 0
  let count = 0
  while (str[index] !== undefined){
    result += str[index]
    index = index + 1
    count = count + 1
  }

  return result = str[count] + str + str[count]
}

let res1 = backAround('cat') //tcatt
let res2 = backAround('Hello') //oHelloo
let res3 = backAround('a') //aaa

console.log(res1);
console.log(res2);
console.log(res3);

export {}