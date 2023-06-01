function endUp(str: string){
    let result = ""
  
    let index = 0
    while (str[index] !== undefined) {
  
      if (str[index+3] === undefined) {
        result = result + str[index].toUpperCase()
      } else {
        result = result + str[index]
      }
  
      index = index + 1
    }
  
    return result
  }

let res1 = endUp('Hello') //HeLLO
let res2 = endUp('hi there') //hi thERE
let res3 = endUp('hi') //HI

console.log(res1);
console.log(res2);
console.log(res3);

export{}

