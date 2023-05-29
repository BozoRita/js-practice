export function makes10(a: number, b: number) {
    if (a === 10 || b === 10 || a+b === 10) {
        return true
    }
    else {
        return false
    }
}

let res1 = makes10(9, 10) //true	
let res2 = makes10(9, 9) //false
let res3 = makes10(1, 9) //true
let res4 = makes10(10, 1) //true

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

/* korábbi megoldásom: 
function makes10(a: number, b: number){
  if (a+b === 10) {
     let result = true
     return result
  }

  if (a === 10 || b === 10) {
    let result = true
    return result
  }

  else (a + b !== 10) {
     let result = false
     return result
  }
  
}
*/

/* még1 megoldásom: 
function makes10(a: number, b: number) {
    return (a === 10 || b === 10 || a+b === 10) ? true : false
}
*/

/* Bálint megoldása: 
export function makes10(a: number, b: number){
  if (a === 10) {
    return true
  } else if (b === 10) {
    let result = true
    return result
  } else if (a + b === 10) {
    let result = true
    return result
  } else {
    let result = false
    return result
  }
}
*/

