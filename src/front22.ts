function front22(str: string){
    if (str[1] !== undefined){
        
    let result = ""

    let index = 0
    while (str[index] !== undefined){
        result += str[index]
        index = index + 1
    }


    return result = str[0] + str[1] + result + str[0] + str[1]
    }

    else {
        let result = str + str + str
        return result
    }

}

let res1 = front22('kitten') //kikittenki
let res2 = front22('Ha') //HaHaHa
let res3 = front22('abc') //ababcab

console.log(res1);
console.log(res2);
console.log(res3);

export {}

/*Bálint megoldása: 
export function front22(str: string){
  if (str[1] !== undefined) {
    return str[0] + str[1] + str + str[0] + str[1]
  }
  if (str === "") {
    return ""
  }
  return str + str + str
}
*/