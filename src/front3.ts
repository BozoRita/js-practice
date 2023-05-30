function front3(str: string){
    if (str[3] === undefined){
        let result = str + str + str
        return result
    }
    else {
        let result = str[0] + str[1] + str[2] + str[0] + str[1] + str[2] + str[0] + str[1] + str[2] 
        return result
    }
  
}

let res1 = front3('Java') //JavJavJav		
let res2 = front3('Chocolate') //ChoChoCho
let res3 = front3('abc') //abcabcabc		
let res4 = front3('ab') //ababab		
let res5 = front3('a') //aaa
let res6 = front3('') //

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);

export {}

/*Bálint megoldása: 
export function front3(str: string){
  if (str[3] === undefined) {
    return str + str + str
  }
  let front = str[0] + str[1] + str[2]
  return front + front + front
}
*/