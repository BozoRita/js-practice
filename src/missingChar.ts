function missingChar(str: string, n: number){
    let result = ""

    let index = 0
    while (str[index] !== undefined){
        if (index !== n){
            result += str[index]
        }
        index = index + 1
    }

    return result
}

let res1 = missingChar('kitten', 1) //ktten	
let res2 = missingChar('kitten', 0) //itten
let res3 = missingChar('kitten', 4) //kittn	
let res4 = missingChar('Hi', 0)  //i

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

export {}

/* Bálint megoldása: 
export function missingChar(str: string, n: number){
  let result = ""

  let index = 0
  while (str[index] !== undefined) {
    console.log("adding " + str[index] + " to result")
    if (index !== n) {
      result += str[index]
    }
    index = index + 1
  }

  return result
}
*/