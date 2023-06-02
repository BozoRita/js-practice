function frontBack(str: string){
    if (!str[1]){
        return str
    }

    let firsChar = str[0]
    let middle = ""
    let lastChar 

    let index = 1

    while (str[index] !== undefined){
        if (str[index+1] !== undefined){
            middle = middle + str[index]
        }
        else {
            lastChar = str[index]
        }
        index = index + 1
    }
  
    return lastChar + middle + firsChar
}

let res1 = frontBack('code') // eodc
let res2 = frontBack('a') // a
let res3 = frontBack('ab') // ba

console.log(res1);
console.log(res2);
console.log(res3);

export {}

/* Bálint megoldása: 
export function frontBack(str: string){
  if (!str[1]) {
    return str
  }

  let middle = ""

  let firstChar = str[0]
  let lastChar

  let index = 1
  while (str[index] !== undefined) {

    if (str[index+1] !== undefined) {
      middle = middle + str[index]
    } else {
      lastChar = str[index]
    }
    
    index = index + 1
  }

  return lastChar + middle + firstChar
}*/