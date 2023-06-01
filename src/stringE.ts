function stringE(str: string){
    let count = 0
    let index = 0

    while (str[index] !== undefined){
        if (str[index] === "e")
        count = count + 1
        index = index + 1
    }

    if (count >=1 && count <=3){
        return true
    }

    return false
  
}

let res1 = stringE('Hello') //true
let res2 = stringE('Heelle') //true
let res3 = stringE('Heelele') //false

console.log(res1);
console.log(res2);
console.log(res3);

export{}

/*Bálint megoldása: 
export function stringE(str: string){
  let count = 0


  let index = 0
  while (str[index] !== undefined) {

    if (str[index] === "e") {
      count += 1
    }

    index = index + 1
  }


  return count > 0 && count < 4
}
*/